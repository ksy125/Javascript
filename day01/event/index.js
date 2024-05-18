// Event
// ex) click, keyboard, mousemove, ...

// const button = document.createElement('button');
// button.innerText = "버튼임";

// 이벤트 추가
// addEventListener(이벤트종류, () => { 이벤트 발생 시 로직 });
// button.addEventListener('mouseover', ()=>{
//     // window.alert("ㄹㅇㅋㅋ");
//     console.log("마우스 올라감"); 
//         // (F12에서 확인하기)
// });
// document.body.appendChild(button);


//Q1. div 태그 - width:100px, height:100px, bg:red
//          - 클릭을 하면, bg : blue
// const divTag = document.createElement("div");
// divTag.style.width = "100px";
// divTag.style.height = "100px";
// divTag.style.backgroundColor = "red";

// divTag.addEventListener('click', () => {
//     divTag.style.backgroundColor = "blue";
// });
// document.body.appendChild(divTag);


//Q2. button 태그 만들고, 글은 '파란상자'
// 클릭을 하면, html div w:100, h:100, bg:blue 생김
// const btn = document.createElement("button");
// btn.innerText = "파란상자";

// btn.addEventListener('click', () => {
//     const box = document.createElement("div");
//     box.style.width = "100px";
//     box.style.height = "100px";
//     box.style.margin = "10px";
//     box.style.backgroundColor = "blue";
//     document.body.appendChild(box);
// });
// document.body.appendChild(btn);


//Q3. 버튼을 3가지 만들고, 각각 이름은 고른 색의 이름 넣기
// div: 100px 100px bg: black
// 각각 클릭을 하면, 위의 div 태그의 bg가 고른 이름의 색으로 변경하기
// const green = document.createElement("button");
// const yellow = document.createElement("button");
// const pink = document.createElement("button");
// const div = document.createElement("div");
// green.innerText = "green";
// yellow.innerText = "yellow";
// pink.innerText = "pink";
// div.style.width = "100px";
// div.style.height = "100px";
// div.style.backgroundColor = "black";

// green.addEventListener('click', () => {
//     div.style.backgroundColor = "#55efc4";
// });
// yellow.addEventListener('click', () => {
//     div.style.backgroundColor = "#ffeaa7";
// });
// pink.addEventListener('click', () => {
//     div.style.backgroundColor = "#fab1a0";
// });
// document.body.appendChild(green);
// document.body.appendChild(yellow);
// document.body.appendChild(pink);
// document.body.appendChild(div);


//Q4. div : 100 100 boder:1px solid black bg:white
//button => 내용 : 색깔 추가,
// button's event => prompt로 물어봄. 색깔 헥사코드 입력
// button[#123123]을 가진 색깔이 나타남 div의 bg가 변경됨
// const div = document.createElement("div");
// div.style.width = "100px";
// div.style.height = "100px";
// div.style.border = "1px solid black";
// div.style.backgroundColor = "white";
// const addbtn = document.createElement("button");
// addbtn.innerText = "색깔 추가";
// addbtn.addEventListener('click', () => {
//     const hex = prompt("헥사코드 색깔 입력");
//     const newbtn = document.createElement("button");
//     div.style.backgroundColor = hex;
//     newbtn.innerText = hex;
//     newbtn.style.margin = "1px";

//     // 새로 만들어진 버튼 클릭 시 해당 색이 나타나는 이벤트
//     newbtn.addEventListener('click', ()=> {
//         div.style.backgroundColor = hex;
//     });
//     document.body.appendChild(newbtn);
// });
// document.body.appendChild(div);
// document.body.appendChild(addbtn);
