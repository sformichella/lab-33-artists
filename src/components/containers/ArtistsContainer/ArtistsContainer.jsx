import React, { useState, useEffect } from 'react';
import ArtistList from '../../ArtistList/ArtistList';
import ArtistsSearchForm from '../../ArtistsSearchForm/ArtistsSearchForm';
import Loading from '../../Loading/Loading';
import { getArtists } from '../../../services/musicBrainz';
import Pagination from '../../Pagination/Pagination';

export default function ArtistsContainer() {
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('miley');
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const [artists, setArtists] = useState([]);

  const handleSearch = ({ target }) => {
    setSearchTerm(target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    setLoading(true);
    setPage(1);

    getArtists(searchTerm, 1)
      .then(res => {
        setArtists(res.artists);
        setTotalPages(res.totalPages);
        setLoading(false);
      });
  };

  const pageUp = () => {
    setPage(page + 1);
  };

  const pageDown = () => {
    setPage(page - 1);
  };

  useEffect(() => {
    setLoading(true);

    getArtists(searchTerm, page)
      .then(res => {
        setArtists(res.artists);
        setTotalPages(res.totalPages);
        setLoading(false);
      });
  }, [page]);

  return (
    <>
      <ArtistsSearchForm
        searchTerm={searchTerm}
        handleSearch={handleSearch}
        handleSubmit={handleSubmit}
      />
      <Pagination
        pageUp={pageUp}
        pageDown={pageDown}
        page={page}
        totalPages={totalPages}
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
