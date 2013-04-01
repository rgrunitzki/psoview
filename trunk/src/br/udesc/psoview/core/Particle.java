
package br.udesc.psoview.core;

import java.io.Serializable;


/**
 * 
 * @author Ricardo Grunitzki
 */
public class Particle implements Serializable{
    
    private double posicao[];
    private double velocidade[];
    private Double fitness;
    
    /**
     * 
     * @param n
     */
    public Particle(int n){
        posicao = new double[n];
        velocidade = new double[n];
//        fitness = Math.pow(10,50);
        fitness = null;
    }

    /**
     * 
     * @return
     */
    public double[] getPosicao() {
        return posicao;
    }

    /**
     * 
     * @param posicao
     */
    public void setPosicao(double[] posicao) {
        this.posicao = posicao;
    }

    /**
     * 
     * @return
     */
    public double[] getVelocidade() {
        return velocidade;
    }

    /**
     * 
     * @param velocidade
     */
    public void setVelocidade(double velocidade[]) {
        this.velocidade = velocidade;
    }

    /**
     * 
     * @return
     */
    public Double getFitness() {
        return fitness;
    }

    /**
     * 
     * @param fitness
     */
    public void setFitness(Double fitness) {
        this.fitness = fitness;
    }
}
