const arr = [1, 3, 5, 7, 9];
const fruits = ["apple", "banana", "orange", "kiwi", "tomato", "grape", "strawberry"];
const alpha = ["a", "b", "c", "d", "e", "f", "g", "h"]

// forEach, every, some

// map(바꾸기)
// [1, 3, 5, 7, 9] -> [10, 30, 50, 70, 90]
const a1 = arr.map((v) => v * 10);
console.log(a1);

arr.map((v,i)=>{}); // i : 배열의 순서 (몇 번쨰 수인지..)

// Quiz 풀기(map)

    // a2 : 각 수의 수만큼 제곱
    const a2 = arr.map((v) => v ** v);
    console.log(a2);

    // a3 : 6보다 작으면 10 더하고, 아니면 10 곱해주기
    const a3 = arr.map((v) => (v < 6 ? v + 10 : v * 10));
    console.log(a3);

    // 홀수 3배, 짝수 2배
    const a4 = arr.map((v,i) => (i % 2 == 1 ? v * 3 : v * 2));

    // 알파벳 a가 포함되면 대문자화, 아니면 단어의 길이로 바꾸기
    const a5 = fruits.map((v) => (v.includes("a") ? v.toUpperCase() : v.length));
    console.log(a5);



// filter
const b1 = arr.filter((v) => v > 5); // [7, 9]

// Quiz 풀기(filter)

    // 짝수 번째만 남기기
    const b2 = arr.filter((v,i) => i % 2 == 0);
    // 또는 const b2 = arr.filter((V,i) => !(i % 2));

    // 과일에서 6글자 이상인 애들만 걸러주고, 대문자화 시키기
    const b3 = fruits.filter((v) => v.length >= 6).map((v) => v.toUpperCase());

    // 과일에서 6글자만 걸러주고, 모든 요소들이 a 또는 o를 포함하는지?
    const b4 = fruits.filter((v) => v.length == 6).every((v) => v.includes("a") || v.includes("o"));

    // alpha에서 6글자만 거르고, 모든 요소에서 alpha의 일부가 포함되는지???
    const b5 = alpha.filter((v) => v.length == 6).every((v) => alpha.some((x) => v.includes(x)));



// String(), Number(), Boolean()

// const c = []; == const c = Array();
const c = Array(10);  // 10칸의 배열이 생김
const c1 = Array(10).fill(0); // [0 0 0 0 0 0 0 0 0 0]

    // 0부터 9까지 배열에 넣기
    const c2 = Array(10).fill(0).map((v,i) => i);

    // 0부터 100까지 홀수만 넣기
    const c3 = Array(101)
        .fill(0)
        .map((v,i)=>i)
        .filter((v)=> v%2);



// str -> array
// 첫 번째 방법 : split
const d = "americano".split("");
// 두 번째 방법 : Array.from
const d1 = Array.from("americano"); // ""로부터 Array화 시켜줌
// 세 번째 방법 : ...""
const d2 = [..."americano"];

    // Quiz
    // 아메리카노에서 모음을 뺀 배열 만들기
    const d3 = [..."americano"].filter((v)=> v != "a");

// array -> str
// 첫 번째 방법 : join
const e = ["coffee", "cookie"].join(""); // coffeecookie
// 두 번째 방법 : toString 
// (이 방법은 중간에 쉼표가 사라지지 않아 잘 쓰지 않음)
const e1 = ["coffee", "cookie"].toString(); // coffee,cookie

    // Quiz
    // str <-> array 안에서 대부분 해결됨
    // "cccCCC" -> "CCCccc"
    const e2 = [..."cccCCC"].map((v)=> (v == v.toUpperCase() ? v.toLocaleLowerCase() : v.toUpperCase())).join("");

    // 함수로 바꿈?
    const change = (word) => 
        [...word]
        .map((v)=> (v == v.toUpperCase() ? v.toLocaleLowerCase() : v.toUpperCase()))
        .join("");

    // "abCdEfghI" -> "ABcDeFGHij"
    const e3 = [..."abCdEfghI"]
        .map((v,i) => (v == v.toUpperCase() ? v.toLowerCase() : v.toUpperCase()))
        .join("");

    // n   k  result
    // 10  3  [3, 6, 9]
    // 15  5  [5, 10, 15]
    // 12  4  [4, 8, 12]

    // 풀이 방법은 아래와 같지만, 축약하면 makeArr과 같이 됨
    // const e4 = Array(10).fill(0).map((v,i)=> i).filter((v)=> v % 3 == 0);
    const makeArr = (n,k) => Array(n)
                            .fill(0)
                            .map((v,i) => i + 1)
                            .filter((v)=> v % k == 0);


// reduce
// acc : 누적되는 값, 최종 출력 값
// curr : 현재 돌고 있는 요소
const a = [1,2,3,4,5];
a.reduce((acc, curr) => acc + curr);

    // Quiz (reduce)
    // 1부터 100까지..?
    // Array(100).fill(0).map((v,i)=> i+1).reduce((acc, curr)=> acc + curr); // 5500

    // 과일에서 모음을 뺀 문자를 다 합치기 ex) pplbnnrngkwtmt
    const fruits1 = ["apple", "banana", "orange", "kiwi", "tomato"];

    const result = fruits1
    .map((v)=> [...v].filter((v1)=> ![..."aiueo"].some((v2)=> v2 == v1)).join("")
    )
    .reduce((acc, curr) => acc + curr);

    console.log(result);