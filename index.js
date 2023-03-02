//get inputs
const billInput = document.getElementById("bill");
const peopleInput = document.getElementById("people-input");

//get button tips
const tips = document.querySelectorAll(".btn");
const customTip = document.querySelector(".custom");

//get prices
const tipPerPerson = document.querySelector(".amount-price");
const totalPerPerson = document.querySelector(".total-price");

//reset button
const resetBtn = document.querySelector(".reset");

tips.forEach(function (val) {
  val.addEventListener("click", handleClick);
});

let billValue = 0.0;
billInput.addEventListener("input", () => {
  billValue = parseFloat(billInput.value);
  setTipPerPerson();
});

let peopleValue = 1;
peopleInput.addEventListener("input", () => {
  peopleValue = parseFloat(peopleInput.value);
  setTipPerPerson();
});
let tipValue = 0.15;

customTip.addEventListener("input",()=>{
    tipValue = parseFloat(customTip.value / 100)
    tips.forEach(function(val){
        val.classList.remove("active-tip")
    })
    setTipPerPerson();
})

resetBtn.addEventListener("click",resetFunc)

function handleClick(event) {
  tips.forEach(function (val) {
    val.classList.remove("active-tip");
    if (event.target.innerHTML == val.innerHTML) {
      val.classList.add("active-tip");
      tipValue = parseFloat(val.innerHTML) / 100;
    }
  });
  setTipPerPerson();
}

function setTipPerPerson() {
  if (peopleValue > +1) {
    let tipAmount = (billValue * tipValue) / peopleValue;
    let total = billValue / peopleValue + tipAmount;
    tipPerPerson.innerHTML = "$" + tipAmount.toFixed(2);
    totalPerPerson.innerHTML = "$" + total.toFixed(2);
  }
}

function resetFunc(){
    billInput.value = "";
    peopleInput.value="";
    tipPerPerson.innerHTML = "$" + (0.00).toFixed(2);
    totalPerPerson.innerHTML = "$" + (0.00).toFixed(2);
}