const clientId = 'tC_QPIowND2DPy0XpHR8SA';
const secret = 'YdkPSwpBoJ8BNW7avJ3OrjPFat84MdLehg3nlC7vm5xTv3TU5iFc0thmjKdTiFr1';
let accessToken;
let Yelp = {

  getAccessToken() {
    if (accessToken) {
      return new Promise(resolve => resolve(accessToken));
    }
    return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/oauth2/token?grant_type=client_credentials&client_id=${clientId}&client_secret=${secret}`, { method: POST }).then(response => {
      if (response.ok) {
        return response.json();
      }
      throw new Error('Request failed!');
    }, networkError => {
      console.log(networkError.message);
    }).then(jsonResponse => {
      accessToken = jsonResponse.access_token;
    });
  },

  search(term, location, sortBy) {
    return Yelp.getAccessToken().then(() => {

      fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
        headers: { Authorization: `Bearer ${accessToken}` }

      }).then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Request failed!');
      }, networkError => {
        console.log(networkError.message);
      }).then(jsonResponse => {
        if (jsonResponse.businesses) {

          return jsonResponse.businesses.map(business => ({
            id: business.id,
            imageSrc: business.image_url,
            name: business.name,
            address: business.address1,
            city: business.city,
            state: bsiness.state,
            zipCode: business.zip_code,
            category: business.categories,
            rating: business.rating,
            reviewCount: business.review_count
          }));
        }
      });
    });
  }

};

export default Yelp;