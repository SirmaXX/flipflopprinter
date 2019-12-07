'use strict';
function getpages() {
var text = "";
var i; 
const frontpages =[];
const backpages = [];
const lastnumber = document.getElementById("myText").value;
var frontpgs=document.getElementById("front");
var backpgs=document.getElementById("back");
var numbers = /^[0-9]+$/;

if(lastnumber.match(numbers))
      {
      for (i = 0; i <  lastnumber; i++) {
        text +=  i + ",";
        if(i%2 ==0){
         frontpages.push(i);
         }else {
         backpages.push(i);
         }
        }
      }
      else
      {
        alert("not number");
        reloadfunc();
      return false;
      }

 

  //they are outputs

frontpgs.innerHTML = frontpages.filter(checkpages);
backpgs.innerHTML = backpages.filter(checkpages);

}




function intervalpages(){
var text="";
  var first = document.getElementById("first").value;
  var last = document.getElementById("last").value;
  var backpg=[];
  var frontpg=[];
  var numbers = /^[0-9]+$/;

  if(first.match(numbers) && last.match(numbers) )
        {
        for (first; first < last; first++) {
          text += first + ",";
          if(first%2 ==0){
            frontpg.push(first);
           }else {
            backpg.push(first);
           }
          }
        }
        else
        {
          alert("not number");
          reloadfunc();
        return false;
        }
        document.getElementById("frontpgs").innerHTML = backpg;
        document.getElementById("backpgs").innerHTML = frontpg;
}


//its checking outputs
function checkpages(value) {
  if (typeof value === 'number'){
    return value;
    }else {
     alert("lütfen sayı giriniz");
    }
   
}

//its page reload function
function reloadfunc() {
  location.reload();
}