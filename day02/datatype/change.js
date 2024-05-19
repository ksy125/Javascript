// div : w 100 h 100  bg : 원하는 색
// -, + 를 통해 div가 유동적으로 넓/높이가 변하도록 하는 프로그램 만들기

const div = document.createElement("div");
div.style.width = "100px";
div.style.height = "100px";
div.style.backgroundColor = "skyblue";
const minusBtn = document.createElement("button");
minusBtn.innerText = `-`;
const plustBtn = document.createElement("button");
plustBtn.innerText = `+`;

minusBtn.addEventListener('click', ()=>{
    div.style.width = (parseInt(div.style.width) - 10) + "px";
    div.style.height = (parseInt(div.style.height) - 10) + "px";
});
plustBtn.addEventListener('click', ()=>{
    div.style.width = (parseInt(div.style.width) + 10) + "px";
    div.style.height = (parseInt(div.style.height) + 10) + "px";
});
document.body.appendChild(minusBtn);
document.body.appendChild(plustBtn);
document.body.appendChild(div);