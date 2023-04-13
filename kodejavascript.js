document.getElementById('submit').addEventListener('click', perhitunganbmi);

function perhitunganbmi() {
    let berat = document.getElementById('kg').value;
    let tinggi = (document.getElementById('cm').value) / 100;
    let bmi = Math.round((berat / (Math.pow(tinggi, 2))) * 100) / 100;
    document.getElementById('hasil').innerHTML = cekbmi(bmi)
}

function cekbmi(nilaibmi) {
    if (nilaibmi < 18.5) {
        return '<span>Your BMI value is <b>' + nilaibmi + '</b> which means You are <b>Underweight</b></span>'
    } else if (nilaibmi >= 18.5 && nilaibmi <= 24.9) {
        return '<span>Your BMI value is <b>' + nilaibmi + '</b> which means You are <b>Normal</b></span>'
    } else if (nilaibmi >= 25 && nilaibmi <= 29.9) {
        return '<span>Your BMI value is <b>' + nilaibmi + '</b> which means You are <b>Overweight</b></span>'
    } else {
        return '<span>Your BMI value is <b>' + nilaibmi + '</b> which means You are <b>Obesity</b></span>'
    }
}