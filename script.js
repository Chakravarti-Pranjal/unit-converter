var input = document.getElementById('input');
var result = document.getElementById('result');
var inputType = document.getElementById('inputType');
var resultType = document.getElementById('resultType');

var option_from, option_to;

// now add Event listener
input.addEventListener("keyup", myResult);
inputType.addEventListener("change", myResult);
resultType.addEventListener("change", myResult);

// taking initial value
option_from = inputType.value;
option_to = resultType.value;

function myResult() {
    option_from = inputType.value;
    option_to = resultType.value;

    if (option_from === "meter" && option_to === "kilometer") {
        result.value = Number(input.value) * 0.001;
    }
    else if (option_from === "meter" && option_to === "Centimeter") {
        result.value = Number(input.value) * 100;
    }
    else if (option_from === "meter" && option_to === "meter") {
        result.value = input.value
    }
    else if (option_from === "meter" && option_to === "milimeter"){
        result.value = Number(input.value) * 1000; 
    }
    else if (option_from === "meter" && option_to === "nanometer"){
        result.value = Number(input.value) * 1e+9; 
    }
    else if (option_from === "meter" && option_to === "inch"){
        result.value = Number(input.value) * 39.37; 
    }
    else if (option_from === "meter" && option_to === "foot"){
        result.value = Number(input.value) * 3.281; 
    }


 //this is  kilometer to formula
    if (option_from === "kilometer" && option_to === "meter") {
        result.value = Number(input.value) * 1000;
    }
    else if (option_from === "kilometer" && option_to === "Centimeter") {
        result.value = Number(input.value) * 100000;
    }
    else if (option_from === "kilometer" && option_to === "kilometer") {
        result.value = input.value
    }
    else if (option_from === "kilometer" && option_to === "milimeter") {
        result.value = Number(input.value) * 1e+6;
    }
    else if (option_from === "kilometer" && option_to === "nanometer") {
        result.value = Number(input.value) * 1e+12;
    }
    else if (option_from === "kilometer" && option_to === "inch") {
        result.value = Number(input.value) * 39370;
    }
    else if (option_from === "kilometer" && option_to === "foot") {
        result.value = Number(input.value) * 3281;
    }

    //this is Centimeter to kilometer formula
    if (option_from === "Centimeter" && option_to === "kilometer") {
        result.value = Number(input.value) * 0.00001;
    }
    else if (option_from === "Centimeter" && option_to === "meter") {
        result.value = Number(input.value) * 0.01;
    }
    else if (option_from === "Centimeter" && option_to === "Centimeter") {
        result.value = input.value
    }
    else if (option_from === "Centimeter" && option_to === "milimeter") {
        result.value = Number(input.value) * 10;
    }
    else if (option_from === "Centimeter" && option_to === "nanometer") {
        result.value = Number(input.value) * 1e+7;
    }
    else if (option_from === "Centimeter" && option_to === "inch") {
        result.value = Number(input.value) / 2.54;
    }
    else if (option_from === "Centimeter" && option_to === "foot") {
        result.value = Number(input.value) / 30.48;
    }

    //this is Milimeter to -- formula
    if (option_from === "milimeter" && option_to === "kilometer") {
        result.value = Number(input.value) / 1e+6;
    }
    else if (option_from === "milimeter" && option_to === "meter") {
        result.value = Number(input.value) / 1000;
    }
    else if (option_from === "milimeter" && option_to === "milimeter") {
        result.value = input.value
    }
    else if (option_from === "milimeter" && option_to === "Centimeter") {
        result.value = Number(input.value) / 10;
    }
    else if (option_from === "milimeter" && option_to === "nanometer") {
        result.value = Number(input.value) * 1e+6;
    }
    else if (option_from === "milimeter" && option_to === "inch") {
        result.value = Number(input.value) / 25.4;
    }
    else if (option_from === "milimeter" && option_to === "foot") {
        result.value = Number(input.value) / 304.8;
    }

    //this is Nanometer to -- formula
    if (option_from === "nanometer" && option_to === "kilometer") {
        result.value = Number(input.value) / 1e+12;
    }
    else if (option_from === "nanometer" && option_to === "meter") {
        result.value = Number(input.value) / 1e+9;
    }
    else if (option_from === "nanometer" && option_to === "nanometer") {
        result.value = input.value
    }
    else if (option_from === "nanometer" && option_to === "Centimeter") {
        result.value = Number(input.value) / 1e+7;
    }
    else if (option_from === "nanometer" && option_to === "milimeter") {
        result.value = Number(input.value) / 1e+6;
    }
    else if (option_from === "nanometer" && option_to === "inch") {
        result.value = Number(input.value) / 25.4e+7;
    }
    else if (option_from === "nanometer" && option_to === "foot") {
        result.value = Number(input.value) / 3.048e+8;
    }

    //this is Inch to -- formula
    if (option_from === "inch" && option_to === "kilometer") {
        result.value = Number(input.value) / 39370;
    }
    else if (option_from === "inch" && option_to === "meter") {
        result.value = Number(input.value) / 39.37;
    }
    else if (option_from === "inch" && option_to === "inch") {
        result.value = input.value
    }
    else if (option_from === "inch" && option_to === "Centimeter") {
        result.value = Number(input.value) * 2.54;
    }
    else if (option_from === "inch" && option_to === "milimeter") {
        result.value = Number(input.value) * 25.4;
    }
    else if (option_from === "inch" && option_to === "nanometer") {
        result.value = Number(input.value) * 25.4e+7;
    }
    else if (option_from === "inch" && option_to === "foot") {
        result.value = Number(input.value) / 12;
    }

     //this is foot to -- formula
     if (option_from === "foot" && option_to === "kilometer") {
        result.value = Number(input.value) / 3281;
    }
    else if (option_from === "foot" && option_to === "meter") {
        result.value = Number(input.value) / 3.281;
    }
    else if (option_from === "foot" && option_to === "foot") {
        result.value = input.value
    }
    else if (option_from === "foot" && option_to === "Centimeter") {
        result.value = Number(input.value) * 30.48;
    }
    else if (option_from === "foot" && option_to === "milimeter") {
        result.value = Number(input.value) * 304.8;
    }
    else if (option_from === "foot" && option_to === "nanometer") {
        result.value = Number(input.value) * 3.048e+8;
    }
    else if (option_from === "foot" && option_to === "inch") {
        result.value = Number(input.value) * 12;
    }
}