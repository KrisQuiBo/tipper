const formParent = document.querySelector(".formParent");
const tipAmount = document.querySelector(".tipAmount");
let numbGuests = document.getElementById("numbGuests").value;
const calculate = document.querySelector(".calculate");
let currencyinput = document.querySelector('currencyinput');
const clear = document.getElementById('clear');

calculate.addEventListener('click', calculateAmount);
clear.addEventListener('click', removeResult);
// window.setTimeout(removeResult, 5000);


function calculateAmount(o) {
let cost = document.getElementById("cost").value;
  const service = document.getElementById("service").value;
  let people = document.getElementById("numbGuests").value;

  //form validations
  if (cost === "" || service ===null ) {
    alert("please enter amount");
  }

  if (people === "" || people <=1) {
    people = 1;
  }

  let amount = ((cost * service)/people);
   amount = Math.round(amount * 100) / 100;
   amount = amount.toFixed(2);

   const theTip = document.createElement('p');
   theTip.innerHTML = `$${amount} per person`;
   tipAmount.appendChild(theTip);

   tipAmount.classList.toggle('hide');


   formParent.reset();


}

function removeResult(e) {

  tipAmount.innerHTML = '';
  tipAmount.classList.toggle('hide');
}


let gratuity;
service.onchange = function() {
gratuity = service.value;
return gratuity;
   console.log(gratuity);
}

// document.getElementById("perPerson").style.display = "none";
