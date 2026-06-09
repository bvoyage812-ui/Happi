const question = document.getElementById('question');
const gif = document.getElementById('mainGif');
const btnContainer = document.getElementById('btnContainer');

document.getElementById('yesBtn').addEventListener('click', function() {
    question.innerText = "That is great to hear! I am glad to hear that, Churrito. <3";
    gif.src = "images/catt.gif";
    document.body.style.backgroundColor = "#ffafcc";

    const yesBtn = document.getElementById('yesBtn');
    yesBtn.innerText = "Thank you!";
    yesBtn.id = "tyBtn"; 
  
    document.getElementById('noBtn').style.display = 'none';

    document.getElementById('tyBtn').addEventListener('click', function() {
        question.innerText = "You are always welcome churritoo, I will always be here for you! <3";
        gif.src = "images/cutebunny.gif";
        document.body.style.backgroundColor = "#ffb5d0";
   
        const tyBtn = document.getElementById('tyBtn');
        tyBtn.innerText = "Return";
        tyBtn.onclick = function() { location.reload(); };
    });
});

document.getElementById('noBtn').addEventListener('click', function() {
    window.location.href = 'comfort.html';
});
