function clr() {
    document.getElementById("result").value = "";
}

function dis(val) {
    document.getElementById("result").value += val;
}

function solve() {
    let x = document.getElementById("result").value;
    let y = eval(x);
    document.getElementById("result").value = y;
}

function solve2(val) {
    num1 = document.getElementById("num1").value;
    num2 = document.getElementById("num2").value;


    if (num1 == "" || num2 == "") {
        window.alert("Empty Field Not Allowed");

    }
    else {
        if (!isNaN(num1) && !isNaN(num2)) {

            if (val == '+') {
                y = eval(num1) + eval(num2);
            }
            if (val == '-') {
                y = num1 - num2;
            }
            if (val == '/') {
                y = num1 / num2;
            }
            if (val == '*') {
                y = num1 * num2;
            }
            if (val == '%') {
                y = num1 % num2;
            }

        }
        else {
            window.alert("Enter Numeric Values Only!!")
        }

        document.getElementById("result").value = y;
    }
}