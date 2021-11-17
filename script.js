
function RPS(){
	var machine = "rock";
	var result = document.getElementById("result");
	var userPick = prompt("Please enter rock, paper or scissors: ");
	userPick = userPick.toLowerCase();
	
	if (userPick === machine){
		result.innerHTML = "Draw!";
		result.style.color = "#66ff99";
	}
	else if (userPick === "scissors"){
		result.innerHTML = "Loser!";
		result.style.color = "#e60000";
	} 
	else if (userPick === "paper"){
		result.innerHTML = "Winner";
		result.style.color = "#33cc33";
	}
	else {
		result.innerHTML = "Invalid input,  try again!";
		result.style.color = "#1aa3ff";
	}
}