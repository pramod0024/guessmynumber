'use strict';

let secureNumber = Math.trunc(Math.random()*20)+1;
let score =20;
let highscore = 0;
//document.querySelector('.number').textContent = secureNumber;

const displayMessage = function (message) {
    document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click',function () {

    const guess = Number(document.querySelector('.guess').value);
    if(!guess){
        //document.querySelector('.message').textContent = "๐ท No Number!";
        displayMessage("๐ท No Number!");
    }else if(guess === secureNumber){
       // document.querySelector('.message').textContent = "๐Correct Number";
        displayMessage("๐Correct Number");
        document.querySelector('.number').textContent = secureNumber;       
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = "30rem";
        if(score > highscore ){
            highscore =score;
        document.querySelector('.highscore').textContent = highscore;
        }
    }else if(guess !== secureNumber){
       if(score > 1){
         //document.querySelector('.message').textContent = guess > secureNumber ? "๐ Too High" : "๐ Too Low";
         displayMessage(guess > secureNumber ? "๐ Too High" : "๐ Too Low");
         score--;
         document.querySelector('.score').textContent=score;
       }else{
        //document.querySelector('.message').textContent="๐ต๏ธ You lost the game";
        displayMessage("๐ต๏ธ You lost the game");
        document.querySelector('.score').textContent =0;
       }        
    }
})

document.querySelector('.again').addEventListener('click',function () {
    let secureNumber = Math.trunc(Math.random()*20)+1;
    document.querySelector('.score').textContent =20;
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = "15rem";
    document.querySelector('.guess').value = "";
    document.querySelector('.number').textContent = '?';
    //document.querySelector('.message').textContent= "Start guessing...";
    dispatchEvent("Start guessing...");
});