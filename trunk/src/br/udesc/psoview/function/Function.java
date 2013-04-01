package br.udesc.psoview.function;

import java.io.Serializable;

/**
 * 
 * @author Ricardo Grunitzki
 */
public abstract class Function implements IFunction, Serializable {

    private double yLow = 0d;
    private double yUp = 0d;
    private String descricao = "";

    /**
     * 
     * @return
     */
    @Override
    public double getYLow() {
        return yLow;
    }

    /**
     * 
     * @return
     */
    @Override
    public double getYUp() {
        return yUp;
    }

    /**
     * 
     * @param yLow
     */
    @Override
    public void setYLow(double yLow) {
        this.yLow = yLow;
    }

    /**
     * 
     * @param yUp
     */
    @Override
    public void setYUp(double yUp) {
        this.yUp = yUp;
    }

    /**
     * 
     * @return
     */
    @Override
    public String getDescricao() {
        return this.descricao;
    }

    /**
     * 
     * @param descricao
     */
    @Override
    public void setDescricao(String descricao) {
        this.descricao = descricao;
    }

    @Override
    public boolean equals(Object obj) {
        if (obj == null) {
            return false;
        }
        if (getClass() != obj.getClass()) {
            return false;
        }
        final Function other = (Function) obj;
        if (Double.doubleToLongBits(this.yLow) != Double.doubleToLongBits(other.yLow)) {
            return false;
        }
        if (Double.doubleToLongBits(this.yUp) != Double.doubleToLongBits(other.yUp)) {
            return false;
        }
        if ((this.descricao == null) ? (other.descricao != null) : !this.descricao.equals(other.descricao)) {
            return false;
        }
        return true;
    }

    @Override
    public int hashCode() {
        int hash = 7;
        hash = 29 * hash + (int) (Double.doubleToLongBits(this.yLow) ^ (Double.doubleToLongBits(this.yLow) >>> 32));
        hash = 29 * hash + (int) (Double.doubleToLongBits(this.yUp) ^ (Double.doubleToLongBits(this.yUp) >>> 32));
        hash = 29 * hash + (this.descricao != null ? this.descricao.hashCode() : 0);
        return hash;
    }
}
