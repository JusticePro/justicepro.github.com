// JavaScript Document

function enterCode() {
	var code = document.getElementById("code").value;
	
	if (code != "") {
		
		var valid = (code==="MichaelBayJokes") || (code==="Activate") || (code==="Gold") || (code==="Climbing") || (code==="NoItsNotSmartItsPolitics") || (code==="thereisnocowlevel") || (code==="IAmYourFather");
		
		if (valid) {
			
			if (code==="MichaelBayJokes") {
				document.getElementById("MichaelBayJokes").style.display = "";
			}
			
			if (code==="Activate") {
				document.getElementById("Activate").style.display = "";
			}
			
			if (code==="Gold") {
				document.getElementById("Gold").style.display = "";
			}
			
			if (code==="Climbing") {
				document.getElementById("Climbing").style.display = "";
			}
			
			if (code==="NoItsNotSmartItsPolitics") {
				document.getElementById("NoItsNotSmartItsPolitics").style.display = "";
			}
			
			if (code==="thereisnocowlevel") {
				document.getElementById("thereisnocowlevel").style.display = "";
			}
			
			if (code==="IAmYourFather") {
				document.getElementById("IAmYourFather").style.display = "";
			}
			
		}else {
			alert("Invalid Code.");
		}
		
	}else {
		alert("Code cannot be empty.");
	}
	
}

function father_joke() {
	document.getElementById("IAmYourFather_joke").style.display = "";
}

function father_serious() {
	document.getElementById("IAmYourFather_serious").style.display = "";
}

document.getElementById("MichaelBayJokes").style.display = "none";
document.getElementById("Activate").style.display = "none";
document.getElementById("Gold").style.display = "none";
document.getElementById("Climbing").style.display = "none";
document.getElementById("NoItsNotSmartItsPolitics").style.display = "none";
document.getElementById("thereisnocowlevel").style.display = "none";
document.getElementById("IAmYourFather").style.display = "none";
document.getElementById("IAmYourFather_joke").style.display = "none";
document.getElementById("IAmYourFather_serious").style.display = "none";