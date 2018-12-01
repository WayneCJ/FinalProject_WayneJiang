var imgArr = ["img/Joker.jpg", "img/Bane.jpg", "img/Penguin.jpg", "img/Deathstroke.jpg"];  //an array that contains 4 colors
var chaArr = ["Joker", "Bane", "Penguin", "Deathstroke"]
var newCArr = new Array();                          //an empty array that will contain the random generated color

function start(){
	var randomNum= Math.floor(Math.random() *4);
	// pick a random number from 0 to 3
	var imgStr =chaArr[randomNum] + '<br/><br/>' + '<img src="' + imgArr[randomNum] + '" alt = "imgArr[randomNum]">';
	document.getElementById("imgArea").innerHTML=imgStr;
	//write down  a random color in the array
	newCArr.unshift(imgArr[randomNum]);
	// unshift the chosen random color to the empty array
	setTimeout("disappear()", 300);
	//setTimeout will call a function after a period of time
}



function disappear(){
	document.getElementById("imgArea").innerHTML="Please Press The Right Item!<br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>";	
}


function smokeBomb(){
	var smokeBomb = ["img/Deathstroke.jpg"];
	if(smokeBomb == newCArr[0]){
		console.log(newCArr);
		start();
	}else if(newCArr[0] == "img/Bane.jpg"){
		document.getElementById("imgArea").innerHTML="<h1>YOU LOSE! Tiny Bat!</h1><h2>Game Over!(Press Start to restart)</h2><br/><br/><br/><br/><br/><br/><br/>";	
		
	}else if(newCArr[0] == "img/Joker.jpg"){
		document.getElementById("imgArea").innerHTML="<h1>HAHAHAHAHA! You are not funny enough!</h1><h2>Game Over!(Press Start to restart)</h2><br/><br/><br/><br/><br/><br/>";	

	}else if(newCArr[0] == "img/Penguin.jpg"){
		document.getElementById("imgArea").innerHTML="<h1>It is my pleasure to kill you.</h1><h2>Game Over!(Press Start to restart)</h2><br/><br/><br/><br/><br/><br/><br/>";	

	}
}

function batmanHook(){
	var batmanHook = ["img/Joker.jpg"];
	if(batmanHook == newCArr[0]){
		console.log(newCArr);
		start();
	}else if(newCArr[0] == "img/Deathstroke.jpg"){
		document.getElementById("imgArea").innerHTML="<h1>Ha, you need to train more, Kid!</h1><h2>Game Over!(Press Start to restart)</h2><br/><br/><br/><br/><br/><br/><br/>";	

	}else if(newCArr[0] == "img/Bane.jpg"){
		document.getElementById("imgArea").innerHTML="<h1>YOU LOSE! Tiny Bat!</h1><h2>Game Over!(Press Start to restart)</h2><br/><br/><br/><br/><br/><br/><br/>";	

	}else if(newCArr[0] == "img/Penguin.jpg"){
		document.getElementById("imgArea").innerHTML="<h1>It is my pleasure to kill you.</h1><h2>Game Over!(Press Start to restart)</h2><br/><br/><br/><br/><br/><br/><br/>";	

	}
}

function batmanArmor(){
	var batmanArmor = ["img/Bane.jpg"];
	if(batmanArmor == newCArr[0]){
		console.log(newCArr);
		start();
	}else if(newCArr[0] == "img/Deathstroke.jpg"){
		document.getElementById("imgArea").innerHTML="<h1>Ha, you need to train more, Kid!</h1><h2>Game Over!(Press Start to restart)</h2><br/><br/><br/><br/><br/><br/><br/>";	

	}else if(newCArr[0] == "img/Joker.jpg"){
		document.getElementById("imgArea").innerHTML="<h1>HAHAHAHAHA! You are not funny enough!</h1><h2>Game Over!(Press Start to restart)</h2><br/><br/><br/><br/><br/><br/>";	

	}else if(newCArr[0] == "img/Penguin.jpg"){
		document.getElementById("imgArea").innerHTML="<h1>It is my pleasure to kill you.</h1><h2>Game Over!(Press Start to restart)</h2><br/><br/><br/><br/><br/><br/><br/>";	

	}
}
function batarang(){
	var batarang = ["img/Penguin.jpg"];
	if(batarang == newCArr[0]){
		console.log(newCArr);
		start();
	}else if(newCArr[0] == "img/Deathstroke.jpg"){
		document.getElementById("imgArea").innerHTML="<h1>Ha, you need to train more, Kid!</h1><h2>Game Over!(Press Start to restart)</h2><br/><br/><br/><br/><br/><br/><br/>";	

	}else if(newCArr[0] == "img/Bane.jpg"){
		document.getElementById("imgArea").innerHTML="<h1>YOU LOSE! Tiny Bat!</h1><h2>Game Over!(Press Start to restart)</h2><br/><br/><br/><br/><br/><br/><br/>";	

	}else if(newCArr[0] == "img/Joker.jpg"){
		document.getElementById("imgArea").innerHTML="<h1>HAHAHAHAHA! You are not funny enough!</h1><h2>Game Over!(Press Start to restart)</h2><br/><br/><br/><br/><br/><br/>";	
		

	}
}