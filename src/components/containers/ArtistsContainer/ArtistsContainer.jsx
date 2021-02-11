import React from 'react';
import ArtistList from '../../ArtistList/ArtistList';
import ArtistsSearchForm from '../../ArtistsSearchForm/ArtistsSearchForm';

export default function ArtistsContainer() {
  return (
    <>
      <ArtistsSearchForm/>
      <ArtistList />
    </>
  );
}
