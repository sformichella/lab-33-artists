import React from 'react';
import PropTypes from 'prop-types';

export default function ArtistListItem({ name }) {
  return <>{name}</>;
}

ArtistListItem.propTypes = {
  name: PropTypes.string.isRequired
};
