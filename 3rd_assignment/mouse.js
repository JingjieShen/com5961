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

function validateForm(){
    var x = document.forms["myForm"]["fname"].value;
    if (x == "") {
        alert("Enter must be filled out");
        return false;
    }
    document.getElementById("sidebar2").innerHTML = "<h2>The enter value is</h2>" + x ;
}