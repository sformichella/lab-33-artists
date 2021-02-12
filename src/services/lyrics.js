const LYRICS_URL = 'https://api.lyrics.ovh/v1/';

export const getLyrics = (artist, title) => {
  return fetch(LYRICS_URL + `/${artist}/${title}`)
    .then(res => {
      if(!res.ok) throw 'Could not get lyrics';

      return res.json();
    });
};
