const API_URL = 'http://musicbrainz.org/ws/2/artist?fmt=json&limit=500';

export const getArtists = (search, offset = 0) => {
  return fetch(API_URL + `&query=${search}` + `&offset=${offset}`)
    .then(res => res.json())
    .then(({ artists }) => artists.map(artist => {
      const { id, name } = artist;

      return { id, name };
    }));
};
