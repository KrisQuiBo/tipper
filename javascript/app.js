const formParent = document.querySelector(".formParent");
const tipAmount = document.querySelector(".tipAmount");

let numbGuests = document.getElementById("numbGuests").value;
const calculate = document.querySelector(".calculate");
let body = document.getElementById('body');
let coord = document.getElementById("coord");

localStorage.setItem('name', 'kristen');
let names;

if(names === null) {
  names = [];
}




function calculateAmount(o) {
  const cost = document.getElementById("cost").value;
  // let mealCost = parseInt(cost.value);
  const service = document.getElementById("service").value;
  // let gratuity = service.value;
  let people = document.getElementById("numbGuests").value;
  const perPerson = document.getElementById("perPerson");

  //form validations
  if (cost === "" || service ===null ) {
    alert("please enter amount");
  }

  if (people === "" || people <=1) {
    people = 1;
    perPerson.style.display = "none";
  } else {
    perPerson.style.display = "block";
  }

  let amount = ((cost * service)/people);
   amount = Math.round(amount * 100) / 100;
   amount = amount.toFixed(2);

tipAmount.innerHTML = amount;
console.log(o.clientY);
}


let gratuity;
service.onchange = function() {
gratuity = service.value;
return gratuity;
   console.log(gratuity);
}

calculate.addEventListener('click', calculateAmount);
document.getElementById("perPerson").style.display = "none";
