// Nutrition tips categorized by physical fitness goals
const nutritionTipsByGoal = {
    'muscle-building': [
      "Ensure adequate protein intake to support muscle growth.",
      "Eat more calories than you burn to gain muscle mass.",
      "Incorporate lean meats, eggs, and dairy products into your diet.",
      "Don’t forget post-workout meals with a balance of carbs and protein.",
    ],
    'weight-loss': [
      "Focus on a calorie deficit while maintaining balanced nutrition.",
      "Increase fiber intake to stay full longer and control hunger.",
      "Limit processed foods and sugary drinks for better fat loss results.",
      "Opt for smaller, frequent meals to keep your metabolism active.",
    ],
    'endurance': [
      "Carbohydrates are key! Focus on complex carbs to fuel your workouts.",
      "Stay hydrated to maintain performance during long endurance sessions.",
      "Include potassium-rich foods like bananas to avoid cramps.",
      "Try timing your meals to support sustained energy levels.",
    ],
    'recovery': [
      "Consume anti-inflammatory foods like berries, leafy greens, and fish.",
      "Include omega-3 rich foods like salmon and flaxseeds to aid recovery.",
      "Stay hydrated and prioritize water intake for faster recovery.",
      "Focus on adequate protein for muscle repair and recovery.",
    ]
  };
  
  // Inspirational quotes based on fitness goals
  const quotesByGoal = {
    'muscle-building': "Building muscle is a marathon, not a sprint. Stay consistent!",
    'weight-loss': "Slow progress is still progress. Keep pushing!",
    'endurance': "Endurance is earned, one mile at a time.",
    'recovery': "Recovery is where the magic happens. Rest and recharge."
  };
  
  // Function to get a random tip based on the selected goal
  function getRandomTip(goal) {
    const tips = nutritionTipsByGoal[goal];
    const randomIndex = Math.floor(Math.random() * tips.length);
    return tips[randomIndex];
  }
  
  // Function to update progress bar
  function updateProgressBar() {
    const progressBar = document.getElementById('progress-bar');
    progressBar.style.width = "100%";
  }
  
  // Event listener for the button
  document.getElementById('get-tip-btn').addEventListener('click', function() {
    const selectedGoal = document.getElementById('fitness-goal').value;
    const tipDisplay = document.getElementById('tip-display');
    const newTip = getRandomTip(selectedGoal);
    tipDisplay.textContent = newTip;
    
    // Update the inspirational quote
    const quoteDisplay = document.getElementById('quote-display');
    quoteDisplay.textContent = quotesByGoal[selectedGoal];
  
    // Update progress bar
    updateProgressBar();
  });


  function calculate(){
    var bmi;
    var result = document.getElementById("result");
    // The value of the height slider (in centimeters)
    var height = parseInt(document.getElementById("height").value);
    
    // The value of the weight slider
    var weight = parseInt(document.getElementById("weight").value);
    
    // The value of height and weight should be displayed on the webpage using "textContent".
    document.getElementById("weight-val").textContent = weight + " kg";
    document.getElementById("height-val").textContent = height + " cm";
    
    // Calculate BMI using height in centimeters (no conversion needed)
    bmi = (weight / Math.pow((height / 100), 2)).toFixed(1);
    
    // Display the BMI result
    result.textContent = bmi;
  
    var category;
    
    // Determine the BMI category and set the appropriate color and text
    if (bmi < 18.5) {
        category = "Underweight 😒";
        result.style.color = "#ffc44d";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        category = "Normal Weight 😍";
        result.style.color = "#0be881";
    } else if (bmi >= 25 && bmi <= 29.9) {
        category = "Overweight 😮";
        result.style.color = "#ff884d";
    } else {
        category = "Obese 😱";
        result.style.color = "#ff5e57";
    }
    
    // Display the BMI category
    document.getElementById("category").textContent = category;
}

  