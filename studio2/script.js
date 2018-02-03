"use strict";

console.log('reading');

//var overlay=document.getElementById('overlay');


//chapstick.addEventListener('click',function(){
  //wrapper.style.display='block';
  //wrapper.innerHTML = "Chapstick is essential to my day. My lips become chapped on the daily and especially with the cold weather, it's crucial /to moisturize! Bringing chapstick sets the mood for the day";
//});

//capture images in variables
var chap=document.getElementById('chapstick');
var laptop=document.getElementById('laptop');
var bottle=document.getElementById('bottle');
//var img=document.getElementsByTagName("img");

//capture divs for overlay into variables
var d=document.getElementById('description');
var n=document.getElementById('name');
var obj=document.getElementById('objImg');
var overlay=document.getElementById('overlay');
var w=document.getElementById('wrapper');
var c=document.getElementById('close');


//chapstick;
chap.addEventListener('click',function() {
  w.className="disappear";    //fade page when chapstick graphic is clicked
  w.style.opacity="0";

  overlay.className="show";

  n.innerHTML="Burt's Bees Chapstick";
  n.className="fade";
  n.style.opacity="1";

  d.innerHTML = "Chapstick is essential to my day. My lips become chapped on the daily and especially with the cold weather, it's crucial to moisturize! Bringing chapstick sets the mood for the day. I love this one in particular because it's tinted and smells so yummy!";
  d.className="fade";
  d.style.opacity="1";

  objImg.innerHTML = "<img src='images/chapstick.png'>";
});


//laptop
laptop.addEventListener('click',function() {
  w.className="disappear";  //fade page when laptop graphic is clicked
  w.style.opacity="0";

  overlay.className="show";

  n.innerHTML="My Laptop";
  n.className="fade";
  n.style.opacity="1";

  d.innerHTML="I use my laptop for everything - I would definitely say a laptop is one of the most essential tools a designer can have. I wouldn't have been able to code this website without it!"
  d.className="fade";
  d.style.opacity="1";

  objImg.innerHTML = "<img src='images/laptop.png'>";
});



//bottle
bottle.addEventListener('click',function() {
  w.className="disappear";  //fade page when bottle graphic is clicked
  w.style.opacity="0";

  overlay.className="show";

  n.innerHTML="Water Bottle"; 
  n.className="fade";
  n.style.opacity="1";

  d.innerHTML="It's so important to drink water throughout the day, especially when you're spending long hours on campus. Water makes such a big difference in my day! It energizes me and especially with the amount of coffee I drink, I always try to stay hydrated.";
  d.className="fade";
  d.style.opacity="1";

  objImg.innerHTML="<img src='images/bottle.png'>";
});


//close
c.addEventListener('click', function() {
  w.className="fade";
  w.style.opacity="1";

  overlay.className="hide";
  return false;
})
