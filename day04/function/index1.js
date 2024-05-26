// 화살표 함수[arrow function]
// ()=>{}

const plus100 = (x)=>{
    return x + 100;
};
plus100(200) // 300

// output의 로직이 간단하면(2줄 이상은 안됨) 
// 괄호, return, ; 생략가능
// const plus100_ = (x) => x + 100;


// 2. 원소 3번 째 것 돌려주기
const getThird = (x)=>{
    return x[2];
};
getThird(["a", "b", "c"]);

// 생략
// const getThird = (x)=> x[2];


// 3. 소문자화 시키고 😎 붙히기
const lowerEmoji = (x)=>{
    return x.toLowerCase() + "😎";
};
lowerEmoji("APPLE");

// const lowerEmoji = (x)=> x.toLowerCase() + "😎";