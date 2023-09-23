let var1 = 0
function timeOrt() {
    if (var1 > 1) {
        document.getElementById("timeS").innerHTML = "times";
    }
    else {
        document.getElementById("timeS").innerHTML = "time";
    }
}

function getActualTime() {
    const date = new Date();
    const heures = date.getHours();
    const minutes = date.getMinutes();
    const secondes = date.getSeconds();
    //
    var heuresString = heures.toString();
    if (heuresString.length === 1) {
        var heuresDef = "0" + heuresString;
    } else {
        var heuresDef = heuresString;
    }
    //
    var minString = minutes.toString()
    if (minString === 1) {
        var minDef = "0" + minString
    } else {
        var minDef = minString
    }
    //
    var secString = secondes.toString();
    if (secString.length === 1) {
        secDef = "0" + secString;
    } else {
        secDef = secString;
    }
    time = heuresDef + ":" + minDef + ":" + secDef;
    document.getElementById("time").innerHTML = time;
};
setInterval(getActualTime, 1000);
document.getElementById("button1").onclick = function(){
    var1 += 1;
    document.getElementById("counter").innerHTML = var1;
    timeOrt();
    title();
};
document.getElementById("resetbutton").onclick = function() {
    var1 = 0;
    document.getElementById("counter").innerHTML = var1;
    timeOrt();
    title();
};