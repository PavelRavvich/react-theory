const cars = [
    {
        name: 'BMW M2 Couple',
        price: '20000',
        img: 'http://cofx.ru/cars/2/bmw_42/2016_BMW_M2_Coupe/BMW_M2_Coupe_2016-08.jpg',
        marked: false
    },
    {
        name: 'Mercedes',
        price: '40000',
        img: 'http://www.avtogide.ru/wp-content/uploads/2017/08/bmw-m2.jpg',
        marked: false
    },
    {
        name: 'Roles Royce',
        price: '32000',
        img: 'https://i.pinimg.com/originals/ff/6a/76/ff6a76338b5144bd63dc8300916582a6.jpg',
        marked: false
    },
    {
        name: 'Lada',
        price: '1000',
        img: 'http://bigbucks.com.ua/wp-content/uploads/2018/03/bmw-m2-coupe-edition-black-shadow.jpg',
        marked: false
    }
];


function Car(props) {

    const classes = ['card'];

    if (props.car.marked) {
        classes.push('marked')
    }

    return (
        <div>
            <div className={classes.join(' ')} onClick={props.onMark}>
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
        cars: cars,
        visible: true
    };

    handleMarked(name) {
        const cars = this.state.cars.concat();
        const car = cars.find(c => c.name === name);
        car.marked = !car.marked;
        this.setState({cars: cars});
    }

    /**
     * Toggle visibility of all content state var.
     */
    toggleHandler() {
        this.setState({visible: !this.state.visible});
    }

    renderCars() {
        if (!this.state.visible) {
            return null;
        }

        return this.state.cars.map(car => {
            return <Car
                car={car}
                key={car.name}
                onMark={this.handleMarked.bind(this, car.name)}
            />;
        });
    }

    render() {
        return (
            <div className="app">

                <button onClick={() => this.toggleHandler()}>Toggle</button>

                <hr/>

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