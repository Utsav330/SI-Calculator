         let Principal;
let Rate;
let Years;
const submit = document.getElementById("mySubmit");
let SI;
 let h2 = document.getElementById("h2");
 let h22 =  document.getElementById("h22");


submit.onclick = function(){
    Rate = document.getElementById("Rate").value;
    Principal = document.getElementById("Principal").value;
    Years = document.getElementById("Years").value;
if(Principal ==="" && Rate === "" && Years === ""){
    h2.textContent = "Please fill out all the fields!";
    h22.textContent = "";
}
else if(Principal === "" && Rate === ""){
  h2.textContent = `You should also enter Principal and Rate!`;
  h22.textContent = "";
}
else if(Rate === "" && Years === ""){
  h2.textContent = `You should also enter Rate and Year!`;
  h22.textContent = "";
}
else if(Principal === "" && Years === ""){
  h2.textContent = `You should also enter Principal and Years!`;
  h22.textContent = "";
}

 else  if( Principal === "" ){
    h2.textContent = `You should enter Principal!`;
    h22.textContent = "";
  }
  else if( Rate===""){
    h2.textContent = "You should enter Rate!";
    h22.textContent = "";
  }
  else if( Years === ""){
    h2.textContent = "You should enter Year!";
    h22.textContent = "";
  }
  else{
    Rate = Number(Rate);
    Principal = Number(Principal);
    Years = Number(Years);

  SI = (Principal*Rate*Years)/100;
  Total = Principal + SI;
  if(Rate > 100){
    h2.textContent = `Rate is only up to 100%`;
  h22.textContent = ``;
  }

  else if(0 > Rate && 0 > Years && 0 > Principal){
    h2.textContent = `Your all the numbers should be in positive`;
    h22.textContent = "";
}
else if( 0 > Rate){
  h2.textContent = `Rate should be in positive`;
   h22.textContent = "";
}
else if( 0 > Principal){
  h2.textContent = `Principal should be in positive`;
   h22.textContent = "";
}
else if( 0 > Years){
  h2.textContent = `Years should be in positive`;
   h22.textContent = "";
}
else if(Principal , 0 && Rate < 0){
  h2.textContent = `You should enter positive Principal and Rate!`;
  h22.textContent = "";
}
else if(Rate < 0 && Years < 0){
  h2.textContent = `You should enter positive Rate and Year!`;
  h22.textContent = "";
}
else if(Principal < 0 && Years < 0){
  h2.textContent = `You should enter positive Principal and Years!`;
  h22.textContent = "";
}

else   if( 0 > Principal){
    h2.textContent = `Your Principal should be in positive`;
    h22.textContent = "";
}

 else if( 0 > Rate){
  h2.textContent = `Your Rate should be in positive`;
  h22.textContent = "";
}
 else if( 0 > Years){
  h2.textContent = `Your Year should be in positive`;
  h22.textContent = "";
}
else{
h2.textContent = `Your SI is RS ${SI}`
   h22.textContent = `Your Total Amount is RS: ${Total}`
}
}

}

