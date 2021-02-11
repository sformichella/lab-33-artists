const API_URL = 'http://musicbrainz.org/ws/2/artist?fmt=json&limit=500';

export const getAllArtists = () => {
  return fetch(API_URL)
    .then(res => res.json())
    .then(({ artists }) => artists.map(artist => {
      const { id, name } = artist;

      return { id, name };
    }));
};
