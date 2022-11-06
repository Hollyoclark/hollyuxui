var navbtn =document.querySelectorAll(".hover")
function mouseOver() {
    navbtn.style.color = "red";
  }
  
  function mouseOut() {
    document.getElementsByClassName("hover").style.color = "white";
  }

  navbtn.addEventListener('mouseover', function() {
    navbtn.style.color = "red";
  })

  document.getElementsByClassName("hover").addEventListener('mouseleave', function() {
    document.getElementsByClassName("hover").style.color = "white";
  })

  

        
  function changeColor(obj) {
      if (obj.style.color == 'orange') {
          obj.style.color = 'white';
      } else {
          obj.style.color = 'orange';
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
