package br.udesc.psoview.core;

import br.udesc.psoview.function.Function;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;
import java.util.Random;

/**
 *
 * @author Ricardo Grunitzki
 */
public class PSO extends java.util.Observable implements Swarm, Serializable {

//  Enxame de partículas.
    private List<Particle> enxame = new ArrayList<Particle>();
//  Melhor posição já encontrada pela partícula  .
    private List<Particle> bestEnxame = new ArrayList<Particle>();
//  Número de parâmetros das partículas.  
    private int n;
//  Quantidade partículas do enxame.
    private int npt = 40;
//  Velocidade máxima da partícula.
    private double vMax;
//  Erro do critério de parada.
    private double eps = 0.001;
//  Parâmetro social.
    private double c1 = 2;
//  Parâmetro cognitivo.
    private double c2 = 2;
//  Peso inercial.
    private double w;
//  Peso inercial inicial.
    private double wi = 0.9;
//  Peso inercial final.
    private double wf = 0.2;
//  Melhores posições já encontradas pelo enxame.
    private double fstar[];
//  Melhor partícula da iteração atual.
    private Particle lBest;
//  Melhor partícula do enxame.
    private Particle gBest;
//  Número de chamadas da função objetivo.
    private int ncall = 0;
//  Número de melhores posições para fstar[].
    private int nps = 4;
//  Número de iterações do algorimto.
    private int kiter = 1;
//  Número máximo de iterações do algoritmo.
    private int niter = 300;
//  Função a ser otimizada.
    private Function funcao;
//  Gera números aleatórios  
    private Random random = new Random();
//  Define o tipo a estratégia de variação do peso inercial  
    private int inertialFunction = 1;

//  Método construtor
    /**
     *
     * @param n
     * @param npt
     * @param fun
     */
    public PSO(int n, int npt, Function fun) {
        funcao = fun;
        this.n = n;
        this.npt = npt;
        lBest = new Particle(n);
        lBest.setFitness(null);
        gBest = new Particle(n);
        gBest.setFitness(null);
        fstar = new double[nps];
        vMax = ((this.funcao.getYUp() - this.funcao.getYLow()) / 2);
        for (int i = 0; i < nps; i++) {
            fstar[i] = 10000d;
        }
        for (int i = 0; i < npt; i++) {
            Particle p = new Particle(n);
            enxame.add(p);
            p = new Particle(n);
            bestEnxame.add(p);
        }
        enxame = bestEnxame;
    }
 
   @Override
    public void run() {
        inicializar();
//      Detalhar o que é o soma.
        double soma = Double.MAX_VALUE;
        boolean isInicio = true;
        do {
            if (!isInicio) {
//              Incrementa o contador de iterações.
                kiter++;

//              Notifica o PSOBean que há atualizações disponíveis.
                setChanged();
                notifyObservers();

//              Atualiza a melhor posição já encontrada por cada partícula.
                for (int i = 0; i < npt; i++) {
                    if (bestEnxame.get(i).getFitness() != null) {
                        if (enxame.get(i).getFitness() < bestEnxame.get(i).getFitness()) {
                            bestEnxame.add(i, enxame.get(i));
                        }
                    } else {
                        bestEnxame.add(i, enxame.get(i));
                    }
                }
//              Atualiza o peso inercial de acordo com a estratégia escolhida.
                atualizarW();
//              Cria uma nova posição
                atualizarPosicao();
            } else {
                isInicio = false;
            }

//          
            for (int i = 0; i < npt; i++) {
//              Define o fitness para cada partícula.
                enxame.get(i).setFitness(funcao.eval(enxame.get(i)));
//              Incrementa o contador do número de chamadas da função objetivo.
                ncall++;
//              Atualiza a melhor posição encontrada pela iteração. lBest
                if (lBest.getFitness() != null) {
                    if (enxame.get(i).getFitness() < lBest.getFitness()) {
                        lBest = enxame.get(i);
                    }
                } else {
                    lBest = enxame.get(i);
                }
            }

//          Atualiza a pior posição do fstar por lBest.
            fstar[nps - 1] = lBest.getFitness();
//          Ordena novamente o vetor fstar.
            fstar = bubbleSort(fstar);

//          Atualiza a melhor posição global.
            if (gBest.getFitness() != null) {
                if (lBest.getFitness() < gBest.getFitness()) {
                    gBest = lBest;
                }
            } else {
                gBest = lBest;
            }

//            for (int i = 0; i < npt; i++) {
//                if (enxame.get(i).getFitness() < bestEnxame.get(i).getFitness()) {
//                    bestEnxame.add(i,enxame.get(i));
//                }
//            }

//          Efetua o calculo do erro.
            soma = 0d;
            for (int i = 0; i < nps; i++) {
                soma += Math.pow((fstar[i] - gBest.getFitness()), 2);
            }
            soma = Math.sqrt(soma);

//      Verifica critérios os de parada.
        } while ((kiter < niter) && (soma > eps));
    }

    private void inicializar() {
        for (int i = 0; i < npt; i++) {
            for (int j = 0; j < n; j++) {
                enxame.get(i).getVelocidade()[j] = ((2 * random.nextDouble() - 1) * vMax);
                enxame.get(i).getPosicao()[j] = (funcao.getYUp() - funcao.getYLow()) * random.nextDouble() + funcao.getYLow();
                enxame.get(i).setFitness(funcao.eval(enxame.get(i)));
            }
        }
//        wDiversity2();
    }

    private void atualizarPosicao() {
        for (int i = 0; i < npt; i++) {
            for (int j = 0; j < n; j++) {
                enxame.get(i).getVelocidade()[j] =
                        w * enxame.get(i).getVelocidade()[j]
                        + c1 * random.nextDouble() * (bestEnxame.get(i).getPosicao()[j] - enxame.get(i).getPosicao()[j])
                        + c2 * random.nextDouble() * (gBest.getPosicao()[j] - enxame.get(i).getPosicao()[j]);

                enxame.get(i).getPosicao()[j] = enxame.get(i).getPosicao()[j] + enxame.get(i).getVelocidade()[j];

                if ((enxame.get(i).getPosicao()[j] < funcao.getYLow()) || (enxame.get(i).getPosicao()[j] > funcao.getYUp())) {
                    enxame.get(i).getPosicao()[j] = (funcao.getYUp() - funcao.getYLow()) * random.nextDouble() + funcao.getYLow();
                    enxame.get(i).getVelocidade()[j] = enxame.get(i).getVelocidade()[j] * -0.5;

                }
            }
        }
    }

    private void atualizarW() {
        switch (inertialFunction) {
            case 1:
                wDiversity2();
                break;

            case 2:
                wJiao();
                break;
        }
    }

    private void wJiao() {
        w = wi * Math.pow(1.005, -kiter);
//        w = wi * Math.pow(1.00002, -kiter);
//        System.out.println("w " + w);
    }

//    private void wDiversity() {
//        double s1 = 0;
//        double dg = 0;
//        double fi;
//
//        for (int i = 0; i < npt; i++) {
//            for (int j = 0; j < n; j++) {
//                s1 += Math.pow((enxame.get(i).getPosicao()[j] - gBest.getPosicao()[j]), 2);
//            }
//            dg += Math.sqrt(s1);
//            s1 = 0;
//        }
//        dg /= this.npt;
//
//        if (dg < dmin) {
//            dmin = dg;
//        } else if (dg > dmax) {
//            dmax = dg;
//        }
//
//        for (int i = 0; i < npt; i++) {
//            dg = 0;
//            for (int j = 0; j < npt; j++) {
//                for (int k = 0; k < n; k++) {
//                    s1 += Math.pow((enxame.get(i).getPosicao()[k] - enxame.get(j).getPosicao()[k]), 2);
//                }
//                dg += Math.sqrt(s1);
//                s1 = 0;
//            }
//            dg /= (npt - 1);
//
//            if (dg < dmin) {
//                dmin = dg;
//            } else if (dg > dmax) {
//                dmax = dg;
//            }
//        }
//
//        fi = ((dg - dmin) / (dmax - dmin));
//        w = 0.4 * Math.exp(0.86 * fi);
//    }
    double dmin = 0.0000001;
    double dmax = 0d;

    private void wDiversity2() {
        double s1 = 0;
        double dg = 0;
        double fi;

        for (int i = 0; i < npt; i++) {
            for (int j = 0; j < n; j++) {
                s1 += Math.pow((enxame.get(i).getPosicao()[j] - gBest.getPosicao()[j]), 2);
            }
            dg += Math.sqrt(s1);
            s1 = 0;
        }
        dg /= this.npt;

        if (dg < dmin) {
            dmin = dg;
        } else if (dg > dmax) {
            dmax = dg;
        }
        fi = ((dg - dmin) / (dmax - dmin));
        w = 0.4 * Math.exp(0.86 * fi);
        
//        System.out.println("Interação: " + kiter);
//        System.out.println("Dmax: " + dmax);
//        System.out.println("Dmin: " + dmin);
//        System.out.println("dg: " + dg);
//        System.out.println("w: " + w);
//        System.out.println("-");
//        System.out.println("-");        
    }

    public List<Particle> getEnxame() {
        return bestEnxame;
    }

    public void setEnxame(List<Particle> enxame) {
        this.enxame = enxame;
    }

    public double getC1() {
        return c1;
    }

    public void setC1(double c1) {
        this.c1 = c1;
    }

    public double getC2() {
        return c2;
    }

    public void setC2(double c2) {
        this.c2 = c2;
    }

    public double getEps() {
        return eps;
    }

    public void setEps(double eps) {
        this.eps = eps;
    }

    public Function getFuncao() {
        return funcao;
    }

    public void setFuncao(Function funcao) {
        this.funcao = funcao;
    }

    public Particle getgBest() {
        return gBest;
    }

    public void setgBest(Particle gBest) {
        this.gBest = gBest;
    }

    public int getInertialFunction() {
        return inertialFunction;
    }

    public void setInertialFunction(int inertialFunction) {
        this.inertialFunction = inertialFunction;
    }

    public int getKiter() {
        return kiter;
    }

    public void setKiter(int kiter) {
        this.kiter = kiter;
    }

    public Particle getlBest() {
        return lBest;
    }

    public void setlBest(Particle lBest) {
        this.lBest = lBest;
    }

    public int getN() {
        return n;
    }

    public void setN(int n) {
        this.n = n;
    }

    public int getNiter() {
        return niter;
    }

    public void setNiter(int niter) {
        this.niter = niter;
    }

    public int getNps() {
        return nps;
    }

    public void setNps(int nps) {
        this.nps = nps;
    }

    public int getNpt() {
        return npt;
    }

    public void setNpt(int npt) {
        this.npt = npt;
    }

    public double getW() {
        return w;
    }

    public void setW(double w) {
        this.w = w;
    }

    public double getWf() {
        return wf;
    }

    public void setWf(double wf) {
        this.wf = wf;
    }

    public double getWi() {
        return wi;
    }

    public void setWi(double wi) {
        this.wi = wi;
    }

    public int getNcall() {
        return ncall;
    }

    public void setNcall(int ncall) {
        this.ncall = ncall;
    }

//  teste
    public double[] bubbleSort(double v[]) {

        for (int i = v.length; i >= 1; i--) {
            for (int j = 1; j < i; j++) {
                if (v[j - 1] > v[j]) {
                    double aux = v[j];
                    v[j] = v[j - 1];
                    v[j - 1] = aux;
                }
            }
        }
        return v;
    }
}
