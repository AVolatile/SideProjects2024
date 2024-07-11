function calculateBMI() {
    const heightFeet = parseFloat(document.getElementById('heightFeet').value);
    const heightInches = parseFloat(document.getElementById('heightInches').value);
    const weightPounds = parseFloat(document.getElementById('weightPounds').value);

    // Convert height to inches and then to meters
    const heightInchesTotal = (heightFeet * 12) + heightInches;
    const heightMeters = heightInchesTotal * 0.0254;

    // Convert weight to kilograms
    const weightKg = weightPounds * 0.453592;

    // Calculate BMI
    const bmi = weightKg / (heightMeters * heightMeters);

    // Determine body type
    let bodyType = '';
    if (bmi < 18.5) {
        bodyType = 'Ectomorph';
    } else if (bmi >= 18.5 && bmi < 24.9) {
        bodyType = 'Mesomorph';
    } else {
        bodyType = 'Endomorph';
    }

    // Display results
    document.getElementById('bmiResult').innerText = `Your BMI is ${bmi.toFixed(2)}`;
    document.getElementById('bodyTypeResult').innerText = `Your body type is ${bodyType}`;
}
