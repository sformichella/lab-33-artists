import React from 'react';

export default function ArtistsSearchForm({ handleSearch, handleSubmit }) {
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="artist-search">Search: </label>
      <input
        id="artist-search"
        type="text"
        onChange={handleSearch}
      />
      <button type="submit">Search</button>
    </form>
  );
}
