import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import ArtistList from '../../ArtistList/ArtistList';
import ArtistsSearchForm from '../../ArtistsSearchForm/ArtistsSearchForm';
import Loading from '../../Loading/Loading';
import { getArtists } from '../../../services/musicBrainz';

export default function ArtistsContainer() {
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('miley');
  const [pageNum, setPageNum] = useState(1);

  const [artists, setArtists] = useState([]);

  const handleSearch = ({ target }) => {
    setSearchTerm(target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    setLoading(true);

    getArtists(searchTerm, pageNum)
      .then(artists => {
        setArtists(artists);
        setLoading(false);
      });
  };


  // const pageUp = () => {
  //   setPage(page + 1);
  // };

  // const pageDown = () => {
  //   setPage(page - 1);
  // };

  

  return (
    <>
      <ArtistsSearchForm
        searchTerm={searchTerm}
        handleSearch={handleSearch}
        handleSubmit={handleSubmit}
      />
      {
        loading
          ? <Loading />
          : <ArtistList
            artists={artists}
          />
      }
    </>
  );
}
