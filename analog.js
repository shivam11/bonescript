var bb = require('./bonescript');

var inputPin = bone.P9_39;
var outputPin = bone.P9_14;

setup = function() {
    pinMode(outputPin, OUTPUT);
};

loop = function() {
    var val = analogRead(inputPin);
    analogWrite(outputPin, val / 4);
};

bb.run();
