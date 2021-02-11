const ARTISTS_URL = 'http://musicbrainz.org/ws/2/artist?fmt=json&limit=25';
const RELEASES_URL = 'http://musicbrainz.org/ws/2/release?fmt=json&limit=1000';

export const getArtists = (search, page) => {
  return fetch(ARTISTS_URL + `&query=${search}&offset=${(page - 1) * 25}`)
    .then(res => res.json())
    .then(json => {
      const { artists, count } = json;

      const results = artists.map(artist => {
        const { id, name } = artist;

        return { id, name };
      });
    
      const totalPages = Math.ceil(count / 25);

      return { results, totalPages };
    });
};

export const getReleases = (search, page) => {
  return fetch(RELEASES_URL + `&artist=${search}&offset=${(page - 1) * 25}`)
    .then(res => res.json())
    .then(json => {
      const { releases } = json;
      const count = releases.length;

      console.log(count);

      const results = releases.map(release => {
        const { id, title } = release;
        const hasCoverArt = release['cover-art-archive'].front;
        
        let image = 'https://mpng.subpng.com/20190404/vv/kisspng-rick-sanchez-morty-smith-pickle-rick-drawing-porta-svgs-for-geeks-5ca62da8ded916.3363312915543945369128.jpg';

        if(hasCoverArt) {
          image = `http://coverartarchive.org/release/${id}/front`;
        }

        return { id, name: title, image };
      });

      const totalPages = Math.ceil(count / 25);

      return { results, totalPages };
    });
};
