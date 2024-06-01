import { data } from "./data";

// 1. timezone이 europe인 데이터 중에서
// -> phone, fullname, ipAddress
const one = data.filter(({timeZone})=> timeZone.includes("Europe")).map(({phone, fullName, ipAddress}) => { ({phone, fullName, ipAddress})});
console.log(one);


// 2. id가 짝수인 데이터 중에서
// timezone[대륙]이랑 phone[-빼고] money[$를 빼고]를 가져오기
const two = data.filter(({id}) => !(id % 2))
.map(({timeZone, phone, money}) => { 
        return {timeZone:timeZone.split("/")[0], 
        phone: phone.replaceAll("-",""), 
        money:money.replace("$","")
        };
    });
console.log(two);


// 3. America or Asia 데이터 중에서
// ipAddress[.을 지우고] fullName 앞이름[First name] creditcard 변경 후 가져오기
const three = data.filter(({timeZone})=> 
        timeZone.includes("America") || timeZone.includes("Asia"))
        .map(({ipAddress, fullName, creditCardType:creditcard }) => {
        return {
        ipAddress: ipAddress.replaceAll(".",""),
        fullName: fullName.split(" ")[0],
        creditcard
    };
});
console.log(three);


// 4. 달러가 25000~50000 사이 데이터와 timeZone이 africa인 데이터 중에서 timeZone[수도만 가져오기] fullName 뒤이름[Family name] 가져오기
const four = data.filter(({money, timeZone}) => {
    const numberMoney = Number(money.replace("$",""));
    const isValidMoney = 25000 <= numberMoney && numberMoney <= 50000;
    const isValidTimezone = timeZone.includes("Africa");
    return isValidMoney && isValidTimezone;
})
.map(({timeZone,fullName}) => ({
    timeZone: timeZone.split("/")[1],
    fullName: fullName.split("/")[1]
}));
console.log(four);


// 5. ipAddress [180.101.53.217] 뒷 자리 세 개의 수의 합이 15인 이하인 데이터 중에서 timeZone, fullName, money 가져오기
// "180.101.53.217"
const five = data.filter(({ipAddress}) => {
    const ipArr = [...ipAddress];
    const lastIndex = ipArr.findLastIndex((v) => v == ".");
    const sum = ipArr.splice(lastIndex+1, ipArr.length)
        .map((v) => Number(v))
        .reduce((a,c) => a + c);
    return sum > 15;
}).map(({timeZone, fullName, money}) => ({timeZone, fullName, money}));
console.log(five);