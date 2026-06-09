const question = document.getElementById('question');
const gif = document.getElementById('mainGif');
const btnContainer = document.getElementById('btnContainer');

document.getElementById('yesBtn').addEventListener('click', function() {
    question.innerText = "That is great to hear! I am glad to hear that, Churrito. <3";
    gif.src = "catt.gif";
    document.body.style.backgroundColor = "#ffafcc";
    
    btnContainer.innerHTML = '<button id="tyBtn">Thank you!</button>';
    
    document.getElementById('tyBtn').addEventListener('click', function() {
        question.innerText = "You are always welcome churritoo, I will always be here for you! <3";
        gif.src = "cutebunny.gif";
        document.body.style.backgroundColor = "#ffb5d0";
        
        btnContainer.innerHTML = '<button onclick="location.reload()">Return</button>';
    });
});

document.getElementById('noBtn').addEventListener('click', function() {
    window.location.href = 'comfort.html';
});
