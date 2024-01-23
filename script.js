function calculateBMI() {
    var age = document.getElementById('age').value;
    var weight = document.getElementById('weight').value;
    var height = document.getElementById('height').value;

    if (age === '' || weight === '' || height === '') {
        alert('Please enter age, weight, and height.');
        return;
    }

    var bmi = (weight / ((height / 100) * (height / 100))).toFixed(2);

    var resultContainer = document.getElementById('result');
    resultContainer.innerHTML = 'Your BMI is: ' + bmi;

    if (age < 18) {
        resultContainer.innerHTML += '<br>Age group: Under 18';
        handleBMIForAgeGroup(bmi, 'under18', resultContainer);
    } else if (age >= 18 && age < 35) {
        resultContainer.innerHTML += '<br>Age group: 18-35';
        handleBMIForAgeGroup(bmi, '18to35', resultContainer);
    } else {
        resultContainer.innerHTML += '<br>Age group: 35+';
        handleBMIForAgeGroup(bmi, '35plus', resultContainer);
    }
}
function handleBMIForAgeGroup(bmi, ageGroup, resultContainer) {
    var messages = '';

    switch (ageGroup) {
        case 'under18':
            if (bmi < 18.5) {
                messages += '<br>Underweight for age group under 18';
                messages += '<br>Recommendation: Consult a healthcare professional for guidance on healthy weight gain.';
            } else if (bmi >= 18.5 && bmi < 25) {
                messages += '<br>Normal weight for age group under 18';
                messages += '<br>Recommendation: Maintain a balanced diet and regular physical activity for overall health.';
            } else {
                messages += '<br>Overweight for age group under 18';
                messages += '<br>Recommendation: Focus on adopting a healthy lifestyle with a balanced diet and regular exercise.';
            }
            break;

        case '18to35':
            if (bmi < 18.5) {
                messages += '<br>Underweight for age group 18-35';
                messages += '<br>Recommendation: Consult a healthcare professional for guidance on healthy weight gain.';
            } else if (bmi >= 18.5 && bmi < 25) {
                messages += '<br>Normal weight for age group 18-35';
                messages += '<br>Recommendation: Maintain a balanced diet and regular physical activity for overall health.';
            } else if (bmi >= 25 && bmi < 30) {
                messages += '<br>Overweight for age group 18-35';
                messages += '<br>Recommendation: Focus on adopting a healthy lifestyle with a balanced diet and regular exercise.';
            } else {
                messages += '<br>Obese for age group 18-35';
                messages += '<br>Recommendation: Consult a healthcare professional for personalized weight management advice.';
            }
            break;

        case '35plus':
            if (bmi < 23) {
                messages += '<br>Normal weight for age group 35+';
                messages += '<br>Recommendation: Maintain a balanced diet, engage in regular physical activity, and monitor health regularly.';
            } else if (bmi >= 23 && bmi < 30) {
                messages += '<br>Overweight for age group 35+';
                messages += '<br>Recommendation: Adopt a healthy lifestyle with emphasis on nutrition, exercise, and regular health check-ups.';
            } else {
                messages += '<br>Obese for age group 35+';
                messages += '<br>Recommendation: Consult a healthcare professional for personalized weight management advice and health monitoring.';
            }
            break;

        default:
            break;
    }

    resultContainer.innerHTML += messages;
}