import React from 'react';
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
import ArtistListItem from '../ArtistListItem/ArtistListItem';
import styles from './ArtistList.css';
import { useApp } from '../../state/appContext';

export default function ArtistList({ artists, type }) {
  const { setArtistName, setRecording } = useApp();

  const onClick = name => {
    if(type === 'artist') {
      setArtistName(name);
    }

    if(type === 'recording') {
      setRecording(name);
    }
  };

  const artistsList = artists.map(artist => {
    const { id, name, image } = artist;

    return (
      <li key={id} className={styles.li}>
        <Link to={`/${type}/${id}`} onClick={() => onClick(name)}>
          <ArtistListItem name={name} image={image}/>
        </Link>
      </li>
    );
  });

  return (
    <ul data-testid="list">
      { artistsList }
    </ul>
  );
}

ArtistList.propTypes = {
  artists: PropTypes.array.isRequired,
  type: PropTypes.string.isRequired
};
