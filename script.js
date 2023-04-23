'use strict';

let secretNumber = Math.trunc(Math.random() * 30) + 1;
let score = 10;
let highscore = 0;

document.querySelector('.check').addEventListener('click', function (){

        const assumption = Number(document.querySelector('.assumption').value);
        console.log(secretNumber, assumption, typeof assumption);
        if(!assumption){
                document.querySelector('.message').textContent ='The box is empty. Choose a number'

        }
        else if(assumption=== secretNumber){
                document.querySelector('.message').textContent = '🥳 Correct';
                document.querySelector('.number').textContent = secretNumber 
                document.querySelector('body').style.backgroundColor ='#07e500';
                document.querySelector('.assumption').style.width = '130px';


                if (score > highscore) {
                               highscore = score;
                               document.querySelector('.highscore').textContent = highscore
                }

        }
        else if(assumption > secretNumber){
                if(score > 0){
                document.querySelector('.message').textContent = '📈 Too high Bro'
                score--;
                document.querySelector('.score').textContent = score
                }
                else{
                        document.querySelector('.message').textContent = '🤧 you lost'
                        document.querySelector('.score').textContent = 0;
                        document.querySelector('body').style.backgroundColor ='rgb(230, 9, 9)'
                }
               
        }
        else if(assumption < secretNumber){
                if(score > 1){
                        document.querySelector('.message').textContent = '📉 Damn low'
                        score--;
                        document.querySelector('.score').textContent = score
                        }
                        else{
                                document.querySelector('.message').textContent = '🤧 you lost'
                                document.querySelector('.score').textContent = 0;
                                document.querySelector('body').style.backgroundColor ='rgb(230, 9, 9)'
                        }

        }
                
})

document.querySelector('.again').addEventListener('click', function(){
        secretNumber = Math.trunc(Math.random() * 30) + 1;
        console.log(secretNumber);

        score = 15;
         document.querySelector('.message').textContent = 'Start guessing...';
         document.querySelector('.number').textContent = '?';
         document.querySelector('.score').textContent = score;
         document.querySelector('.assumption').value ='';
         document.querySelector('body').style.backgroundColor = 'rgb(26, 25, 25)'
         document.querySelector('.number').style.width = '80px';
})
  














   
  







