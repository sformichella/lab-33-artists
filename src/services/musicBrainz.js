const API_URL = 'http://musicbrainz.org/ws/2/artist?fmt=json&limit=25';

export const getArtists = (search, page) => {
  return fetch(API_URL + `&query=${search}` + `&offset=${(page - 1) * 25}`)
    .then(res => res.json())
    .then(json => {
      let { artists } = json;
      const { count } = json;

      artists = artists.map(artist => {
        const { id, name } = artist;

        return { id, name };
      });
    
      const totalPages = Math.ceil(count / 25);

      return { artists, totalPages };
    });
};
