import { data } from "./data";

// 1. id가 홀수이면서 성별이 여성인 데이터 중에서
// language, dateTime[월], userName을 가져오기
const one = data.filter(({id, gender}) => 
    (id % 2 && gender == 'Female'))
    .map(({language, dateTime, userName}) => {
        const month = dateTime.split('/')[0];
        return { language, dateTime:month, userName };
});
console.log(one);

// 2. userName이 알파벳 k or z가 들어있고 성별이 남성인 데이터 중에서 dateTime[년도], userName, userNameLength 가져오기
const two = data.filter(
    ({userName, gender}) =>
    (userName.includes("k") || userName.includes("z")) && gender == 'Male')
    .map(({userName, dateTime}) => {
        const year = dateTime.split('/')[2];
        const userNameLength = userName.length;
        return { dateTime: year, userName, userNameLength };
    });
console.log(two);