let title=document.querySelector(".title");
let storyOpening=document.querySelector(".story-opening");
let buttons=document.querySelector(".buttons");
let optionOne=document.querySelector(".option-one");
let optionTwo=document.querySelector(".option-two");
let optionOneScreen=document.querySelector(".option-one-screen");
let optionTwoScreen=document.querySelector(".option-two-screen");
let optionOneEnd=document.querySelector(".option-one-end");
let optionTwoEnd=document.querySelector(".option-two-end");


optionOne.onclick=function(){
     optionOneScreen.style.display="block";
     storyOpening.style.display="none";
     buttons.style.display="none";
     title.style.display="none";
     optionTwoEnd.style.display="none";
};

optionTwo.onclick=function(){
     optionTwoScreen.style.display="block";
     storyOpening.style.display="none";
     buttons.style.display="none";
     title.style.display="none";
     optionOneEnd.style.display="none";
 
};
optionOneScreen.onclick=function(){
     optionOneScreen.style.display="none";
     optionTwoEnd.style.display="block";
     
};

optionTwoScreen.onclick=function(){
     optionTwoScreen.style.display="none";
     optionOneEnd.style.display="block";
     
};


storyOpening.onclick=function(){
  title.style.display="block";
  optionTwoEnd.style.display="none";
  optionOneEnd.style.display="none";
  optionOne.style.display="none";
  optionTwo.style.display="none";
  optionOneScreen.style.display="none";
  optionOneEnd.style.display="none";
  optionTwoEnd.style.display="none";
  buttons.sytle.display="none";
};
