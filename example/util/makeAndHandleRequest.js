import fetch from 'isomorphic-fetch';

// Polyfill Promises for IE and older browsers.
require('es6-promise').polyfill();

const SEARCH_URI = 'http://localhost/location/search';

export default function makeAndHandleRequest(query, page=1) {
  return fetch(`${SEARCH_URI}?q=${query}&page=${page}&size=50`)
    .then((resp) => resp.json())
    .then(({content, totalElements}) => {
      const options = content.map((i) => ({
        adminName1: i.adminName1,
        adminName2: i.adminName2,
        placeName: i.placeName,
        postcode: i.postcode,
      }));
      return {options, totalElements};
    });
}
