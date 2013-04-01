//Variável que armazena as partículas
this.points = null;
//Variável que armazena o vetor função
this.data = null;
//Objeto que armazena o objeto Graph3d
this.graph = null;


//Inicializa o objeto que contêm as partículas.
function initPoints(){
    points = new google.visualization.DataTable();
    points.addColumn('number', 'x');
    points.addColumn('number', 'y');
    points.addColumn('number', 'z');
}
      
//Função responsável por desenhar a função.
function drawVisualization(){
    //Inicializa o objeto e define suas colunas.
    data = new google.visualization.DataTable();
    data.addColumn('number', 'x');
    data.addColumn('number', 'y');
    data.addColumn('number', 'z');
    initPoints();
                    
    //Busca o vetor posição no bean gerenciavel e o adiciona no objeto data.
    var vetorPosicoes = [];
    PSOViewAjax.graphPoints({
        callback:function(ret){
            vetorPosicoes = ret;
        },
        async:false
    });
    for(var x = 0; x<vetorPosicoes.length; x++){
        data.addRow([vetorPosicoes[x][0],vetorPosicoes[x][1],vetorPosicoes[x][2]]);
    }
                    
    // Opções da superfície
    options = {
        width:  "500px", 
        height: "450px",
        style: "surface",
        showPerspective: perspective.input.prop('checked'),
        showGrid: showGrid.input.prop('checked'),
        showShadow: shadow.input.prop('checked'),
        keepAspectRatio: keepAspectRatio.input.prop('checked'),
        verticalRatio: 1,
        showAxes: showAxes.input.prop('checked')
    };

    // Instancia o gráfico na tela.
    graph = new links.Graph3d(document.getElementById('desenho'));
                
    // Desenha o gráfico.
    graph.draw(data, options, points);
}

//Função responsável por desenhar o enxame de partículas no gráfico.
function drawParticles(particles){
    initPoints();
    for(var i = 0; i<particles.length; i++){
        points.addRow([particles[i][0],particles[i][1],particles[i][2]]);
    }
    graph.redraw(data, points);
}

function refreshGraph(){
    var position = graph.getCameraPosition();
//    var dat = data;
//    var poin = points;
    drawVisualization();
//    graph.redraw(dat, poin);
    graph.setCameraPosition(position);
}
                
function drawUserDefined(xhr, status, args) {  
    if(args.validationFailed || args.draw) {  
        drawVisualization();
    }
}
                
function changeValue(e){
    var input = document.getElementById(e).value;
    if((input.length==0)||((input.length==1)&&(input[0]=='-'))){
        return;
    }else{
        if(e == 'yup'){
            PSOViewAjax.changeyUp(input);
        }else if(e=='ylow'){
            PSOViewAjax.changeYlow(input);
        }else
            PSOViewAjax.changeDelay(input);
    }
    refreshGraph();
}
                
function changeState(state){
    var inputs = document.getElementsByTagName("input");
    for(var i=0; i<inputs.length; i++){
        inputs[i].disabled = state;
    }
                    
    var selects = document.getElementsByTagName("select");
    for(var i=0; i<selects.length; i++){
        selects[i].disabled = state;
    }
                    
    var buttons = document.getElementsByTagName("button");
    for(var i=0; i<buttons.length; i++){
        buttons[i].disabled = state;
    }
}
                
function justNumber(e, negative, real){
    var tecla=(window.event)?event.keyCode:e.which;   
    if((tecla>47 && tecla<58)){ 
        return true;
    }
    else if (tecla==8 || tecla==0) {
        return true;
    }
    if((negative) && (tecla==45)){
        // validar se já existe
        return true
    }
    if((real) && (tecla==46)){
        return true;
    }
    return false;
}