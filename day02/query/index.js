// //query : 질문
// //querySelector : '선택할 것은 무엇?'같은 느낌?
// const a = document.querySelector(".box");
// console.log(a);
// //const b = document.getElementsByClassName("box");
// // querySelector를 쓰는 게 더 좋다


// - 0 +
// const minusBtn = document.querySelector(".minus");
// const plusBtn = document.querySelector(".plus");
// const count = document.querySelector(".num");

// minusBtn.addEventListener('click', ()=>{
//     // count.innerText = Number(count.innerText) - 1
//     const number = Number(count.innerText) - 1;
//     count.innerText = number === -1 ? 0 : number
// });
// plusBtn.addEventListener('click', ()=>{
//     count.innerText = Number(count.innerText) + 1;
// });
// 다른 방법
// minusBtn.addEventListener('click', ()=>{
//     const count = document.querySelector(".num");
//     const number = Number(count.innerText) - 1;
//     count.innerText = number === -1 ? 0 : number
// });


// const plusBtn = document.querySelector(".plus");

const xMark = document.querySelector(".xMark");
const bar = document.querySelector(".bar");
xMark.style.display = "none";

xMark.addEventListener('click', ()=>{
    bar.style.display = "block";
    xMark.style.display = "none";
});

bar.addEventListener('click', ()=>{
    xMark.style.display = "block";
    bar.style.display = "none";
});