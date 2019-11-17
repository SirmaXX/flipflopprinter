
'use strict';
function getpages() {
var text = "";
var i; 
var frontpages =[];
var backpages = [];
var lastnumber = document.getElementById("myText").value;
for (i = 0; i < lastnumber ; i++) {
  text +=  i + ",";
  if(i%2 ==0){
    frontpages.push(i);
  }else {
   backpages.push(i);
  }
}
document.getElementById("demo").innerHTML = text;
document.getElementById("front").innerHTML = frontpages;
document.getElementById("back").innerHTML = backpages;
}
