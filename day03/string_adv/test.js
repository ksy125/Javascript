const fruits = ["apple", "banana", "orange", "melon", "kiwi"];

// apple a를 포함 true
// banana a를 포함 true
// ..
// kiwi a를 포함 false
fruits.forEach((v)=>{   // array에만 forEach가 존재
    // console.log(v.toUpperCase());
    console.log(`${v} a를 ${v.includes('a') ? "포함" : "미포함"}`);
});


// 6글자 이상이면 대문자화, 아니면 해당 단어를 두 번 반복한 단어로 표시
// ex) BANANA, appleapple
fruits.forEach((v)=>{
    const isSixOver = v.length >= 6;
    const result = isSixOver ? v.toUpperCase() : v.repeat(2);
    console.log(result);
});


// 자기의 길이만큼 그 단어를 대문자화하여 반복하기
fruits.forEach((v)=>{
    console.log(v.toUpperCase().repeat(v.length));
});