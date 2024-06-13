const computerchoice = document.getElementById('comp-choice');
// instead of using getelementbyid we could also use queryselector
const yourchoice = document.getElementById('your-choice');
const resultdisplay = document.getElementById('result');

const possiblechoices = document.querySelectorAll("button") // sabkuch jo bhi ek button h vo select hojaaega. 

// in this querselector , we could also do by class, like giving all the buttons the same classname and then using that classname in this queryselector. But, since we don't have to add any more buttons in this , thats why class ki as such koi need nhi h . 

let userchoice; 
let compchoice;
let resultss;

possiblechoices.forEach(possiblechoices=> possiblechoices.addEventListener("click", (e)=>{ // e stands for event
    userchoice = e.target.id;
    yourchoice.innerHTML= userchoice;
    generatecomputerchoice();
    getresult();
}))

function generatecomputerchoice(){
    const randomnumber =Math.floor(Math.random() * 3) + 1 ;// or instead of 3 u can also use possiblechoices.length
    // math.random gives numbers between 0 and 3 & Math.floor to convert it into wholenumber. 
    console.log(randomnumber);

    if(randomnumber === 1){
        compchoice = "rock";
    }
    if(randomnumber ===2){
        compchoice = "paper";
    }
    if(randomnumber ===3){
        compchoice = 'scissor';
    }

    computerchoice.innerHTML= compchoice;
}

function getresult (){
    if(compchoice === userchoice){
        resultss = 'Its A Draw!'
    }

    if(compchoice==="paper" && userchoice==="rock"){
        resultss = 'You Lost!'
    }

    if(compchoice==="paper" && userchoice==="scissor"){
        resultss = 'You won!';
    }

    if(compchoice==="scissor" && userchoice==="rock"){
        resultss = 'You won!';
    }

    if(compchoice==="scissor" && userchoice==="paper"){
        resultss = 'You lost!';
    }

    if(compchoice==="rock" && userchoice==="paper"){
        resultss = 'You won!';
    }

    if(compchoice==="rock" && userchoice==="scissor"){
        resultss = 'You lost!';
    }

    resultdisplay.innerHTML= resultss; // thodhi dikkat here figure out later. 
}
