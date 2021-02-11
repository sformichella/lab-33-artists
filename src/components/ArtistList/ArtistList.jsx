import React from 'react';
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
import ArtistListItem from '../ArtistListItem/ArtistListItem';

export default function ArtistList({ artists }) {

  const artistsList = artists.map(artist => {
    const { id, name } = artist;

    return (
      <li key={id}>
        <Link to={`/artist/${id}`}>
          <ArtistListItem name={name}/>
        </Link>
      </li>
    );
  });

  return (
    <ul>
      { artistsList }
    </ul>
  );
}

ArtistList.propTypes = {
  artists: PropTypes.array.isRequired
};
