import React from 'react';
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
import ArtistListItem from '../ArtistListItem/ArtistListItem';
import styles from './ArtistList.css';

export default function ArtistList({ artists, type }) {

  const artistsList = artists.map(artist => {
    const { id, name, image } = artist;

    return (
      <li key={id} className={styles.li}>
        <Link to={`/${type}/${id}`}>
          <ArtistListItem name={name} image={image}/>
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
  artists: PropTypes.array.isRequired,
  type: PropTypes.string.isRequired
};
