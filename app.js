const minAge = {
    car: 18,
    bike: 18,
    truck: 21,
    scooter: 16
};

document.getElementById('submitBtn').addEventListener('click', function () {
    const ageInput = document.getElementById('age');
    const vehicle  = document.getElementById('vehicle').value;
    const result   = document.getElementById('result');
    const age      = parseInt(ageInput.value, 10);

    // Reset classes
    result.className = '';
    result.textContent = '';

    // Validate age
    if (!ageInput.value || isNaN(age) || age < 0 || age > 120) {
        result.className = 'show warn';
        result.textContent = '⚠️ Please enter a valid age (0–120).';
        return;
    }

    // Validate vehicle selection
    if (!vehicle) {
        result.className = 'show warn';
        result.textContent = '⚠️ Please select a vehicle type.';
        return;
    }

    const required = minAge[vehicle];

    if (age >= required) {
        result.className = 'show yes';
        result.textContent = `✅ Yes! You can drive a ${vehicle}. (Min age: ${required})`;
    } else {
        result.className = 'show no';
        result.textContent = `❌ No. You need to be at least ${required} to drive a ${vehicle}.`;
    }
});
