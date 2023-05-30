

var subtitle = document.querySelector("#botaoa");

subtitle.addEventListener("mouseover", function() {

  var legenda = document.querySelector("#botaob");

  legenda.classList.remove("hide");

  var subtitle = document.querySelector("#botaoa");

  subtitle.classList.add("hide");

});


var subtitle = document.querySelector("#botaob");

subtitle.addEventListener("mouseover", function() {

  var legenda = document.querySelector("#botaob");

  legenda.classList.add("hide");

  var subtitle = document.querySelector("#botaoa");

  subtitle.classList.remove("hide");
  subtitle.classList.add("position");

});





