// array, element, obj - 중요!! obj

// obj = {key 값 : value 값};

const book = {
    title: "자바스크립트는 누가 만들었냐",
    price: 24000,
    author: ["전수효", "홍길동", "김철수"],
    publishedYear: {
        year: 2024,
        month: 5,
        day: 31
    }
};

const exampleBook = {
    btn: ["소득공제"],
    title: "자바스크립트는 왜 그 모양일까?",
    subTitle: "더글러스 크락포드가 알려주는 자바스크립트를 안전하게 사용하는 법",
    author: {
        real: "더글러스 크락포드 저", 
        editor: "박수현 역"},
    publishedCompany: "인사이트(insight)",
    publishedDate: {
        year: 2020,
        month: 5,
        day: 25
    },
    rate: 6,
    reviews: 1,
    saleIndex: 288
};
// 데이터 가져오기
// 1. dot 연산자
console.log(exampleBook.title);
console.log(exampleBook.author.editor); // editor 보기

// 2. bracket 연산자
console.log(exampleBook["title"]);
console.log(exampleBook["author"]["editor"]);

// 데이터 추가
exampleBook.isBestSeller = true;

// 데이터 삭제
delete exampleBook.subTitle;

// 데이터 존재 유무
"title" in exampleBook; // true

exampleBook.keys() // keys 값들만 돌려주기
exampleBook.values() // values 값들만 돌려주기