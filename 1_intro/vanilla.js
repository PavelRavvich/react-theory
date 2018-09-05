const cars = [
    {
        name:'BMW M2 Couple',
        price: '20000',
        img: 'http://cofx.ru/cars/2/bmw_42/2016_BMW_M2_Coupe/BMW_M2_Coupe_2016-08.jpg'
    },
    {
        name:'Mercedes',
        price: '40000',
        img: 'http://www.avtogide.ru/wp-content/uploads/2017/08/bmw-m2.jpg'
    },
    {
        name:'Roles Royce',
        price: '32000',
        img: 'https://i.pinimg.com/originals/ff/6a/76/ff6a76338b5144bd63dc8300916582a6.jpg'
    },
    {
        name:'Lada',
        price: '1000',
        img: 'http://bigbucks.com.ua/wp-content/uploads/2018/03/bmw-m2-coupe-edition-black-shadow.jpg'
    }
];

function createCard(car) {
    return `    
        <div class="list">
            <div class="card">
                <div class="card-img">
                    <img src="${car.img}" alt="${car.name}">
                </div>
                <h3>${car.name}</h3>
                <p>${car.price}$</p>
            </div>
            
        </div>`;
}

const templates = cars.map(car => createCard(car));
const html = templates.join(' ');

document.querySelector('.list').innerHTML = html;