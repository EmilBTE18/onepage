var x=0;
var y=0;
var z=0;
var xt=0;
var yt=0;
var zt=0;
var a=0;
var at=0;

 $("#Hantlar1").text("Hantlar: "+x+" st "+xt+"KR");
  $("#Crosstrainer1").text("Crosstrainer: "+y+" st "+yt+"KR");
   $("#motionscykeln1").text("Motionscykel: "+x+" st "+xt+"KR");
    $("#Total").text("Totalkostnad: "+at+" KR");



$("#cart").click(function(){
console.log("test");

  $('html, body').animate({
        scrollTop: $("#Kundvagn").offset().top-60
    }, 2500);



});

$("#about").click(function(){
console.log("test");

  $('html, body').animate({
        scrollTop: $("#Omoss").offset().top-60
    }, 2500);



});
$("#contact1").click(function(){
console.log("test");

  $('html, body').animate({
        scrollTop: $("#contact").offset().top-60
    }, 2500);



});
$("#knapp1").click(function(){
console.log("test");

  $('html, body').animate({
        scrollTop: $("#contact").offset().top-60
    }, 2500);



});


$("#knapp10").click(function(){

  x=x+1;
xt=x*499;
at=xt+yt+zt;
  $("#Hantlar1").text("Hantlar: "+x+" st "+xt+"KR");
   $("#Crosstrainer1").text("Crosstrainer: "+y+" st "+yt+"KR");
    $("#motionscykeln1").text("Motionscykel: "+x+" st "+xt+"KR");
     $("#Total").text("Totalkostnad: "+at+" KR");

 console.log(x);



});


$("#knapp11").click(function(){

  y=y+1;
yt=y*1999;
at=xt+yt+zt;
  $("#Hantlar1").text("Hantlar: "+x+" st "+xt+"KR");
   $("#Crosstrainer1").text("Crosstrainer: "+y+" st "+yt+"KR");
    $("#motionscykeln1").text("Motionscykel: "+x+" st "+xt+"KR");
     $("#Total").text("Totalkostnad: "+at+" KR");







});


$("#knapp12").click(function(){

  y=y+1;
yt=y*999;
at=xt+yt+zt;
  $("#Hantlar1").text("Hantlar: "+x+" st "+xt+"KR");
   $("#Crosstrainer1").text("Crosstrainer: "+y+" st "+yt+"KR");
    $("#motionscykeln1").text("Motionscykel: "+x+" st "+xt+"KR");
     $("#Total").text("Totalkostnad: "+at+" KR");

});


$("#products").click(function(){
console.log("test");

  $('html, body').animate({
        scrollTop: $("#Produkter1").offset().top-60
    }, 2500);



});
