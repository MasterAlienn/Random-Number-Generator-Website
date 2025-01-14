var in1;
var in2;
var out;

function takeInput() {
    in1 = document.getElementById("in1").innerHTML;
    in2 = document.getElementById("in2").innerHTML;
}
function genNum() {
    out = Math.floor(Math.random() * (in2 - in1 + 1)) + in1;
}
function sendOutput() {
    /* if (out == NaN) {
        if (typeof(in1) != Number) {
            out = "Field 1 is not a number";
        }
        else if (typeof(in2) != Number) {
            out = "Field 2 is not a number";
        }
    } */
    document.getElementById("out").innerHTML = out;
}