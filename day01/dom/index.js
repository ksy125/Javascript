//js가 html을 만들기 위한 장소

//h1 태그 만들기
// const h1tag = document.createElement("h1");
// h1tag.innerText = "자바스크립트 수업중";
// document.body.appendChild(h1tag);

// 버튼을 만들고, 안의 내용은 클릭! body에 나타내기
// const btn = document.createElement("button");
// btn.style.backgroundColor = "skyblue";
// btn.style.fontSize = "20px";
// btn.style.padding = "10px";
// btn.innerText = "클릭!";
// document.body.appendChild(btn);

// const a = prompt("점심 뭐먹을거?");
// console.log(a);

//Q1. prompt로 배경색을 물어보고 헥사코드,
// ex) red, #ffefed
// div -> width: 100px, height: 100px, background: red
// const color = prompt("배경색은?");
// const box = document.createElement("div");
// box.style.width = "100px";
// box.style.height = "100px";
// box.style.backgroundColor = color;
// document.body.appendChild(box);

// console.log(color); -> 안 사용해도 나옴..


//Q2. 폰트 색상 물어보고
// 버튼 안에 들어갈 내용 물어보고
// 버튼을 html에 보여주기
// const fontcolor = prompt("폰트 색은 무엇?");
// const text = prompt("버튼 안에 들어갈 내용은?");
// const btn = document.createElement("button");
// btn.style.color = fontcolor;
// btn.innerText = text;
// document.body.appendChild(btn);


//Q3. 높이 물어보기 주의) 100px
// 넓이 물어보기
// 배경색 물어보기
// 안에 들어갈 내용 물어보기
// div 태그로 위의 내용을 고려해서 나타내기
const height = prompt("높이는?");
const width = prompt("넓이는?");
const bgcolor = prompt("배경색은?");
const text = prompt("안의 내용은?")
const box = document.createElement('div');
box.style.height = height;
box.style.width = width;
box.style.backgroundColor = bgcolor;
box.innerText = text;
document.body.appendChild(box);