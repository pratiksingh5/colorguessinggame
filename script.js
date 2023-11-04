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

guessNumber.innerHTML = getRandomNumber();

function makeCircles(){
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



// function makeCircles(){
//     console.log("Circle creation starts");


//     for(let i = 0; i < 36 ; i++){
//         // canvas.innerHTML = `<div class="circle">5</div>`;
//         canvas.innerHTML = canvas.innerHTML +`<div class="circle">5</div>`
//         console.log('circle created', i)
//     }

// }

// makeCircles()




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

setInterval(decreaseTime, 1000)
