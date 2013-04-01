package br.udesc.psoview.function.test;

import br.udesc.psoview.core.Particle;
import br.udesc.psoview.function.Function;
import java.io.Serializable;

/**
 *
 * @author Ricardo Grunitzki
 */
public class Ackley extends Function implements Serializable {

    /**
     *
     */
    public Ackley() {
        setYUp(32d);
        setYLow(-32d);
        setDescricao("label.function.ackley");
    }

    @Override
    public double eval(Particle p) {
        double a = 20.0, b = 0.2, c = 2.0 * Math.PI;
        double sum1 = 0.0;
        double sum2 = 0.0;
        for (int i = 0; i < p.getPosicao().length; i++) {
            double xi = p.getPosicao()[i];
            sum1 += (xi * xi);
            sum2 += Math.cos(c * xi);
        }
        return (-a * Math.exp(-b * Math.sqrt(sum1 / p.getPosicao().length))) - Math.exp(sum2 / p.getPosicao().length) + a + Math.E;
    }
}
