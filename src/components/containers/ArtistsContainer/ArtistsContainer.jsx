import React, { useState } from 'react';
import ArtistList from '../../ArtistList/ArtistList';
import ArtistsSearchForm from '../../ArtistsSearchForm/ArtistsSearchForm';
import { getArtists } from '../../../services/musicBrainz';

export default function ArtistsContainer() {
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('miley');
  const [artists, setArtists] = useState([]);

  const handleSearch = ({ target }) => {
    setSearchTerm(target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    setLoading(true);

    getArtists(searchTerm)
      .then(artists => {
        setArtists(artists);
        setLoading(false);
      });
  };

  return (
    <>
      <ArtistsSearchForm
        searchTerm={searchTerm}
        handleSearch={handleSearch}
        handleSubmit={handleSubmit}
      />
      {
        loading ? <h1>Loading!</h1>
          : <ArtistList
            artists={artists}
          />
      }
    </>
  );
}
