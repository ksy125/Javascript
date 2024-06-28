// fetch
// url을 넣으면 데이터를 돌려주는 함수

// street, streetName, country가 있는 테이블 만들기
const getData = fetch('https://fakerapi.it/api/v1/addresses?_quantity=10');

getData
	.then((v) => v.json()) // v는 Response 타입. 그래서 json화 시켜줘야 함
	.then((v) => v.data)
	.then((v) => 
		v.forEach(({ street, streetName, country }) =>
			bindData(street, streetName, country)
		)
	)
	.catch((v) => console.log("너무 많이 보내지마세용😣")); 

const bindData = (street, streetName, country) => {
    const table = document.querySelector(".table");
    table.insertAdjacentHTML(
        'beforeend', 
        `
        <div class="table__data">
            <div class="street">${street}</div>
            <div class="streetName">${streetName}</div>
            <div class="country">${country}</div>
        </div>
        `
    );
};
