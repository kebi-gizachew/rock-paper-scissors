const btnRock = document.getElementById("rock");
const btnPaper = document.getElementById("paper");
const btnScissors = document.getElementById("scissors");
const user = document.getElementById("user");
const computer = document.getElementById("computer");
const temp= document.getElementById("temp");
const resultText = document.getElementById("resultText");
const closeButton = document.querySelector("#close");
const yesButton = document.getElementById("yes");
const noButton = document.getElementById("no");
const dia=document.getElementById("dialog");
const restart = document.getElementById("rest");
const restartButton = document.getElementById("restart");
const butt5=document.getElementById("5");
const butt7=document.getElementById("7");
let round=5;
userScore=0;
computerScore=0;
const choices=["rock", "paper", "scissors"];
const comp=()=>{
    const ran=Math.floor(Math.random()*3);
    return choices[ran];
}
const trial=(a,b)=>{
    if(a=="rock" && b=="scissors" || a=="paper" && b=="rock" || a=="scissors" && b=="paper"){
        userScore++;
        user.innerText=userScore;
        return "You";
    }
    else{
        computerScore++;
        computer.innerText=computerScore;
        return "Computer";
    }
}
const finWin=()=>{
    if(computerScore==round || userScore==round){
        if(computerScore>userScore){
            playSoundCon();
            resultText.innerText="🥺Computer wins the game!";
        }
        else{
            resultText.innerText="💃🏾Congratulations, You Win!";
        }
        setTimeout(() => {
            restart.showModal();
        }, 300);
    }
}
const reset=()=>{
        userScore=0;
        computerScore=0;
        user.innerText=userScore;
        computer.innerText=computerScore;
        round=5;
}
const playSoundCon=()=>{
    let audio = new Audio("https://www.myinstants.com/en/instant/ye-ww3-22423/");
audio.play();

}

btnRock.addEventListener("click",()=>{
    let htmlString;
    const ans=comp();
    if("rock"==ans){
        htmlString=`<p>It's a tie!</p>`;
        temp.innerHTML=htmlString;
    }
    else{
        htmlString=`<p>Computer picked ${ans}. ${trial("rock",ans)} won this round!</p>`;
        temp.innerHTML=htmlString;
    }
    finWin();
    
})
btnPaper.addEventListener("click",()=>{
    let htmlString;
    const ans=comp();
    if("paper"==ans){
        htmlString=`<p>It's a tie!</p>`;
        temp.innerHTML=htmlString;
    }
    else{
        htmlString=`<p>Computer picked ${ans}. ${trial("paper",ans)} won this round!</p>`;
        temp.innerHTML=htmlString;
    }
    finWin();
    
})
btnScissors.addEventListener("click",()=>{
    let htmlString;
    const ans=comp();
    if("scissors"==ans){
        htmlString=`<p>It's a tie!</p>`;
        temp.innerHTML=htmlString;
    }
    else{
        htmlString=`<p>Computer picked ${ans}. ${trial("scissors",ans)} won this round!</p>`;
        temp.innerHTML=htmlString;
    }
    finWin();
    
})
closeButton.addEventListener("click",()=>{
dia.showModal();
})
yesButton.addEventListener("click",()=>{
    reset();
    resultText.innerText="";
    temp.innerHTML="";
    dia.close();
})
noButton.addEventListener("click",()=>{
    dia.close();
})
restartButton.addEventListener("click",()=>{
    reset();
    resultText.innerText="";
    temp.innerHTML="";
    restart.close();
}) 
butt5.addEventListener("click",()=>{
    round=5;
    butt5.classList.add("active");
    butt7.classList.remove("active");
})
butt7.addEventListener("click",()=>{
    round=7;
    butt7.classList.add("active");
    butt5.classList.remove("active");
})