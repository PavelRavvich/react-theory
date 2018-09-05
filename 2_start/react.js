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
    return (
        <div>
            <div className="card">
                <div className="card-img">
                    <img src={props.car.img} alt={props.car.name}/>
                </div>
                <h3>{props.car.name}</h3>
                <p>{props.car.price}$</p>
            </div>

        </div>
    );
}

class App extends React.Component {

    state = {
        cars: cars
    };

    renderCars() {
        return this.state.cars.map(car => <Car car={car} key={car.name}/>);
    }

    render() {
        return (
            <div className="app">
                <div className="list">
                    {this.renderCars()}
                </div>
            </div>
        );
    }
}

ReactDOM.render(
    <App/>,
    document.getElementById('root')
);