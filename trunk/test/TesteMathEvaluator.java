
import br.udesc.psoview.MathEvaluator.IEvaluator;
import br.udesc.psoview.MathEvaluator.MathEvaluator;


public class TesteMathEvaluator {
    
    public static void main(String[] args) throws Exception {
        // TODO code application logic here
        IEvaluator evaluator = new MathEvaluator();
        evaluator.setExpression("5+a+sin(a)");//manda o codigo para o osmar
        evaluator.addVariable("a", 1.0);
        System.out.println(evaluator.getValue().doubleValue());
    }
}
