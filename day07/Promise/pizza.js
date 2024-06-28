// 피자 만들기
// 1. 도우 준비
const prepareDough = () => {
    return new Promise((success) => {
        setTimeout(() => {
            console.log("도우 준비 완료");
            success('🥖');
        }, 500);
    });
};
// 2. 토마토 소스 추가
const addSauce = (dough) => {
    return new Promise((success) => {
        setTimeout(() => {
            console.log("토마토소스 뿌리기 완료");
            success(`${dough} + 🍅`);
        }, 1000);
    });
};
// 3. 토핑 추가
const addTopping = (doughWithSauce) => {
    return new Promise((success) => {
        setTimeout(() => {
            console.log("피자 토핑 뿌리기 완료");
            success(`${doughWithSauce} + 🧀`);
        }, 1000);
    });
};
// 4. 피자 굽기
const bakePizza = (doughWithSauceAndTopping) => {
    return new Promise((success) => {
        setTimeout(() => {
            console.log("피자 굽기 완료");
            success(`${doughWithSauceAndTopping} => 🍕`)
        }, 500);
    });
};
// 5. 피자 먹기
prepareDough()
.then((v) => {
    console.log(v);
    return addSauce(v);
}).then((v) => {
    console.log(v);
    return addTopping(v);
}).then((v) => {
    console.log(v);
    return bakePizza(v);
}).then((v) => {
    console.log(`${v} + 피자 와구와구`);
});