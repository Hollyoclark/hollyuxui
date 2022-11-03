var navbtn =document.querySelectorAll(".hover")
function mouseOver() {
    navbtn.style.color = "red";
  }
  
  function mouseOut() {
    document.getElementsByClassName("hover").style.color = "white";
  }

  navbtn.addEventListener('mouseenter', function() {
    navbtn.style.color = "red";
  })

  document.getElementsByClassName("hover").addEventListener('mouseleave', function() {
    document.getElementsByClassName("hover").style.color = "white";
  })