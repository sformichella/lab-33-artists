import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import ArtistList from '../../ArtistList/ArtistList';
import ArtistsSearchForm from '../../ArtistsSearchForm/ArtistsSearchForm';
import Loading from '../../Loading/Loading';
import { getArtists } from '../../../services/musicBrainz';

export default function ArtistsContainer() {
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('miley');
  const [artists, setArtists] = useState([]);

  const { search, page } = useParams();

  console.log(search, page);

  const handleSearch = ({ target }) => {
    setSearchTerm(target.value);
  };

  const handleSubmit = e => {
    const history = useHistory();
    history.push(`/${search}/${page}`);
    e.preventDefault();

    setLoading(true);

    getArtists(searchTerm)
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
