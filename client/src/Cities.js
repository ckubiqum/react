import React from 'react';
import './Cities.css';

class Cities extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            cities: [],
            result: ""
        };
    }

    componentDidMount() {
        fetch("/cities-route/all")
            .then(res => res.json())
            .then(result => {
                console.log(result);

                this.setState({
                    isLoaded: true,
                    cities: result
                });
            })
            .catch(error => {
                this.setState({
                    isLoaded: true,
                    error
                });
            })
    }

    onChangeHandler = (e) => {
        this.setState({
            result: e.target.value,
        });
        console.log(this.state.cities);
        console.log(e.target.value);
        // let filteredCities = this.state.cities.includes(this.state.result);




    }

    render() {
        let filteredCities = this.state.cities.filter(city => city.city.toUpperCase().includes(this.state.result.toUpperCase()) || city.country.toUpperCase().includes(this.state.result.toUpperCase()));


        const { error, isLoaded, cities } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return (

                <div className="city-list">
                    <div>
                        <p>{this.state.result}</p>
                        <p>Busca una ciudad:</p><input type="text" onChange={this.onChangeHandler} placeholder="Buscar..."></input>
                    </div>
                    <h1> All cities </h1>
                    {console.log(this.state)}

                    {filteredCities.map(city => (
                        <p key={city._id}>
                            {city.city} - {city.country}
                        </p>
                    ))}
                </div>
            );
        }
    }
}
export default Cities