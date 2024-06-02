// web - 데이터 가져오기, 지도 확인, 시간 초 재기, ...
// 동기 프로그래밍 코드 <-> 비동기 프로그래밍 코드

// 1. settimeout, setInterval
// setTimeout(() => {
//     console.log("하이루");
// }, 1000);
// setInterval(() => {
//     console.log("큐브");
// }, 1000);


// 2. 2024 06 02 15:23:--
setInterval(() => {
    const date = new Date();
    const dateTag = document.querySelector(".date");
    dateTag.innerText = date.toLocaleString();
}, 1000);
