package br.udesc.psoview.function;

import br.udesc.psoview.MathEvaluator.IEvaluator;
import br.udesc.psoview.MathEvaluator.MathEvaluator;
import br.udesc.psoview.core.Particle;
import java.io.Serializable;

/**
 *
 * @author Ricardo Grunitzki
 */
public class UserDefined extends Function implements Serializable {

    private MathEvaluator evaluator = new MathEvaluator();

    /**
     *
     * @param description
     * @throws Exception
     */
    public UserDefined(String description) throws Exception {
        evaluator.setExpression(description);
        setYUp(5.0d);
        setYLow(-5.0d);
        setDescricao("label.userDefined");
    }

    @Override
    public double eval(Particle p) {
        evaluator.setExpression(evaluator.getExpression().toLowerCase());
        if (evaluator.getExpression().contains("y")) {
            evaluator.addVariable("y", p.getPosicao()[0]);
        }
        if (evaluator.getExpression().contains("x")) {
            evaluator.addVariable("x", p.getPosicao()[1]);
        }
        return evaluator.getValue();
    }

    /**
     *
     * @return
     */
    public IEvaluator getEvaluator() {
        return evaluator;
    }

    /**
     *
     * @param evaluator
     */
    public void setEvaluator(MathEvaluator evaluator) {
        this.evaluator = evaluator;
    }
}