
//use strict;

console.log ('reading');
document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM fully loaded and parsed");
//document.addEventListener("DOMContentLoaded", function(event) {
//console.log("DOM fully loaded and parsed");

// capture submit event
document.f.onsubmit = processForm;
document.f.onreset = clearForm;

//capture process function
function processForm() {
  console.log ('processing');
  //store nouns in variables
  var n1 = document.f.n1.value;
  var n2 = document.f.n2.value;
  var n3 = document.f.n3.value;
  var n4 = document.f.n4.value;
  var n5 = document.f.n5.value;
  var n6 = document.f.n6.value;
  var num = document.f.num.value;

  //store adjectives in variables
  var a1 = document.f.a1.value;
  var a2 = document.f.a2.value;
  var a3 = document.f.a3.value;

  //store verbs in variables
  var v1 = document.f.v1.value;
  var v2 = document.f.v2.value;

//capture myMsg element
  var myMsg = document.getElementById('myMsg');

  //concatenate results
  myMsg.innerHTML = "First, you preheat your " + n1 + " to " + num + " degrees.Then take a stick of " + n2 + " and melt it in a 10 inch cast-" + a1 + " pan. In a bowl, " + v1 + " granulated " + n3 + " & " + n4 + " and " + v2 + " the mixture. Add milk and " + n5 + " beat together. Pour the mixture into a well-buttered " + n6 + " and place in the oven! Bake until a golden " + a2 + " color. Bon Appetit!";
  myMsg.className = "show";

// prevent page from reloading
  return false;
}

function clearForm() {
        myMsg.innerHTML = "";
    }

});
