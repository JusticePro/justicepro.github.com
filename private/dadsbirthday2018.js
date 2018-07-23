// JavaScript Document

function enterCode() {
	var code = document.getElementById("code").value;
	
	if (code != "") {
		
		var valid = (code==="MichaelBayJokes") || (code==="Activate") || (code==="Gold") || (code==="Climbing") || (code==="NoItsNotSmartItsPolitics") || (code==="thereisnocowlevel") || (code==="Happy41stBirthday");
		
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
			
			if (code==="Happy41stBirthday") {
				document.getElementById("Happy41stBirthday").style.display = "";
			}
			
		}
		
	}else {
		alert("Input Code");
	}
	
}

document.getElementById("MichaelBayJokes").style.display = "none";
document.getElementById("Activate").style.display = "none";
document.getElementById("Gold").style.display = "none";
document.getElementById("Climbing").style.display = "none";
document.getElementById("NoItsNotSmartItsPolitics").style.display = "none";
document.getElementById("thereisnocowlevel").style.display = "none";
document.getElementById("Happy41stBirthday").style.display = "none";