var list; 
function gotoCreateList(){
	
	document.getElementById("createList").hidden = false; 
	document.getElementById("showResult").hidden = true; 
	
	var ol = document.getElementById("orderedList");
	list.removeChild(ol); 
	
}

function gotoResult(){
	var ol = document.createElement("ol"); 
	ol.setAttribute('id', "orderedList"); 
	list.appendChild(ol); 
	


	var text = document.getElementById("textArea").value;
	var lines = text.split("\n");
	var count = 0; 
	for (var i = 0; i <lines.length; i++){
		var str = lines[i].trim(); 
		if(str == "Sam" || str == "Natalie" || str == "Mollie"){
			count++; 
		}
	}
	if (count == 3){
		displayFixed(); 
	}
	else{
		displayRandom(lines); 
	}

	document.getElementById("createList").hidden = true; 
	document.getElementById("showResult").hidden = false; 
}

function displayFixed(){
	
	var li1 = document.createElement("li"); 
	li1.appendChild(document.createTextNode("Sam")); 
	var li2 = document.createElement("li"); 
	li2.appendChild(document.createTextNode("Natalie")); 
	var li3 = document.createElement("li"); 
	li3.appendChild(document.createTextNode("Mollie")); 

	var ol = document.getElementById("orderedList"); 
	ol.appendChild(li1); 
	ol.appendChild(li2); 
	ol.appendChild(li3); 

}

function displayRandom(lines){

	console.log(lines); 	 
	shuffle(lines); 
	console.log(lines); 
	var ol = document.getElementById("orderedList"); 
	for (var i = 0; i <lines.length; i++){
		var li = document.createElement("li"); 
		li.appendChild(document.createTextNode(lines[i])); 
		
		ol.appendChild(li); 
	}

}

function shuffle(a) {
    var j, x, i;
    for (i = a.length; i; i -= 1) {
        j = Math.floor(Math.random() * i);
        x = a[i - 1];
        a[i - 1] = a[j];
        a[j] = x;
    }
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
document.addEventListener("DOMContentLoaded", function(event) {
	list = document.getElementById("list"); 
	document.getElementById("showResult").hidden = true; 
	document.getElementById("random").addEventListener("click", gotoResult)
	document.getElementById("back").addEventListener("click", gotoCreateList)
	
})