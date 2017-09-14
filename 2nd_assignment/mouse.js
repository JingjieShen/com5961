function myFunction(){
	var x=document.getElementById("name");
	x.value=x.value.toUpperCase();
}

document.getElementById("local").style.color="Pink";
document.getElementById("local").style.fontFamily="Arial";
document.getElementById("local").style.fontSize="300%";

document.getElementById("mybt").onclick=function(){displayDate()};
function displayDate(){
	document.getElementById("word").innerHTML=Date();
}

function changetext(id){
	id.innerHTML = "International News";
}

function sidebar2_onMouseOver(){
    var sidebar2_onMouseOver = document.getElementById("sidebar2");
    sidebar2.className = "newStyle";
    sidebar2.innerHTML = "<h2>Be kind to yourself</h2><p>Always aim for the best!</p>";
}

function sidebar2_onMouseOut(){
    var sidebar2_onMouseOut = document.getElementById("sidebar2");
    sidebar2.className = "defaultStyle";
    sidebar2.innerHTML = "<h2>Be yourself</h2><p>See what can be shown here.</p>";
}
