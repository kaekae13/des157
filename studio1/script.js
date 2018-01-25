use strict;

// submit event
document.f.onsubmit = processForm;

//process function
function processForm() {

  //nouns
  var n1 = document.f.n1.value;
  var n2 = document.f.n2.value;
  var n3 = document.f.n3.value;
  var n4 = document.f.n4.value;
  var n5 = document.f.n5.value;
  var num = document.f.num.value;

  //adjectives
  var a1 = document.f.a1.value;
  var a2 = document.f.a2.value;

  //verbs
  var v1 = document.f.v1.value;
  var v2 = document.f.v2.value;

  myMsg.innerHTML = "First, you preheat your " + n1 + " to " + num + " degrees. Then take a stick of " + n2 + " and melt it in a 10 inch cast- "

}

document.f.onreset = function(event) {
  document.getElementById('myMsg').classList.add("hidden");
}
