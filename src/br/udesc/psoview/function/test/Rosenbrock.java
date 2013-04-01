package br.udesc.psoview.function.test;

import br.udesc.psoview.core.Particle;
import br.udesc.psoview.function.Function;
import java.io.Serializable;

/**
 * 
 * @author Ricardo Grunitzki
 */
public class Rosenbrock extends Function implements Serializable{

    /**
     * 
     */
    public Rosenbrock() {
        setYUp(100d);
        setYLow(-100d);
        setDescricao("label.function.rosenbrock");
    }

    @Override
    public double eval(Particle p) {
        double f = 0d;
        for (int i = 0; i < p.getPosicao().length - 1; i++) {
            f += (100.0 * ((p.getPosicao()[i+1] - (p.getPosicao()[i] * p.getPosicao()[i])) * (p.getPosicao()[i+1] - (p.getPosicao()[i] * p.getPosicao()[i])))) + ((1.0 - p.getPosicao()[i]) * (1.0 - p.getPosicao()[i]));
        }
        return f;
    }
}
