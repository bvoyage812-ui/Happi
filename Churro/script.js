const question = document.getElementById('question');
const gif = document.getElementById('mainGif');
const btnContainer = document.getElementById('btnContainer');

document.getElementById('yesBtn').addEventListener('click', function() {
    question.innerText = "That is great to hear! I am glad to hear that, Churrito. <3";
    gif.src = "images/catt.gif";
    document.body.style.backgroundColor = "#ffafcc";
    
    btnContainer.innerHTML = '<button id="tyBtn">Thank you!</button>';
    
    document.getElementById('tyBtn').addEventListener('click', function() {
        question.innerText = "You are always welcome churritoo, I will always be here for you! <3";
        gif.src = "images/cutebunny.gif";
        document.body.style.backgroundColor = "#ffb5d0";
        
        btnContainer.innerHTML = '<button onclick="location.reload()">Return</button>';
    });
});


const container = document.getElementById("fireworks-container");
tsParticles.fireworks(container, {
    colors: ["#ffafcc", "#ffb5d0", "#ff4d6d"]
});

document.getElementById('noBtn').addEventListener('click', function() {
    window.location.href = 'comfort.html';
});
