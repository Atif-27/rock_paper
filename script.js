// document.querySelector('.choice').addEventListener('click',house);
let score=0;
//! Events
document.querySelector('.game .rock button').addEventListener('click',rockOnClick);
document.querySelector('.game .scissors button').addEventListener('click',scissorsOnClick);
document.querySelector('.game .paper button').addEventListener('click',paperOnClick);
document.querySelector('.play').addEventListener('click',playAgain);
document.addEventListener('DOMContentLoaded',showScore);


// ! defined variables
const yourPick=document.querySelector('.result .pick img');
const housePick=document.querySelector('.result .house img');

//! Image attributes
const paper='/original/images/icon-paper.svg';
const scissors='/original/images/icon-scissors.svg';
const rock='/original/images/icon-rock.svg';




// ! SHOWING THE USER INPUT AND CALLS HOUSE
let mynum;
function rockOnClick(){
    mynum=1;
    console.log('rock');
    hideshow();
    yourPick.setAttribute('src',rock);
    house();
    document.querySelector('.result .choice-btn').classList.add('class','borderR')
}
function paperOnClick(){
    mynum=2;
    console.log('paper');
    hideshow();
    yourPick.setAttribute('src',paper);
    house();
    document.querySelector('.result .choice-btn').classList.add('class','borderP')
}
function scissorsOnClick(){
    mynum=3;
    console.log('scissors');
    hideshow();
    yourPick.setAttribute('src',scissors);
    house();
    document.querySelector('.result .choice-btn').classList.add('class','borderS')
}
// ! TRANSITION OF SCREEN
function hideshow(){
    document.querySelector('.game').setAttribute('id','hide');
    document.querySelector('.result').setAttribute('id','show');
    console.log('hidden and shown')
}







// ! HOUSE CHOICE CALCULATOR- FIND & SHOWS HOUSE AND CALLS RESULT CALC
// House Calculation
// 1-> rock
// 2-> paper
// 3-> scissors
let hnum
function house(){
     hnum=Math.floor(Math.random()*3)+1;
    console.log(hnum);
    result();
    if(hnum===1)
    {
        showRock();

    }
    else if(hnum===2)
    {
        showPaper();

    }
    else{
        showScissors();
   
    }
}
function showRock(){
    housePick.setAttribute('src',rock);
    document.querySelector('.house .choice-btn').classList.add('class','borderR')
}
function showPaper(){
    housePick.setAttribute('src',paper);
    document.querySelector('.house .choice-btn').classList.add('class','borderP')
}
function showScissors(){
    housePick.setAttribute('src',scissors);
    document.querySelector('.house .choice-btn').classList.add('class','borderS')
}







//! FINDING OUR RESULTS
const state=document.querySelector('.display h2' );
function result(){
    if(mynum===hnum)
     {state.innerText='IT IS A TIE!';}
    else if(mynum===1 && hnum===3)
        win();
    else if(mynum===2 && hnum===1)
        win();
    else if(mynum===3 && hnum===2)
        win();
    else
        lose();
}
function win(){
    state.innerText='YOU WON!';
    score++;
    updateScore();
}
function lose(){
    state.innerText='YOU LOST!';
    score--;
    updateScore();
}


// ! PLAY AGAIN
function playAgain(){
    document.querySelector('.game').removeAttribute('id','hide');
    document.querySelector('.result').removeAttribute('id','show');
    console.log('removed')
    document.querySelector('.result .choice-btn').classList="choice-btn";
    document.querySelector('.house .choice-btn').classList="choice-btn";
}

// ! SCORE
function showScore(){
    const s=document.querySelector('.score h4');
    s.innerText=score;
}
function updateScore(){

    showScore();
}