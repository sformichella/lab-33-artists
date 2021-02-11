import React from 'react';
import PropTypes from 'prop-types';
import styles from './ArtistListItem.css'

export default function ArtistListItem({ name, image = '' }) {
  return (
    <>
      {name}
      {
        image ? <img src={image} alt={name} className={styles.image}/>
          : <div></div>
      }
    </>
  );
}

ArtistListItem.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string
};
