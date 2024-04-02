document.addEventListener('DOMContentLoaded', function() {
    const heightInput = document.getElementById("height");
    const weightInput = document.getElementById("weight");
    const calculateBtn = document.getElementById("calculateBtn");
    const resultParagraph = document.getElementById("result");

    calculateBtn.addEventListener("click", calculateBMI);

    function calculateBMI() {
        const height = parseFloat(heightInput.value);
        const weight = parseFloat(weightInput.value);

        if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
            resultParagraph.textContent = 'Invalid input';
            return;
        }

        const bmi = weight / ((height / 100) ** 2);
        resultParagraph.textContent = `Your BMI: ${bmi.toFixed(2)}`;
    }
});
