function test() {
    alert("testing");
}

// function insert(num) {
//     var x = document.getElementById("table").rows[0].cells;
//     x[0].input.value = num;
// }

function put(num) {
    document.getElementById("screen").value = num;
}

var isDot = false;
var isEnd = false;
var isStart = false;
var isBrS = false;
var isBrF = false;
var isBasicSign = false;

// function getNumber(ctl) {
//     document.getElementById("screen").value = document.getElementById("screen").value + ctl.value;

// }

function ops(ctl) {
    switch(ctl.value) {
        case "1":
        case "2":
        case "3":
        case "4":
        case "5":
        case "6":
        case "7":
        case "8":
        case "9":
        case "0":
            document.getElementById("screen").value = document.getElementById("screen").value + ctl.value;
            isBasicSign = false;
            break;
        case "D":
            var arr = document.getElementById("screen").value;
            if(arr.length > 0) {
                arr = arr.substring(0, arr.length - 1);
                document.getElementById("screen").value = arr;
            }
            isBasicSign = false;
            break;
        case ".":
            if(isDot==false) {
                isDot = true;
                document.getElementById("screen").value = document.getElementById("screen").value + ctl.value;
            }
            isBasicSign = false;
            break;
        case "C":
            document.getElementById("screen").value = null;
            isDot = false;
            isBasicSign = false;
            break;
        case "+":
            isBasicSign = true;
            var arr = document.getElementById("screen").value;
            if(arr.substring(arr.length - 1, arr.length) == "+") {
                document.getElementById("screen").value = document.getElementById("screen").value;
            }
            else {
                document.getElementById("screen").value = document.getElementById("screen").value + ctl.value;
            }
            isDot = false;
            break;
        case "-":
            isBasicSign = true;
            var arr = document.getElementById("screen").value;
            if(arr.substring(arr.length - 1, arr.length) == "-") {
                document.getElementById("screen").value = document.getElementById("screen").value;
            }
            else {
                document.getElementById("screen").value = document.getElementById("screen").value + ctl.value;
            }
            isDot = false;
            break;
        case "*":
            isBasicSign = true;
            var arr = document.getElementById("screen").value;
            if(arr.substring(arr.length - 1, arr.length) == "*") {
                document.getElementById("screen").value = document.getElementById("screen").value;
            }
            else {
                document.getElementById("screen").value = document.getElementById("screen").value + ctl.value;
            }
            isDot = false;
            break;
        case "/":
            isBasicSign = true;
            var arr = document.getElementById("screen").value;
            if(arr.substring(arr.length - 1, arr.length) == "/") {
                document.getElementById("screen").value = document.getElementById("screen").value;
            }
            else {
                document.getElementById("screen").value = document.getElementById("screen").value + ctl.value;
            }
            isDot = false;
            break;
        case "(":
            isDot = false;
            isBrS = true;
            // if((isEnd==false) && (isStart==false)) {
            //     isEnd = true;
            //     document.getElementById("screen").value = 
            //     isStart = true;
            // }
            if(isEnd == true && isBasicSign == false) {
                document.getElementById("screen").value = document.getElementById("screen").value + "*" + ctl.value;
                isEnd = false;
            }
            else {
                document.getElementById("screen").value = document.getElementById("screen").value + ctl.value;
            }
            isBrF = false;
            isBasicSign = false;
            break;
        case ")":
            isEnd = true;
            isBrF = true;
            document.getElementById("screen").value = document.getElementById("screen").value + ctl.value;
            isDot = false;
            isBrS = false;
            isBasicSign = false;
            break;
        case "=":
            try {
                if(isBrS == true && isBrF == false) {
                    document.getElementById("screen").value = document.getElementById("screen").value + ")";
                    }
                put(eval(document.getElementById("screen").value));
                }
            catch(equal) {
                put('Error!');
                }
            isBasicSign = false;
            break;
    }
}
/*
function clearScreen() {
    document.getElementById("screen").value = null;
}

function equal() {
    try {
        put(eval(document.getElementById("screen").value));
    }
    catch(equal) {
        put('Error!');
    }
}

function del() {
    // test();
    var arr = document.getElementById("screen").value;
    if(arr.length > 0) {
        arr = arr.substring(0, arr.length-1);
        document.getElementById("screen").value = arr;
    }
}
*/