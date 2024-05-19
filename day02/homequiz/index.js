const americanoSpan = document.querySelector(".americano");
const latteSpan = document.querySelector(".latte");
const vanillaSpan = document.querySelector(".vanila");
const totalSpan = document.querySelector(".total");
const buyReset = document.querySelector(".resetBtn");

buyReset.addEventListener('click', ()=>{
    americanoTotal.innerText = 0;
    latteTotal.innerText = 0;
    vanillaTotal.innerText = 0;
    totalSpan.innerText = 0;
});

const americanoMinusBtn = document.querySelector(".aMinusBtn");
const americanoTotal = document.querySelector(".aTotal");
const americanoPlusBtn = document.querySelector(".aPlusBtn");

const latteMinusBtn = document.querySelector(".lMinusBtn");
const latteTotal = document.querySelector(".lTotal");
const lattePlusBtn = document.querySelector(".lPlusBtn");

const vanillaMinusBtn = document.querySelector(".vMinusBtn");
const vanillaTotal = document.querySelector(".vTotal");
const vanillaPlusBtn = document.querySelector(".vPlusBtn");


americanoMinusBtn.addEventListener("click", () => {
  americanoTotal.innerText = Number(americanoTotal.innerText) - 1;
  totalSpan.innerText = Number(totalSpan.innerText) - 3000;
});
americanoPlusBtn.addEventListener("click", () => {
  americanoTotal.innerText = Number(americanoTotal.innerText) + 1;
  totalSpan.innerText = Number(totalSpan.innerText) + 3000;
});

latteMinusBtn.addEventListener("click", () => {
  latteTotal.innerText = Number(latteTotal.innerText) - 1;
  totalSpan.innerText = Number(totalSpan.innerText) - 3000;
});
lattePlusBtn.addEventListener("click", () => {
  latteTotal.innerText = Number(latteTotal.innerText) + 1;
  totalSpan.innerText = Number(totalSpan.innerText) + 3000;
});

vanillaMinusBtn.addEventListener("click", () => {
  vanillaTotal.innerText = Number(vanillaTotal.innerText) - 1;
  totalSpan.innerText = Number(totalSpan.innerText) - 3500;
});
vanillaPlusBtn.addEventListener("click", () => {
  vanillaTotal.innerText = Number(vanillaTotal.innerText) + 1;
  totalSpan.innerText = Number(totalSpan.innerText) + 3500;
});