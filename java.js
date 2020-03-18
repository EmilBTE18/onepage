var x=0;  //deklarerar en variabel för hur många Hantlar man köpt
var y=0;  //deklarerar en variabel för hur många crosstrainers man köpt man köpt
var z=0;   //deklarerar en variabel för hur många Motionscykelar du köpt man köpt man köpt
var xt=0;  //deklarerar en variabel för vad hantlarna du köpt kostar
var yt=0;   //deklarerar en variabel för vad crosstrainers du köpt kostar
var zt=0;   //deklarerar en variabel för vad motionscyklarna du köpt kostar
var at=0;   //deklarerar en variabel för totala kostnaden

 $("#Hantlar1").text("Hantlar: "+x+" st "+xt+"KR"); // skriver ut en inköpslista
  $("#Crosstrainer1").text("Crosstrainer: "+y+" st "+yt+"KR");
   $("#motionscykeln1").text("Motionscykel: "+x+" st "+xt+"KR");
    $("#Total").text("Totalkostnad: "+at+" KR");



$("#cart").click(function(){ //en funktion som lyssnar efter ett tryck på #cart
console.log("test");

  $('html, body').animate({
        scrollTop: $("#Kundvagn").offset().top-60
    }, 2500);



});

$("#about").click(function(){  //en funktion som lyssnar efter ett tryck på #about
console.log("test");

  $('html, body').animate({
        scrollTop: $("#Omoss").offset().top-60
    }, 2500);



});
$("#contact1").click(function(){  //en funktion som lyssnar efter ett tryck på #contact1
console.log("test");

  $('html, body').animate({
        scrollTop: $("#contact").offset().top-60
    }, 2500);



});

$("#products").click(function(){ //en funktion som lyssnar efter ett tryck på #products
console.log("test");

  $('html, body').animate({
        scrollTop: $("#Produkter1").offset().top-60
    }, 2500);



});




$("#knapp10").click(function(){ //en funktion som lyssnar efter ett tryck på #knapp10

  x=x+1;
xt=x*499;
at=xt+yt+zt;
  $("#Hantlar1").text("Hantlar: "+x+" st "+xt+"KR");
   $("#Crosstrainer1").text("Crosstrainer: "+y+" st "+yt+"KR");
    $("#motionscykeln1").text("Motionscykel: "+z+" st "+zt+"KR");
     $("#Total").text("Totalkostnad: "+at+" KR");

 console.log(x);



});


$("#knapp11").click(function(){ //en funktion som lyssnar efter ett tryck på #knapp11

  y=y+1;
yt=y*1999;
at=xt+yt+zt;
  $("#Hantlar1").text("Hantlar: "+x+" st "+xt+"KR");
   $("#Crosstrainer1").text("Crosstrainer: "+y+" st "+yt+"KR");
    $("#motionscykeln1").text("Motionscykel: "+z+" st "+zt+"KR");
     $("#Total").text("Totalkostnad: "+at+" KR");







});


$("#knapp12").click(function(){ //en funktion som lyssnar efter ett tryck på #knapp12

  z=z+1;
zt=z*999;
at=xt+yt+zt;
  $("#Hantlar1").text("Hantlar: "+x+" st "+xt+"KR");
   $("#Crosstrainer1").text("Crosstrainer: "+y+" st "+yt+"KR");
    $("#motionscykeln1").text("Motionscykel: "+z+" st "+zt+"KR");
     $("#Total").text("Totalkostnad: "+at+" KR");

});
