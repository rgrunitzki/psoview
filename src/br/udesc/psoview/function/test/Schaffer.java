package br.udesc.psoview.function.test;

import br.udesc.psoview.core.Particle;
import br.udesc.psoview.function.Function;
import java.io.Serializable;

/**
 * 
 * @author Ricardo Grunitzki
 */
public class Schaffer extends Function implements Serializable{

    /**
     * 
     */
    public Schaffer() {
        setYUp(600d);
        setYLow(-600d);
        setDescricao("label.function.schaffer");
    }

    @Override
    public double eval(Particle p) {
        double f = 0d;
        for (int i = 0; i < p.getPosicao().length; i++) {
            f += Math.pow(p.getPosicao()[i], 2);
        }
        f = 0.5d + (Math.pow(Math.sin(Math.sqrt(f)), 2) - 0.5d) / Math.pow(1d + 0.001d * f, 2);
        return f;
    }
}
