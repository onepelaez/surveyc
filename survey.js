Survey.Survey.cssType = "bootstrap";

var surveyJSON = {locale:"es",title:{default:"CENSO POBLACIONAL\nProyecto Ruta del Sol - Sector II",es:"FICHA SOCIAL DE INMUEBLES Y UNIDADES SOCIALES"},pages:[{name:"Identificacion",elements:[{type:"text",name:"codigo_identificacion",title:{es:"Código N°"},isRequired:true,inputType:"number",placeHolder:{es:"Digite el codigo de identificación"}},{type:"text",name:"total_unidades_sociales",title:{es:"Total de US"},isRequired:true,inputType:"number",placeHolder:{es:"Digite el numero de unidades sociales"}}],title:{es:"Datos de Identificación"}}],showPageNumbers:true,showProgressBar:"bottom",firstPageIsStarted:true}

function sendDataToServer(survey) {
    //send Ajax request to your web server.
    alert("The results are:" + JSON.stringify(survey.data));
}

var survey = new Survey.Model(surveyJSON);
$("#surveyContainer").Survey({
    model: survey,
    onComplete: sendDataToServer
});
