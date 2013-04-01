package br.udesc.psoview.dwr;

import br.udesc.psoview.bean.PSOViewBean;
import br.udesc.psoview.core.Particle;
import java.io.Serializable;
import javax.servlet.http.HttpSession;
import org.directwebremoting.WebContext;
import org.directwebremoting.WebContextFactory;
import org.directwebremoting.proxy.dwr.Util;

/**
 * Classe responsável por enviar requisições ajax ao javascript.
 *
 * @author Ricardo Grunitzki
 */
public class PSOViewAjax implements Serializable {

    private final WebContext wc;

    public PSOViewAjax() {
        this.wc = WebContextFactory.get();
        getPSOViewBean().setAjax(this);
    }

    /**
     * Retorna a instância PSOViewBean armazenada na sessão.
     *
     * @return PSOViewBean - Bean gerenciável da sessao.
     */
    private PSOViewBean getPSOViewBean() {
        WebContext wcf = WebContextFactory.get();
        HttpSession session = wcf.getHttpServletRequest().getSession();
        return (PSOViewBean) session.getAttribute("psoViewBean");
    }

    /**
     * Método responsável por retornar os pontos que irão compor o gráfico.
     *
     * @return float[][3] - Vetor com posições x, y e z dos pontos.
     */
    public float[][] graphPoints() {
        float steps = 50;
        int start = (int) Math.round(getPSOViewBean().getFunction().getYLow());
        int end = (int) Math.round(getPSOViewBean().getFunction().getYUp());
        int tamanho = Math.abs(start) + Math.abs(end);
        double increase = tamanho / steps;
        float[][] positions = new float[Math.round(steps * steps)][3];
        try {
            int k = 0;
            for (double i = start; i < end; i += increase) {
                for (double j = start; j < end; j += increase) {
                    Particle p = new Particle(2);
                    p.getPosicao()[0] = i;
                    p.getPosicao()[1] = j;
                    positions[k][0] = (float) i;
                    positions[k][1] = (float) j;
                    positions[k][2] = (float) getPSOViewBean().getFunction().eval(p);
                    k++;
                }
            }
            return positions;
        } catch (Exception e) {
            return positions;
        }

    }

    public void changeYlow(float low) {
        this.getPSOViewBean().getFunction().setYLow(low);
    }

    public void changeyUp(float up) {
        this.getPSOViewBean().getFunction().setYUp(up);
    }

    public void changeDelay(int delay) {
        this.getPSOViewBean().setDelay(delay);
    }

    public void updateDataPoints(Object positions, int sleep) throws InterruptedException {
        Thread.sleep(sleep);
        Util util = new Util(wc.getScriptSession());
        util.addFunctionCall("drawParticles", positions);
    }
}