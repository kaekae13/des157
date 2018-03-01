"use strict";
var title = document.getElementById('title');
var btnNxt = document.getElementById('nxtPage');

var about = document.getElementById('about');
var btnNxt1 = document.getElementById('nxtPage1');
var btnBack1 = document.getElementById('goBack1');
var title1=document.getElementById('title1');
var content = document.getElementById ('content');

var instruct = document.getElementById('instructions');
var btnBack2 = document.getElementById('goBack2');
var title2=document.getElementById('title2');
var steps=document.getElementById('steps');

btnNxt.addEventListener('click', function() {
  console.log('reading');
  title.className= "disappear";
  title.style.opacity = '0';

  btnNxt.className = "disappear";
  btnNxt.style.opacity="0";

  about.className="fade";
  about.style.opacity = '1';


});

btnNxt1.addEventListener('click', function() {
  console.log('reading');
  about.className="disappear";
  about.style.opacity = '0';

  instruct.className="fade";
  instruct.style.opacity="1";
});


btnBack1.addEventListener('click', function() {
  console.log('reading');
  about.className="disappear";
  about.style.opacity = '0';

  title.className="fade";
  title.style.opacity="1";

  btnNxt.className = "fade";
  btnNxt.style.opacity="1";
});

btnBack2.addEventListener ('click', function() {
  console.log('reading');
  instruct.className='disappear';
  instruct.style.opacity = '0';

  about.className='fade';
  about.style.opacity = '1';
})
