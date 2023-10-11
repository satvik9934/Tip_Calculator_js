let billrate = document.querySelector("#billrate");
let button = document.querySelector("#btn");
let people = document.querySelector("#peoplenum");
let percentage = document.querySelector("#rate");
let calc = document.getElementById("calc");
let tipamount = document.getElementById("tipamount");

button.addEventListener('click', ()=>{
      let currency= document.querySelector("#select1");
      let ans= calculateamount(billrate.value, people.value, percentage.value);
         console.log(ans);
      if (isNaN(ans)) {
        calc.innerText = "Please Fill Required Field";
      } else {
        calc.innerText = currency.value + " " + ans + "  Per person";
      }
});

function calculateamount(amount, noOfPeople, percentage) {
    let totalTip = (amount * percentage) / 100;
    return totalTip / noOfPeople;
  }
