package br.udesc.psoview.function.test;

import br.udesc.psoview.core.Particle;
import br.udesc.psoview.function.Function;
import java.io.Serializable;

/**
 * 
 * @author Ricardo Grunitzki
 */
public class Sphere extends Function implements Serializable{

    /**
     * 
     */
    public Sphere() {
        setYUp(5.12d);
        setYLow(-5.12d);
        setDescricao("label.function.sphere");
    }

    @Override
    public double eval(Particle p) {
        double f = 0d;
        for (int i = 0; i < p.getPosicao().length; i++) {
            f += Math.pow(p.getPosicao()[i], 2);
        }
        return f;
    }
}
