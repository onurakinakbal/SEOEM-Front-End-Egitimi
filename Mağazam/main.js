// bu kodu "https://www.w3schools.com/howto/howto_js_toggle_hide_show.asp" adresinden aldım ve yeniden düzenleyip bölüm saklamak üzere kullandım. js'im yetmediği için bir sürü açık oldu ister istemez
function myFuncWing() {
    var x = document.getElementById("noNeos");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  } 
function myFuncNeos() {
    var y = document.getElementById("noWing");
    if (y.style.display === "none") {
      y.style.display = "block";
    } else {
      y.style.display = "none";
    }
  } 
function myFunc() {
  var z = document.getElementById("both");
    var y = document.getElementById("noWing");
    if (y.style.display === "none") {
      y.style.display = "block";
    } else {
      y.style.display = "block";
    }
    var x = document.getElementById("noNeos");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "block";
  } 
    
  }
