var size = 0;
var placement = 'point';

var style__2 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; 
    var value = feature.get("");
    var labelFont = "19.5px \'Open Sans\', sans-serif";
    var labelFill = "#1231a2";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = 'center';
    var offsetX = 0;
    var offsetY = 0;
    var overflow = false;
    var repeat = 0;
    var placement = 'point';
    if (feature.get("Ідентифіка") !== null && resolution > 0 && resolution < 14) {
        labelText = String(feature.get("Ідентифіка"));
    }
    var style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(28,42,138,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 3.04}),fill: new ol.style.Fill({color: 'rgba(10,215,222,0.08627450980392157)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })];

    return style;
};
