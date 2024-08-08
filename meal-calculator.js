function calculateTotalCalories() {
    const numMeals = document.getElementById('num-meals').value;
    const caloriesPerMeal = document.getElementById('calories-per-meal').value;
    const totalCalories = numMeals * caloriesPerMeal;
    
    let message = '';
    if (totalCalories < 2000) {
        message = 'Your total daily calorie intake is below the recommended level.';
    } else if (totalCalories === 2000) {
        message = 'Your total daily calorie intake is at the recommended level.';
    } else {
        message = 'Your total daily calorie intake is above the recommended level.';
    }
    
    document.getElementById('calorie-result').innerText = `Total Calories: ${totalCalories}\n${message}`;
}
