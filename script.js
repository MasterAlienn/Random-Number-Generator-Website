var in1;
var in2;
var out;

function takeInput() {
    in1 = parseInt(document.getElementById("in1").value);
    in2 = parseInt(document.getElementById("in2").value);
}
function genNum() {
    out = Math.floor(Math.random() * (in2 - in1 + 1)) + in1;
}
function sendOutput() {
    document.getElementById("out").innerHTML = out;
}