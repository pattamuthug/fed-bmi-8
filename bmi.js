var winput = document.querySelector(".weight");
var hinput = document.querySelector(".height");
var btn = document.querySelector(".button1");
var rlt = document.querySelector(".result");
var rltct = document.querySelector(".resultcontent");

btn.addEventListener("click", bmi);

function bmi() {
    let weight = winput.value;
    let height = hinput.value;
    let num1 = parseInt(weight);
    let num2 = parseInt(height);

    let num3 = (num2) / (100);

    let bmi1 = (num1) / ((num3) ** 2);
    bmi1 = bmi1.toFixed(1);

    rlt.innerHTML = "your BMI reult is = " + bmi1;

    if (bmi1 <= 18.5) {
        rltct.innerHTML = "Your BMI falls within the underweight range";
    }
    else if (bmi1 >= 18.5 && bmi1 <= 25) {
        rltct.innerHTML = "Your BMI falls within the healthy range";
    }
    else if (bmi1>=25 && bmi1 <= 30) {
        rltct.innerHTML = "Your BMI falls within the overweight range";
    }
    else {
        rltct.innerHTML = "Your BMI falls within the obese range";
    }
}