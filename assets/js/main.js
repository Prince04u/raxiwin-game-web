(function(){
  "use strict";
  var burger=document.querySelector(".burger");
  var menu=document.getElementById("primary-menu");
  if(burger&&menu){
    burger.addEventListener("click",function(){
      var open=menu.classList.toggle("open");
      burger.setAttribute("aria-expanded",open?"true":"false");
    });
    menu.querySelectorAll("a").forEach(function(a){
      a.addEventListener("click",function(){menu.classList.remove("open");burger.setAttribute("aria-expanded","false");});
    });
  }
  // mark current year
  var y=document.getElementById("year");
  if(y){y.textContent=new Date().getFullYear();}
})();
