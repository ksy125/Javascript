// 1. 두 수를 따로 각각 입력받고, 
// 합, 차, 곱을 html에 h2태그로 3개 각각 나타내기, 폰트 색은 하늘색
// const firstNum = Number(prompt("첫 번째 수 입력"));
// const secondNum = Number(prompt("두 번째 수 입력"));
// const h2Sum = document.createElement('h2');
// const h2diff = document.createElement('h2');
// const h2multi = document.createElement('h2');
// h2Sum.style.color = "skyblue";
// h2diff.style.color = "skyblue";
// h2multi.style.color = "skyblue";
// h2Sum.innerText = `합 : ${firstNum + secondNum}`;
// h2diff.innerText = `차 : ${firstNum - secondNum}`;
// h2multi.innerText = `곱 : ${firstNum * secondNum}`;
// document.body.appendChild(h2Sum);
// document.body.appendChild(h2diff);
// document.body.appendChild(h2multi);


// 2. 밑변과 높이를 각각 입력받고, 정삼각형의 넓이를
// html에 div 태그로 나타내기, 폰트 사이즈는 20px, 폰트 색은 초록색
// const base = Number(prompt("밑변 입력"));
// const height = Number(prompt("높이 입력"));
// const widthTriangle = document.createElement("div");
// widthTriangle.innerText = `넓이 : ${(base*height)/2}`;
// document.body.appendChild(widthTriangle);

// 3. - 0 + 형태의 Counter 만들기
// const minusBtn = document.createElement("button");
// const num = document.createElement("span");
// const plusBtn = document.createElement("button");
// minusBtn.innerText = `-`;
// num.innerText = `0`;
// plusBtn.innerText = `+`;
// minusBtn.addEventListener('click', ()=>{
//     num.innerText = Number(num.innerText) - 1
// });
// plusBtn.addEventListener('click', ()=>{
//     num.innerText = Number(num.innerText) + 1
// });
// document.body.appendChild(minusBtn);
// document.body.appendChild(num);
// document.body.appendChild(plusBtn);