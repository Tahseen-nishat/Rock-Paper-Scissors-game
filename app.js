let userscore=0;
let compscore=0;

let choices=document.querySelectorAll(".choice");
let msg=document.querySelector("#msg");

let usersc=document.querySelector("#user-score");
let compsc=document.querySelector("#comp-score");

const gencompchoice = () => {
    const options =["rock","paper","scissors"]
    const index=Math.floor(Math.random()*3);
    return options[index];
};
const drawgame = () =>{
    msg.innerText="It's a tie..! Play again :)";
    msg.style.backgroundColor="black";
    msg.style.color="white";
};
const showwinner=(userwin,userchoice,compchoice)=>{
    if(userwin){
        userscore++;
        usersc.innerText=userscore;
        msg.innerText=`You won.! Your ${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor="green";
    }else{
        compscore++;
        compsc.innerText=compscore;
        msg.innerText=`You lost.! ${compchoice} beats your ${userchoice}`;
        msg.style.backgroundColor="red";
        msg.style.color="white";
    }
};
const playgame=(userchoice)=>{
    const compchoice= gencompchoice();
    if(userchoice===compchoice){
        drawgame();
    }else{
        let userwin=true;
        if(userchoice==="rock"){
            userwin=compchoice==="paper"?false:true;
        }else if(userchoice==="paper"){
            userwin=compchoice==="scissors"?false:true;
        }else{
            userwin=compchoice=="rock"?false:true;
        }
        showwinner(userwin,userchoice,compchoice);
    }
};


choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userchoice=choice.getAttribute("id");
        playgame(userchoice);
    })
});