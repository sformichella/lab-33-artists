import React from 'react';
import ArtistList from '../../ArtistList/ArtistList';
import ArtistsSearchForm from '../../ArtistsSearchForm/ArtistsSearchForm';
import Loading from '../../Loading/Loading';
import { useSearch } from '../../../state/search';
import Pagination from '../../Pagination/Pagination';
import { getArtists } from '../../../services/musicBrainz';

export default function ArtistsContainer() {
  const {
    searchTerm,
    handleSearch,
    handleSubmit, 
    results: artists,
    loading,
    totalPages,
    page,
    pageDown,
    pageUp
  } = useSearch(getArtists);

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
