// const inputTag = document.querySelector('.inputTag');
// inputTag.addEventListener('input', (e) => {
//     console.log(e.target.value);
// });

// 4~10글자 사이이면 글자 수가 충분합니다[초록]
// 0~3글자 글자가 짧습니다[빨강]
// 11글자 이상이면 글자가 깁니다[빨강]
const infoTag = document.querySelector(".info");

const inputTag = document.querySelector('.inputTag');
inputTag.addEventListener('input', (e) => {
    const { length } = e.target.value;
    const isValidLength = 4 <= length && length <= 10;
    const color = isValidLength ? "green" : "red";
    
    infoTag.style.color = color;
    if(length < 4) {
        infoTag.innerText = '글자가 짧습니다'
    } else if(10 < length) {
        infoTag.innerText = '글자가 깁니다'
    } else {
        infoTag.innerText = '글자가 충분합니다'
    }
});