import PropTypes from 'prop-types';
import React from 'react';

const LocationMenuItem = ({location}) => (
  <div>
    <span>{location.postcode}</span> <span>{location.placeName}</span>
  </div>
);

LocationMenuItem.propTypes = {
  location: PropTypes.shape({
    adminName1: PropTypes.string.isRequired,
    placeName: PropTypes.string.isRequired,
    postcode: PropTypes.string.isRequired,
  }).isRequired,
};

export default LocationMenuItem;
