import React from 'react';
import ArtistList from '../../ArtistList/ArtistList';
import ArtistsSearchForm from '../../ArtistsSearchForm/ArtistsSearchForm';
import Loading from '../../Loading/Loading';
import { useArtists } from '../../../state/artists';
import Pagination from '../../Pagination/Pagination';

export default function ArtistsContainer() {
  const {
    searchTerm,
    handleSearch,
    handleSubmit, 
    artists,
    loading,
    totalPages,
    page,
    pageDown,
    pageUp
  } = useArtists();

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
