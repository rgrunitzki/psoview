package br.udesc.psoview.function.test;

import br.udesc.psoview.core.Particle;
import br.udesc.psoview.function.Function;
import java.io.Serializable;

/**
 * 
 * @author Ricardo Grunitzki
 */
public class Alpine extends Function implements Serializable{

    /**
     * 
     */
    public Alpine() {
        setYUp(5.12d);
        setYLow(-5.12d);
        setDescricao("label.function.alpine");
    }

    @Override
    public double eval(Particle p) {
      double f = 0d;
        for (int i = 0; i < p.getPosicao().length; i++) {
            f += Math.abs(p.getPosicao()[i] * Math.sin(p.getPosicao()[i]) + 0.1d * p.getPosicao()[i]);
        }
        return f;
    }
}
