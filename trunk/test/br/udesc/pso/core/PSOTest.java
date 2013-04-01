/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package br.udesc.pso.core;

import br.udesc.psoview.core.PSO;
import br.udesc.psoview.function.Function;
import br.udesc.psoview.function.test.Ackley;
import br.udesc.psoview.function.test.Alpine;
import br.udesc.psoview.function.test.Griewank;
import br.udesc.psoview.function.test.Rastrigin;
import br.udesc.psoview.function.test.Rosenbrock;
import br.udesc.psoview.function.test.Schaffer;
import br.udesc.psoview.function.test.Schwefel;
import br.udesc.psoview.function.test.Sphere;
import br.udesc.psoview.function.test.Tripod;
import java.util.ArrayList;
import java.util.List;
import org.junit.After;
import org.junit.AfterClass;
import org.junit.Before;
import org.junit.BeforeClass;
import org.junit.Test;

/**
 *
 * @author udescvirtual
 */
public class PSOTest {

    private PSO currentPso;
    private static List<Function> functions;

    public PSOTest() {
    }

    @BeforeClass
    public static void setUpClass() throws Exception {
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
    }

    @AfterClass
    public static void tearDownClass() throws Exception {
    }

    @Before
    public void setUp() {
    }

    @After
    public void tearDown() {
    }

    /**
     * Test of run method, of class PSO.
     */
    @Test
    public void testRun() {
//        for (Function func : functions) {
        testFunciton(new Tripod());
//        }
    }

    public void testFunciton(Function func) {
        System.out.println("Funcao: " + func.getClass().getName());
        double resultadoMedio = 0d;
        double iteracoesMedio = 0d;
        double melhorResultado = Double.MAX_VALUE;
        double melhorIteracao = 0d;
        int itercoes = 5;
        for (int i = 0; i < itercoes; i++) {
            this.currentPso = new PSO(2, 40, functions.get(0));
            this.currentPso.setNiter(2000);
            this.currentPso.setWi(0.9);
            this.currentPso.setWf(0.2);
            this.currentPso.setEps(0.0001);
            this.currentPso.setC1(2);
            this.currentPso.setC2(2);
            this.currentPso.setNps(4);
            this.currentPso.setInertialFunction(1);
            currentPso.setFuncao(func);
            currentPso.run();
            System.out.println("execução:         " + (i + 1));
            System.out.println("resultado:        " + currentPso.getgBest().getFitness());
            System.out.println("iterações:        " + currentPso.getKiter());
            resultadoMedio += currentPso.getgBest().getFitness();
            iteracoesMedio += currentPso.getKiter();

            if (melhorResultado > currentPso.getgBest().getFitness()) {
                melhorResultado = currentPso.getgBest().getFitness();
                melhorIteracao = currentPso.getKiter();
            }
        }
        System.out.println("---");
        System.out.println("resultado_médio: " + resultadoMedio / itercoes);
        System.out.println("iterações_médio: " + iteracoesMedio / itercoes);
        System.out.println("melhor rsultado: " + melhorResultado);
        System.out.println("melhor iteraçao: " + melhorIteracao);
        System.out.println("---------------: ");
        System.out.println("");
    }
}