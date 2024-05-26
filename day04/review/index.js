// Array
// const arr = [1, 2, 3, 4, 5];
// const fruits = ["apple", "banana", "orange"];
// const double_arr = [
//     ["아메리카노", "헤이즐넛"], 
//     ["딸기스무디", "초코스무디"]];
// //double_arr[0][1]
// arr.forEach((v) => {
//     console.log(v);
// });

// arr.some((v)=> {
//     return v < 5;
// });

// arr.every((v)=> {
//     return v < 5;
// });

// "hello".includes("h");
// "world".repeat(5);

// // if else if else - switch

// const newDiv = document.createElement("div");
// newDiv.appendChild()
// newDiv.classList.toggle("red");


// Mini Quiz

// palette
const colorList = [
    "#1abc9c",
    "#2ecc71",
    "#3498db",
    "#9b59b6",
    "#34495e",
    "#16a085",
    "#27ae60",
    "#2980b9",
    "#8e44ad",
    "#2c3e50"
];

colorList.forEach((v)=>{
    const newDiv = document.createElement("div");
    newDiv.classList.add("box");
    newDiv.style.backgroundColor = v;
    newDiv.addEventListener('click', ()=>{
        window.alert(`${v} 색깔이 클릭되었습니다.`);
    });
    const palette = document.querySelector(".palette");
    palette.appendChild(newDiv);
});