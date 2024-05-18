// 변수 (variable) : 데이터를 기억하는 공간, 닉네임
// const 이름 = 데이터 [기억 한번만]
// let 이름 = 데이터 [기억 여러번]
// var 이름 = 데이터 [!!!절대로 쓰지말기!!!]

// const a = 100;
// a = 200; (X);

// let b = 100;
// b = 200; (O);

// 왜 변수를 써야 하는가?
// 인간 : 연산[뇌] + 기억[뇌]
// 컴퓨터 : 연산[CPU] + 기억[RAM]

// kakao.file[하드디스크]
// RAM[kakao/youtube/game/...] <=> CPU

// 변수 이름 문법
//  1. 예약어[키워드] 안됨! ex) const const
//  2. 특수문자 안됨 <- _(언더바) 빼고
//  3. 띄어쓰기 안됨 ex) const mint choco
//  4. 숫자로 시작 안됨 ex) const 1a(X) a1(O)
//  5. 변수이름 중복 안됨

// 변수 이름 국룰
//  1. 의미있는 단어로 사용 ex) const a(X), const button(X) white_button(O)
//  2. 두 단어 합칠 때 낙타표기법, 뱀표기법 사용
//     - 낙타 : milkCoffee
//     - 뱀 : milk_coffee
//  3. 소문자로 시작하기


//const a = 1; // a는 1
//const b = "사이다"; // b는 사이다


//Q1. 유저에게 내용과 색깔을 두 개 각각 입력받고,
//html에 h1~h3 태그 각각 3개 만들기

// const text = prompt("내용은?");
// const color = prompt("색깔은?");
// const tag1 = document.createElement("h1");
// const tag2 = document.createElement("h2");
// const tag3 = document.createElement("h3");
// tag1.innerText = text;
// tag2.innerText = text;
// tag3.innerText = text;
// tag1.style.color = color;
// tag2.style.color = color;
// tag3.style.color = color;
// document.body.appendChild(tag1);
// document.body.appendChild(tag2);
// document.body.appendChild(tag3);

//Q2. 유저에게 만들고 싶은 태그 물어보고
// 원하는 안의 내용도 물어보고
// 원하는 폰트색깔 만들고.
// html에 만들기

const usertag = prompt("만들고 싶은 태그는?");
const contents = prompt("내용은?");
const fontcolor = prompt("글자색은?");
const box = document.createElement(usertag);
box.innerText = contents;
box.style.color = fontcolor;
document.body.appendChild(box);