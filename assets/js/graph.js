// FUNCION DE GRAFICAS PARA ENCUESTA - CENTROS POBLADOS

$.ajax({
    url: "http://surveyjs.io/api/MySurveys/getSurveyResults/d5a1bbb7-0045-4766-82b6-9c01805301f5?accessKey=ec29779b0f5f4c85b7f47ac089a3dfc4",
    dataType: "json",
    success: function (url) {
        //console.log(url);

        // Datos de la encuesta No.0
        var datosEncuesta = url.Data;
        console.log(datosEncuesta);

        //Obtener Centros Poblados
        $.each(datosEncuesta, function(idx, obj){
            var centroPoblado = [];
            centroPoblado = obj.nombre_centro_poblado;
            console.log(centroPoblado);
        });

        //Tenencia US Arrendataria
        $.each(datosEncuesta, function (idx, obj) {
            var tenenciaArrendat = [];
            tenenciaArrendat = obj.tenencia_us_arrendataria;
            console.log(tenenciaArrendat);
        });

        //Tenencia US Arrendataria
        $.each(datosEncuesta, function (idx, obj) {
            var tenenciaUSP = [];
            tenenciaUSP = obj.tenencia_us_usp;
            console.log(tenenciaUSP);
        });
    }
});