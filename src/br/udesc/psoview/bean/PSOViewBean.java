package br.udesc.psoview.bean;

import br.udesc.psoview.core.PSO;
import br.udesc.psoview.core.Particle;
import br.udesc.psoview.dwr.PSOViewAjax;
import br.udesc.psoview.function.Function;
import br.udesc.psoview.function.UserDefined;
import br.udesc.psoview.function.test.Ackley;
import br.udesc.psoview.function.test.Alpine;
import br.udesc.psoview.function.test.Griewank;
import br.udesc.psoview.function.test.Rastrigin;
import br.udesc.psoview.function.test.Rosenbrock;
import br.udesc.psoview.function.test.Schaffer;
import br.udesc.psoview.function.test.Schwefel;
import br.udesc.psoview.function.test.Sphere;
import br.udesc.psoview.function.test.Tripod;
import java.io.IOException;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;
import java.util.Observable;
import java.util.logging.Level;
import java.util.logging.Logger;
import javax.faces.application.FacesMessage;
import javax.faces.bean.ManagedBean;
import javax.faces.bean.SessionScoped;
import javax.faces.context.FacesContext;
import org.primefaces.context.RequestContext;

@ManagedBean(name = "psoViewBean")
@SessionScoped
public class PSOViewBean implements Serializable, java.util.Observer {

    //Lista com todas as funções.
    private List<Function> functions;
    //Função selecionada.
    private Function function;
    //Variável utilizada pela view para carregar os parâmetros do objeto.
    private PSO pso;
    //Lista com as lingugens disponíveis.
    private List<String> language;
    //Linguagem atual.
    private String currentLanguage;
    //Lista com as expressões disponívels pela biblioteca MathEvaluator.
    private List<String> expressions;
    //Expressão atual que irá compor a função definida pelo usuário.
    private String currentExpression = "x*y";
    //Tempo de atualização em milisegundos.
    private int delay = 120;
    
    private PSOViewAjax ajax = null;

    //Método construtor.
    public PSOViewBean() throws Exception {
        initLanguage();
        initFunctions();
        initExpressions();
        pso = new PSO(2, 20, function);
    }

    private void initLanguage() {
        language = new ArrayList<String>();
        language.add("pt_BR");
        language.add("en_US");
        currentLanguage = language.get(0);
    }

    private void initFunctions() throws Exception {
        functions = new ArrayList<Function>();
        functions.add(new Ackley());
        functions.add(new Alpine());
        functions.add(new Griewank());
        functions.add(new Rastrigin());
        functions.add(new Rosenbrock());
        functions.add(new Schaffer());
        functions.add(new Schwefel());
        functions.add(new Sphere());
        functions.add(new Tripod());
        functions.add(new UserDefined("x+y"));
        function = functions.get(0);
    }

    private void initExpressions() {
        expressions = new ArrayList<String>();
        expressions.add("sin()");
        expressions.add("cos()");
        expressions.add("tang()");
        expressions.add("acos()");
        expressions.add("asin()");
        expressions.add("atan()");
        expressions.add("sqrt()");
        expressions.add("sqrt()");
        expressions.add("sqr()");
        expressions.add("log()");
        expressions.add("ln()");
        expressions.add("min(x,y)");
        expressions.add("max(x,y)");
        expressions.add("exp()");
        expressions.add("floor()");
        expressions.add("ceil()");
        expressions.add("abs()");
        expressions.add("neg()");
        expressions.add("rnd()");
        expressions.add("hip()");
        expressions.add("exp()");
    }

    /*
     *
     * Métodos da view.
     *
     */
    //Método que responsável por definir nova lingaguem.
    public void changeLanguage(String language) {
        setCurrentLanguage(language);
    }

    //Método responsável por oferecer suporte auto completar.
    public List<String> completeFunction(String query) {
        String results = query;
        List<String> suggestions = new ArrayList<String>();
        int lastIndex = 0;
        if (query.lastIndexOf("+") > lastIndex) {
            lastIndex = query.lastIndexOf("+") + 1;
        }
        if (query.lastIndexOf("-") > lastIndex) {
            lastIndex = query.lastIndexOf("-") + 1;
        }
        if (query.lastIndexOf("*") > lastIndex) {
            lastIndex = query.lastIndexOf("*") + 1;
        }
        if (query.lastIndexOf("/") > lastIndex) {
            lastIndex = query.lastIndexOf("/") + 1;
        }
        if (query.lastIndexOf("^") > lastIndex) {
            lastIndex = query.lastIndexOf("^") + 1;
        }
        query = query.substring(lastIndex, query.length());
        results = results.substring(0, lastIndex);
        for (String p : expressions) {
            if (p.startsWith(query)) {
                suggestions.add(results + p);
            }
        }
        return suggestions;
    }

    //Método responsável por validar a expressão definida pelo usuário.
    public void validateExpression() throws Exception, Exception {
        if (!this.currentExpression.isEmpty()) {
            boolean valid = false;
            try {
                if (this.currentExpression.length() < 2) {
                    return;
                }
                currentExpression = currentExpression.toLowerCase();
                int variables = 0;
                if (this.currentExpression.contains("y")) {
                    variables++;
                }
                if (this.currentExpression.contains("x")) {
                    variables++;
                }
                if (this.currentExpression.endsWith("(") || this.currentExpression.endsWith("+") || this.currentExpression.endsWith("-") || this.currentExpression.endsWith("*") || this.currentExpression.endsWith("/") || this.currentExpression.endsWith("%")) {
                    return;
                }
                Particle p = new Particle(variables);

                UserDefined ud = new UserDefined(currentExpression);
                ud.setYLow(this.function.getYLow());
                ud.setYUp(this.function.getYUp());
                ud.eval(p);
                valid = true;
                this.function = ud;
            } finally {
                RequestContext.getCurrentInstance().addCallbackParam("draw", valid);
            }
        }
    }

    //Método responsável por construir a função definida pelo usuário.
    public boolean buildFunction() {
        if (function instanceof UserDefined) {
            return true;
        } else {
            return false;
        }
    }

    /*
     *
     * Métodos do PSO.
     *
     */
    //Método responsável por otimizar a função objetivo.
    private int contador = 0;

    public void optimize() throws IOException, Exception {
        contador = 0;
        if (function instanceof UserDefined) {
            double ylow = function.getYLow();
            double yup = function.getYUp();
            function = new UserDefined(currentExpression);
            function.setYLow(ylow);
            function.setYUp(yup);

        }
        PSO pso2 = new PSO(pso.getN(), pso.getNpt(), function);
        pso2.addObserver(this);
        pso2.setC1(pso.getC1());
        pso2.setC2(pso.getC2());
        pso2.setWi(pso.getWi());
        pso2.setWf(pso.getWf());
        pso2.setEps(pso.getEps());
        pso2.setNiter(pso.getNiter());
        pso2.setInertialFunction(pso.getInertialFunction());
        pso2.run();
        this.pso = pso2;
        FacesContext.getCurrentInstance().addMessage(null, new FacesMessage("Fim da Otimização"));
    }

    //Método responsável por retornar o vetor com as posições das partículas do enxame.
    private float[][] particlesPosition(PSO pso) {
        float[][] posicoes = new float[pso.getNpt()][3];
        for (int i = 0; i < pso.getEnxame().size(); i++) {
            posicoes[i][0] = (float) pso.getEnxame().get(i).getPosicao()[0];
            posicoes[i][1] = (float) pso.getEnxame().get(i).getPosicao()[1];
            posicoes[i][2] = pso.getEnxame().get(i).getFitness().floatValue();
        }
        return posicoes;
    }

    //Método responsável por retornar ao cliente a nova posição do enxame.
    @Override
    public void update(Observable o, Object arg) {
//            lembrar de apagar o contador
        final PSO pso3 = (PSO) o;
        try {
            ajax.updateDataPoints((Object) particlesPosition(pso3), this.delay);
        } catch (InterruptedException ex) {
            Logger.getLogger(PSOViewBean.class.getName()).log(Level.SEVERE, null, ex);
        }
    }
    /*
     *
     * Métodos Acessores
     *
     */

    public List<Function> getFunctions() {
        return functions;
    }

    public void setFunctions(List<Function> functions) {
        this.functions = functions;
    }

    public Function getFunction() {
        return function;
    }

    public void setFunction(Function funcao) {
        this.function = funcao;
    }

    public PSO getPso() {
        return pso;
    }

    public void setPso(PSO pso) {
        this.pso = pso;
    }

    public List<String> getLanguage() {
        return language;
    }

    public void setLanguage(List<String> language) {
        this.language = language;
    }

    public String getCurrentLanguage() {
        return currentLanguage;
    }

    public void setCurrentLanguage(String currentLanguage) {
        this.currentLanguage = currentLanguage;
    }

    public String getCurrentExpression() {
        return currentExpression;
    }

    public void setCurrentExpression(String currentExpression) throws Exception {
        this.currentExpression = currentExpression;
    }

    public int getDelay() {
        return delay;
    }

    public void setDelay(int delay) {
        this.delay = delay;
    }

    public PSOViewAjax getAjax() {
        return ajax;
    }

    public void setAjax(PSOViewAjax ajax) {
        this.ajax = ajax;
    }
}