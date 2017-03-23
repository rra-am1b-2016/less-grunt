//alert("Hoi");
var btn = document.getElementById("btn");
var container = document.getElementById("container");

btn.onclick = function () {
   
   for (var i=1; i <= 5; i++) {
      var divje = document.createElement("div");
      var text = document.createTextNode("Dit is tekst voor divje 0" + i);
      divje.appendChild(text);
      console.log(divje);
      divje.setAttribute("class", "test" + i);
      container.appendChild(divje);
   }
   
  
}