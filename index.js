function scuberGreetingForFeet(num){
  let result
  if (num <= 400){
  result = "This one is on me!";
   }

  else if (401<= num && num < 2000){
  result = "That will be twenty bucks.";
  }
  else if (2000 <= num && num < 2500){
    result = "I will gladly take your thirty bucks."
   
  }
  else if (num > 2500) {
    result = "No can do."
  }
   
  return result

}

scuberGreetingForFeet(200)

function ternaryCheckCity(city){
  let message
  city === "NYC" ? message = "Ok, sounds good." : message = "No go.";
return message
}
// what does italicized colon mean? 
ternaryCheckCity(NYC)

function switchOnCharmFromTip(tip){
switch (tip) {
  case "generous" :
    return "Thank you so much.";
  case "not as generous" :
    return "Thank you.";
  default :
  return "Bye."

}

  
}