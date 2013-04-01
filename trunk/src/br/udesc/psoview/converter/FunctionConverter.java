package br.udesc.psoview.converter;

import br.udesc.psoview.bean.PSOViewBean;
import br.udesc.psoview.function.Function;
import java.io.Serializable;
import javax.faces.bean.ManagedBean;
import javax.faces.bean.ManagedProperty;
import javax.faces.bean.SessionScoped;
import javax.faces.component.UIComponent;
import javax.faces.context.FacesContext;
import javax.faces.convert.Converter;
import javax.faces.convert.FacesConverter;

/**
 * Classe responsável por realizar a conversão dos objetos Função presentes na
 * view.
 *
 * @author Ricardo Grunitzki
 */
@ManagedBean
@SessionScoped
@FacesConverter(forClass = Function.class, value = "functionConverter")
public class FunctionConverter implements Converter, Serializable {

    @ManagedProperty(value = "#{psoViewBean}")
    private PSOViewBean psoViewBean;

    /**
     * Método que converte a String informada pelo usuário na view para Objeto.
     *
     * @param context
     * @param component
     * @param value
     * @return Function - Função selecionada.
     */
    @Override
    public Object getAsObject(FacesContext context, UIComponent component, String value) {
        for (Function function : getPsoViewBean().getFunctions()) {
            if (value != null && !value.equals("")) {
                if (value.contains(function.getClass().getName())) {
                    return function;
                }
            }
        }
        return getPsoViewBean().getFunctions().get(0);
    }

    /**
     * Método responsável por converter o Function em String.
     *
     * @param context
     * @param component
     * @param value
     * @return String - Função selecionada.
     */
    @Override
    public String getAsString(FacesContext context, UIComponent component, Object value) {
        return String.valueOf(value);
    }

    public PSOViewBean getPsoViewBean() {
        return psoViewBean;
    }

    public void setPsoViewBean(PSOViewBean psoViewBean) {
        this.psoViewBean = psoViewBean;
    }
}