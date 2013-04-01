package br.udesc.psoview.function.test;

import br.udesc.psoview.core.Particle;
import br.udesc.psoview.function.Function;
import java.io.Serializable;

/**
 *
 * @author Ricardo Grunitzki
 */
public class Schwefel extends Function implements Serializable {

    /**
     *
     */
    public Schwefel() {
        setYUp(500d);
        setYLow(-500d);
        setDescricao("label.function.schwefel");
    }

    @Override
    public double eval(Particle p) {
        double sum = 0.0;
        for (int i = 0; i < p.getPosicao().length; i++) {
            sum += -p.getPosicao()[i] * Math.sin(Math.sqrt(Math.abs(p.getPosicao()[i])));
        }
        return 418.9829 * p.getPosicao().length + sum;
    }
}
