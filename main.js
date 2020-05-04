
var obj =[{
  icao:"LYBE",
  city:"Belgrade",
  country:"Serbia"
  }
,
 {
   icao:"LOWW",
   city:"Vienna",
   country:"Austria"
 }] ;

 function getInputValue(){
   var icao = document.getElementById('OriginICAO').value;
   for (var i = 0; i < obj.length; i++) {
     if (icao === obj[i].icao) {
       document.getElementById('origin').innerHTML = obj[i].city +' '+ obj[i].country;
     }
   }
 }
 function getInputValueDest(){
   var icaoDest = document.getElementById('DestinationICAO').value;
   for (var i = 0; i < obj.length; i++) {
     if (icaoDest === obj[i].icao) {
       document.getElementById('destination').innerHTML = obj[i].city +' '+ obj[i].country;
     }
   }
 }
