let n1 = 0;
let op = "+";
let res = 0
let last_res;

function calc() {
    let num = document.getElementById("visor");
    last_res = res;

    switch (op) {
        case "+":
            res = res + n1;
            break;
        case "-":
            res = res - n1;
            break;
        case "*":
            res = res * n1;
            break;
        case "/":
            res = res / n1;
    }
    num.innerText = last_res + " " + op + " " + n1 + " = " + res;
}

function set_number(num) {
    n1 = num;
    calc();
}

function set_op(_op) {
    if (_op == "C") {
        n1 = 0;
        res = 0;
        op = "+";
    } else {
        op = _op;
        if (op == "*" || op == "/") {
            n1 = 1;
        } else {
            n1 = 0;
        }
    }
    calc();
}