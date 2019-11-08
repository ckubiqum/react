export const fetchCities = () => dispatch => {
    fetch('/cities-route/all')
        .then(res => res.json())
        .then(cities => dispatch({
            type: "GET_CITIES",
            payload: cities
        }))
}


