export const fetchCoffeeStores = async (latLong, query, limit ) => {
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: process.env.NEXT_PUBLIC_FOURSQUARE_APIKEY
        }
    };

    const response = await fetch(`https://api.foursquare.com/v3/places/search?query=${query}&ll=${latLong}&limit=${limit}`, options)
    const data = await response.json();
    return data.results
}