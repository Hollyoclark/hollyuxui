

  function changeColor(obj) {
    if (obj.style.color == 'skyblue') {
        obj.style.color = 'white';
    } else {
        obj.style.color = 'skyblue';
    }
}
 
function changeBgColor(obj, colorName) {
    obj.style.backgroundColor = colorName;
}
 
function changeText(obj, text) {
    obj.innerText = text;
}
 
function scaleUp(obj, size) {
    obj.style.fontSize = size;
}
 
function showSix() {
    var element = document.getElementById("six");
     
    if(element.style.visibility == "hidden"){
        //element.style.display = "block";
        element.style.visibility = "visible";
    } else {
        //element.style.display = "none";
        element.style.visibility = "hidden";
    }   
}

function changeColor2(obj) {
  if (obj.style.color == 'skyblue') {
      obj.style.color = 'black';
  } else {
      obj.style.color = 'skyblue';
  }
}function mouseOver() {
    document.getElementById("hover").style.color = "red";
  }
  
  function mouseOut() {
    document.getElementById("hover").style.color = "white";
  }