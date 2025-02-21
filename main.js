<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Aibelle - Beauty & Wellness</title>
    <link rel="stylesheet" href="styles.css">
    <script defer src="script.js"></script>
</head>
<body>
    <header>
        <img src="logo.png" alt="Aibelle Logo" class="logo">
        <button id="loginBtn">Get Started</button>
    </header>
    
    <main id="dashboard" class="hidden">
        <h2>Welcome Back!</h2>
        <div id="dailyPlan">
            <h3>Today's Plan</h3>
            <p id="affirmation">"You are enough!"</p>
            <h4>Morning Skincare Routine</h4>
            <ul id="morningRoutine"></ul>
            <h4>Activity Goal: <span id="activityLevel"></span></h4>
            <h4>Personal Enrichment Goal</h4>
            <p id="personalGoal"></p>
            <h4>Nighttime Skincare Routine</h4>
            <ul id="nightRoutine"></ul>
            <h4>Nighttime Meditation</h4>
            <p id="meditation"></p>
        </div>
        <div id="progressTracker">
            <progress id="progressBar" value="0" max="100"></progress>
            <p id="streak">Streak: 0 days</p>
        </div>
    </main>
    
    <nav>
        <button onclick="showPage('dashboard')">Home</button>
        <button onclick="showPage('products')">Products</button>
        <button onclick="showPage('community')">Community</button>
    </nav>
</body>
</html>
