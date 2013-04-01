package br.udesc.psoview.function.test;

import br.udesc.psoview.core.Particle;
import br.udesc.psoview.function.Function;
import java.io.Serializable;

/**
 *
 * @author Ricardo Grunitzki
 */
public class Griewank extends Function implements Serializable {

    /**
     *
     */
    public Griewank() {
        setYUp(600d);
        setYLow(-600d);
        setDescricao("label.function.griewank");
    }

    @Override
    public double eval(Particle p) {
//        double sum = 0d;
//        double mult = 0d;
//        for(int i = 0; i< p.getPosicao().length; i++){
//            sum+=Math.pow(p.getPosicao()[i],2);
//            mult*=Math.cos(p.getPosicao()[i]/ Math.sqrt(i+1));
//        }
//        return 1+sum/4000 + mult;

        double sum = 0.0;
        double prod = 1.0;
        for (int i = 1; i <= p.getPosicao().length; i++) {
            double xi = p.getPosicao()[(i - 1)];
            sum += (xi * xi);
            prod *= Math.cos(xi / Math.sqrt(i));
        }
        return (sum / 4000.0) - prod + 1.0;
    }
}
