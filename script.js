let bg = document.querySelector("#bg");
let light = document.querySelector("#light");
let dark = document.querySelector("#dark");

let toggle = {
  light: {
    backgroundColor: "white",
    textColor: "black",
  },
  dark: {
    backgroundColor: "black",
    textColor: "white",
  },
};


dark.addEventListener("click", function(){
    bg.style.backgroundColor = toggle.dark.backgroundColor;
    bg.style.color =  toggle.dark.textColor
})

light.addEventListener("click", function(){
    bg.style.backgroundColor = toggle.light.backgroundColor
    bg.style.color = toggle.light.textColor
})


let circle = document.querySelector('.circle');
let canvas = document.querySelector('.canvas');
let guessNumber = document.querySelector('#guessNumber');
let scoreboard = document.querySelector('#scoreboard')

guessNumber.innerHTML = getRandomNumber();

function makeCircles(){
  canvas.innerHTML = "";
  for(let i =0; i< 44; i++){
    let cloneCircle = circle.cloneNode(true);
    let random = getRandomNumber();
    cloneCircle.textContent = random;
    canvas.appendChild(cloneCircle)
  }
}

makeCircles();

function getRandomNumber(){
  let random = Math.random() * 10;
  random = Math.floor(random);
  return random;
}


// TIMER KE CODE ME 
// setInterval(function, time)


let timeLeft = 30;
let clock = document.querySelector('#clock')

function decreaseTime(){
   if(timeLeft > 0){
    timeLeft = timeLeft - 1;
    clock.innerHTML = timeLeft;
   }
}

setInterval(decreaseTime, 1000);

let score = 0;


canvas.addEventListener('click', function(event){
  // console.log('clicked', event.target.textContent);
  let clickedNumber = event.target.textContent;
  let targetNumber = guessNumber.textContent;

  if(clickedNumber === targetNumber){
    console.log('sahi jawab');
    score = score + 10;
    scoreboard.innerHTML = score;
    guessNumber.innerHTML = getRandomNumber();
    makeCircles()

  }

})