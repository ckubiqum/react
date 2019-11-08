import React from 'react';
import { connect } from 'react-redux';
import { fetchItineraries } from './store/actions/itineraryAction';
import { Link } from 'react-router-dom';


class Itineraries extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            itineraries: [],

        };
    }

    componentWillReceiveProps(newProps) {
        console.log("old: ", this.props)
        console.log("new: ", newProps)
        this.setState({
            itineraries: newProps.itineraries
        })
    }

    componentDidMount() {
        this.props.fetchItineraries(this.props.match.params.cityId);
    }

    render() {
        console.log(this.props.itineraries);

        const { error, itineraries } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (itineraries.length === 0) {
            return <div>Loading...</div>;
        } else {
            return (

                <div className="itinerary-list">

                    <h1> All itineraries </h1>


                    {itineraries.map(itinerary => (
                        <Link to={"/activities/" + itinerary._id}>
                            <p key={itinerary._id}>
                                {itinerary.name} - {itinerary.cityName}
                            </p>
                        </Link>))}
                </div>
            );
        }
    }
}
const mapStateToProps = state => ({
    itineraries: state.itineraries.itineraries
});

export default connect(mapStateToProps, { fetchItineraries })(Itineraries)