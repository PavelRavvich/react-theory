const e  = React.createElement;


const cars = [
    {
        name: 'BMW M2 Couple',
        price: '20000',
        img: 'http://cofx.ru/cars/2/bmw_42/2016_BMW_M2_Coupe/BMW_M2_Coupe_2016-08.jpg'
    },
    {
        name: 'Mercedes',
        price: '40000',
        img: 'http://www.avtogide.ru/wp-content/uploads/2017/08/bmw-m2.jpg'
    },
    {
        name: 'Roles Royce',
        price: '32000',
        img: 'https://i.pinimg.com/originals/ff/6a/76/ff6a76338b5144bd63dc8300916582a6.jpg'
    },
    {
        name: 'Lada',
        price: '1000',
        img: 'http://bigbucks.com.ua/wp-content/uploads/2018/03/bmw-m2-coupe-edition-black-shadow.jpg'
    }
];


function Car(props) {
    return e('div', {className: 'card'}, [
        e('div', {className: 'card-img', key: 'div'}, e('img', {src: props.car.img,  alt: props.car.name})),
        e('h3', {key: 'h3'}, props.car.name),
        e('p', {key: 'p'}, props.car.price)
    ]);
}

class App extends React.Component {

    state = {
        cars: cars
    };

    renderCars() {
        return this.state.cars.map(car => {
            return e(Car, {car: car, key: car.name + Math.random()});
        });
    }

    render() {
        return e(
            'div', {className: 'app'},
            e(
                'div', {className: 'list'},
                this.renderCars()
            )
        );
    }
}

ReactDOM.render(
    e(App),
    document.getElementById('root')
);