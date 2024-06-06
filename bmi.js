document.getElementById('bmiForm').addEventListener('submit', function(e) {
    e.preventDefault();
    var weight = parseFloat(document.getElementById('weight').value);
    var height = parseFloat(document.getElementById('height').value);
    var bmi = calculateBMI(weight, height);
    document.getElementById('result').innerHTML = 'Your BMI is: ' + bmi.toFixed(2);
});

function calculateBMI(weight, height) {
    return weight / ((height/100) * (height/100));
}