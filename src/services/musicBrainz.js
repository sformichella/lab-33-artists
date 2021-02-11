const API_URL = 'http://musicbrainz.org/ws/2/artist?fmt=json&limit=25';

export const getArtists = search => {
  return fetch(API_URL + `&query=${search}`)
    .then(res => res.json())
    .then(({ artists }) => artists.map(artist => {
      const { id, name } = artist;

      return { id, name };
    }));
};
