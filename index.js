
let computerChoice = Math.random() * 100;
computerChoice = Math.floor(computerChoice) + 1;
if (computerChoice => 33) {
    alert("computer picked rock");
}
if(computerChoice > 34 && computerChoice >= 67){
    alert("computer picked paper");
}
if(computerChoice => 68 && computerChoice < 100){
    alert("computer picked scissor");
}



