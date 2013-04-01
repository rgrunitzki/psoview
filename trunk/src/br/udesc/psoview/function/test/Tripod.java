package br.udesc.psoview.function.test;

import br.udesc.psoview.core.Particle;
import br.udesc.psoview.function.Function;
import java.io.Serializable;

/**
 *
 * @author Ricardo Grunitzki
 */
public class Tripod extends Function implements Serializable {

    /**
     *
     */
    public Tripod() {
        setYUp(100d);
        setYLow(-100d);
        setDescricao("label.function.tripod");
    }

    @Override
    public double eval(Particle p) {
        if (p.getPosicao().length == 2) {
            return -sig(p.getPosicao()[1]) * (1 + sig(p.getPosicao()[0])) + Math.abs((p.getPosicao()[0] + 50 * sig(p.getPosicao()[1])) * (1 - 2 * sig(p.getPosicao()[0]))) + Math.abs(p.getPosicao()[1] + 50 * (1 - 2 * sig(p.getPosicao()[1])));
        } else {
            return 1d;
        }
    }

    private int sig(double f) {
        if (f >= 0) {
            return 1;
        } else {
            return 0;
        }
    }
}