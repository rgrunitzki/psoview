 
package br.udesc.psoview.function;

import br.udesc.psoview.core.Particle;

/**
 * 
 * @author Ricardo Grunitzki
 */
public interface IFunction {
    
    /**
     * 
     * @param p
     * @return
     */
    public abstract double eval(Particle p);
    /**
     * 
     * @return
     */
    public double getYLow();
    /**
     * 
     * @return
     */
    public double getYUp();
    /**
     * 
     * @return
     */
    public String getDescricao();
    /**
     * 
     * @param yLow
     */
    public void setYLow(double yLow);
    /**
     * 
     * @param yUp
     */
    public void setYUp(double yUp);
    /**
     * 
     * @param descricao
     */
    public void setDescricao(String descricao);
    
}
