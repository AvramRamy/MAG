const meals = {
    'diabetes': [
        ['Ful medames with whole wheat bread', 'Grilled chicken with a side salad', 'Steamed fish with vegetables'],
        ['Greek yogurt with oats and honey', 'Lentil soup with a side salad', 'Grilled beef with steamed vegetables'],
        ['Scrambled eggs with vegetables', 'Chicken shawarma wrap with whole wheat pita', 'Baked fish with quinoa'],
        ['Cheese with whole wheat toast', 'Stuffed grape leaves with salad', 'Grilled shrimp with brown rice'],
        ['Fresh fruit salad', 'Falafel with whole wheat pita and tahini', 'Chicken kebab with bulgur'],
        ['Boiled eggs with tomatoes and cucumbers', 'Baked kofta with rice', 'Grilled vegetables with hummus'],
        ['Smoothie with spinach and banana', 'Vegetable soup with whole wheat bread', 'Grilled lamb with mixed vegetables']
    ],
    'celiac': [
        ['Scrambled eggs with vegetables', 'Quinoa salad with mixed greens', 'Grilled chicken with roasted sweet potatoes'],
        ['Smoothie with almond milk and fruits', 'Rice and beans with salad', 'Beef stew with potatoes'],
        ['Fresh fruit salad', 'Stuffed peppers with quinoa and vegetables', 'Baked fish with vegetables'],
        ['Yogurt with gluten-free granola', 'Chicken stir-fry with vegetables', 'Grilled shrimp with rice'],
        ['Omelet with vegetables', 'Gluten-free pasta with tomato sauce', 'Grilled lamb chops with salad'],
        ['Smoothie with coconut milk', 'Chickpea salad with olive oil dressing', 'Stuffed zucchini with rice'],
        ['Scrambled eggs with cheese', 'Lentil soup with a side salad', 'Grilled tofu with vegetables']
    ],
    'hypertension': [
        ['Oatmeal with fruits', 'Chicken salad with olive oil dressing', 'Baked fish with vegetables'],
        ['Smoothie with spinach and flaxseed', 'Turkey sandwich with whole grain bread', 'Grilled fish with brown rice'],
        ['Fresh fruit salad', 'Lentil soup with a side salad', 'Baked chicken with vegetables'],
        ['Yogurt with berries', 'Vegetable stir-fry with tofu', 'Grilled shrimp with quinoa'],
        ['Scrambled eggs with tomatoes', 'Chickpea salad with olive oil dressing', 'Grilled beef with vegetables'],
        ['Smoothie with banana and spinach', 'Turkey wrap with whole wheat pita', 'Baked salmon with vegetables'],
        ['Fresh fruit salad', 'Tuna salad with olive oil dressing', 'Grilled chicken with rice']
    ],
    'cholesterol': [
        ['Greek yogurt with almonds and berries', 'Lentil soup with a side salad', 'Grilled tofu with quinoa and vegetables'],
        ['Oatmeal with flaxseed', 'Chicken salad with avocado', 'Grilled fish with mixed vegetables'],
        ['Scrambled eggs with spinach', 'Tuna salad with olive oil dressing', 'Baked chicken with brown rice'],
        ['Fresh fruit salad', 'Chickpea salad with olive oil dressing', 'Grilled shrimp with quinoa'],
        ['Yogurt with nuts and berries', 'Vegetable soup with whole grain bread', 'Grilled tofu with vegetables'],
        ['Smoothie with banana and spinach', 'Turkey wrap with whole wheat pita', 'Baked salmon with vegetables'],
        ['Oatmeal with nuts and berries', 'Chicken salad with olive oil dressing', 'Grilled beef with vegetables']
    ],
    'lactose-intolerance': [
        ['Almond milk smoothie with banana and spinach', 'Chickpea salad with olive oil dressing', 'Stir-fried vegetables with tofu'],
        ['Oatmeal with almond milk and fruits', 'Chicken salad with vinaigrette', 'Grilled fish with vegetables'],
        ['Fresh fruit salad', 'Lentil soup with a side salad', 'Grilled beef with vegetables'],
        ['Smoothie with coconut milk and berries', 'Quinoa salad with vegetables', 'Baked chicken with sweet potatoes'],
        ['Scrambled eggs with vegetables', 'Tuna salad with olive oil dressing', 'Grilled shrimp with rice'],
        ['Oatmeal with almond milk', 'Turkey sandwich with whole grain bread', 'Baked salmon with vegetables'],
        ['Smoothie with almond milk and spinach', 'Vegetable soup with whole grain bread', 'Grilled lamb with vegetables']
    ],
    'default': [
        ['Whole grain cereal with milk', 'Chicken wrap with vegetables', 'Pasta with marinara sauce and a side salad'],
        ['Oatmeal with fruits', 'Grilled cheese sandwich with salad', 'Baked chicken with vegetables'],
        ['Scrambled eggs with toast', 'Tuna salad sandwich', 'Beef stew with potatoes'],
        ['Smoothie with fruits and yogurt', 'Quinoa salad with vegetables', 'Grilled fish with rice'],
        ['Yogurt with fruits', 'Chicken salad with vinaigrette', 'Baked salmon with vegetables'],
        ['Oatmeal with nuts and berries', 'Chicken wrap with vegetables', 'Grilled chicken with quinoa'],
        ['Smoothie with banana and spinach', 'Vegetable soup with whole grain bread', 'Grilled lamb with vegetables']
    ]
};

function calculateDailyCalories() {
    const weight = document.getElementById('weight').value;
    const height = document.getElementById('height').value;
    const age = document.getElementById('age').value;
    const activityLevel = document.getElementById('activity-level').value;
    const weightGoal = document.getElementById('weight-goal').value;
    const healthCondition = document.getElementById('health-condition').value;
    const waterIntake = document.getElementById('water-intake').value;
    const exerciseTime = document.getElementById('exercise-time').value;

    // BMR calculation for males. For females, use a different formula.
    const bmr = 10 * weight + 6.25 * height - 5 * age + 5;
    let dailyCalories = bmr * activityLevel;

    if (weight<30 || weight>150) {
        alert("روح اتعالج يبنى");
    }else if (height<120 || height>220) {
        alert("Enter valid height b3d eznak");
    }else if (age<15 || age>30) {
        alert("this application for people from 15 to 30 b3d eznak (Avram eltop w alba2y kantalob)");
    }
    // Adjust calorie needs based on weight goal
    switch (weightGoal) {
        case 'maintain':
            // No adjustment needed
            break;
        case 'lose':
            dailyCalories -= 500; // Subtract 500 calories for weight loss
            break;
        case 'gain':
            dailyCalories += 500; // Add 500 calories for weight gain
            break;
    }

    // Calculate water intake and exercise recommendations
    const recommendedWater = 2.5; // Recommended daily water intake in liters (general guideline)
    const recommendedExercise = 30; // Recommended daily exercise time in minutes (general guideline)

    // Generate binary output (Yes/No) for water and exercise goals
    const waterGoalMet = waterIntake >= recommendedWater ? "Yes" : "No";
    const exerciseGoalMet = exerciseTime >= recommendedExercise ? "Yes" : "No";

    // Generate result message
    const calorieMessage = dailyCalories < 2000
        ? 'You may want to increase your daily caloric intake.'
        : dailyCalories === 2000
        ? 'Your caloric intake is balanced.'
        : 'You might need to reduce your caloric intake.';

    let resultHTML = `
        <p>Daily Caloric Needs: ${dailyCalories.toFixed(0)}</p>
        <p>${calorieMessage}</p>
        <p>Recommended Water Intake: ${recommendedWater} liters</p>
        <p>Recommended Exercise Time: ${recommendedExercise} minutes</p>
        <p>Your Water Intake Goal: ${waterIntake} liters (${waterGoalMet})</p>
        <p>Your Exercise Time Goal: ${exerciseTime} minutes (${exerciseGoalMet})</p>
    `;

    // Include condition-specific guidelines
    if (healthCondition) {
        let conditionMessage = '';
        switch (healthCondition) {
            case 'diabetes':
                conditionMessage = 'Monitor blood sugar levels, avoid high-sugar foods, and eat regular, balanced meals.';
                break;
            case 'celiac':
                conditionMessage = 'Avoid gluten-containing foods (wheat, barley, rye).';
                break;
            case 'hypertension':
                conditionMessage = 'Reduce salt intake, avoid high-sodium foods, and maintain a balanced diet.';
                break;
            case 'cholesterol':
                conditionMessage = 'Avoid high-cholesterol foods, increase intake of fiber, and eat heart-healthy foods.';
                break;
            case 'lactose-intolerance':
                conditionMessage = 'Avoid dairy products or choose lactose-free options.';
                break;
            default:
                conditionMessage = '';
                break;
        }
        resultHTML += `
            <p>Condition: ${healthCondition}</p>
            <p>Guidelines: ${conditionMessage}</p>
        `;
        document.getElementById('message-doctor').style.display = 'block';
        document.getElementById('generate-diet-plan').style.display = 'block';
        document.getElementById('message-doctor-two').style.display = 'block';
    } else {
        document.getElementById('message-doctor').style.display = 'block';
        document.getElementById('generate-diet-plan').style.display = 'block';
        document.getElementById('message-doctor-two').style.display = 'block';

    }

    document.getElementById('calorie-result').innerHTML = resultHTML;
}

function generateDietPlan() {
    const healthCondition = document.getElementById('health-condition').value;
    const dietPlan = meals[healthCondition] || meals['default'];

    const weeklyDietPlan = dietPlan.map((dayPlan, index) => `
        <div class="meal-plan">
            <h3>Day ${index + 1}</h3>
            ${dayPlan.map((meal, mealIndex) => `
                <p>${meal}</p>
                <button onclick="changeMeal(${index}, ${mealIndex})">Change Meal</button>
            `).join('')}
        </div>
    `).join('');

    document.getElementById('diet-plan').innerHTML = weeklyDietPlan;
}

function changeMeal(dayIndex, mealIndex) {
    const healthCondition = document.getElementById('health-condition').value;
    const dietPlan = meals[healthCondition] || meals['default'];

    const availableMeals = dietPlan.flat();
    const currentMeal = dietPlan[dayIndex][mealIndex];
    const newMeals = availableMeals.filter(meal => meal !== currentMeal);

    const newMeal = newMeals[Math.floor(Math.random() * newMeals.length)];
    dietPlan[dayIndex][mealIndex] = newMeal;

    generateDietPlan(); // Regenerate diet plan with updated meal
}

function messageDoctor() {
    const healthCondition = document.getElementById('health-condition').value;
    alert(`A message has been sent to your doctor regarding your condition: ${healthCondition}`);
}
