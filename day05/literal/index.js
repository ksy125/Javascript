// const h1 = document.createElement("h1");
// const buttonName = "집가기"
// h1.innerHTML = `<button>${buttonName}</button>`;
// document.body.appendChild(h1);


// const friends = ["kim", "lee", "park"];
// console.log(friends.map((v)=> `<li>${v}</li>`));
// const html = `
//     <h1>My Friend</h1>
//     <ul>
//         ${friends.map((v)=>`<li>${v}</li>`).join("")}
//     </ul>`;
// document.body.innerHTML = html;


//1. createElement -> appendChild
//2. innerHTML
//3. insertAdjacentHTML
//const menu = document.querySelector(".menu");

//afterbegin : 첫 번째 자식 앞에 넣기
//beforeend : 마지막 자식 뒤에 넣기
// const friends = ["kim", "lee", "park"];
// console.log(friends.map((v)=> `<li>${v}</li>`));
// const html = `
//     <h1>My Friend</h1>
//     <ul>
//         ${friends.map((v)=>`<li>${v}</li>`).join("")}
//     </ul>`;
// document.body.innerHTML = html;
// menu.insertAdjacentHTML('afterend',
// `<div>
//     <h1>안녕하세요</h1>
//     <h2>오늘 토요일이네요</h2>
//     <span>ㄹㅇㅋㅋ</span>
// </div>`);
//menu.insertAdjacentHTML('afterend', html); // 같은 내용