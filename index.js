let homeScore=0
let guestScore=0
let lastLeader=null

const homeScoreBtnOne=document.getElementById("home-score-btn-1")
const homeScoreBtnTwo=document.getElementById("home-score-btn-2")
const homeScoreBtnThree=document.getElementById("home-score-btn-3")
const guestScoreBtnOne=document.getElementById("guest-score-btn-1")
const guestScoreBtnTwo=document.getElementById("guest-score-btn-2")
const guestScoreBtnThree=document.getElementById("guest-score-btn-3")

const newBtn=document.getElementById("new-btn")

const homeScoreLbl=document.getElementById("home-score-lbl")
const guestScoreLbl=document.getElementById("guest-score-lbl")

const home=document.getElementById("home")
const guest=document.getElementById("guest")

scoreUpdate("both",0)


function scoreUpdate(player, score)
{
    if(player==="home"){

        homeScore +=score
        homeScoreLbl.textContent=homeScore
      

    }else if(player==="guest"){
         
        guestScore +=score
        guestScoreLbl.textContent=guestScore
       

    }else if(player==="both"){
        homeScore=guestScore=score
        homeScoreLbl.textContent=homeScore
        guestScoreLbl.textContent=guestScore
    } 
    highlightLeader()
}



function highlightLeader() {
   const currentLeader = homeScore > guestScore ? "home"
                        : guestScore > homeScore ? "guest"
                        : null;

    if (currentLeader !== lastLeader) {
        home.classList.toggle("leader", currentLeader === "home");
        guest.classList.toggle("leader", currentLeader === "guest");
        lastLeader = currentLeader;
    }
}




homeScoreBtnOne.addEventListener('click', function(){
    scoreUpdate("home",1)
})


homeScoreBtnTwo.addEventListener('click', function(){
    
    scoreUpdate("home",2)
})


homeScoreBtnThree.addEventListener('click', function(){
    scoreUpdate("home",3)
})


guestScoreBtnOne.addEventListener('click', function(){
    
    scoreUpdate("guest",1)
})


guestScoreBtnTwo.addEventListener('click', function(){
    scoreUpdate("guest",2)
})


guestScoreBtnThree.addEventListener('click', function(){
    scoreUpdate("guest",3)
})


newBtn.addEventListener('click',function(){
    scoreUpdate("both",0)
})