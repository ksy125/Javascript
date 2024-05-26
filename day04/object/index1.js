const menu = [
    {
        coffeeName:'americano',
        coffeePrice: 2000,
        shot: 2,
        coffeeBean: 'Arabica'
    },
    {
        coffeeName:'latte',
        coffeePrice: 2500,
        shot: 2,
        coffeeBean: 'Arabica'
    },
    {
        coffeeName:'mocha',
        coffeePrice: 3500,
        shot: 2,
        coffeeBean: 'Liberica'
    }
];

// Quiz
// 1. 가격이 3000원 이하만 필터링하기
const a = menu.filter((v) => v.coffeePrice <= 3000);
console.log(a);


// 2. 커피이름을 대문자화, +1000원 하기
    // 내가 해본 풀이
    //const b = menu.map((v)=> (v.coffeeName.toUpperCase()) 
    //                          + (v.coffeePrice + 1000));
    // 강사님 풀이
    const b = menu.map((v)=> {
        v.coffeeName.toUpperCase();
        v.coffeePrice + 1000;
        return v;
    });
    console.log(b);

// 3. 이름과 샷만 남기기
    const c = menu.map((v)=> ({
        coffeeName: v.coffeeName,
        shot: v.shot
    }));
    console.log(c);