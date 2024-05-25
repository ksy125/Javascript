// // 사과 버튼
// // 오렌지 버튼
// // 파인애플 버튼
// // ... html에 만들어주고
// // 누르면 "--가 선택되었습니다" 라고 출력되도록 하기

// const fruits = ["사과", "오렌지", "파인애플", "키위", "망고", "아보카도"];
// fruits.forEach((v)=>{
//     const btn = document.createElement("button");
//     btn.innerText = v;

//     btn.addEventListener('click', ()=>{
//         window.alert(`${v}과일이 클릭되었습니다.`);
//     });
//     document.body.appendChild(btn);
// });


// 각각의 버튼을 만들어서 +- 카운트 만들기
const coffee = ["아메리카노 3000", "라떼 4000", "바닐라 5000"]

coffee.forEach((v)=>{
    const btn = document.createElement("button");
    btn.innerText = v;

    btn.addEventListener('click', ()=>{
        const total = document.querySelector(".total");
        const price = Number(v.split(" ")[1]);

        total.innerText = Number(total.innerText) + price;
    });
    document.body.appendChild(btn);
});