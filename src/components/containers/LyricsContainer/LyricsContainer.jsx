import React, { useState, useEffect } from 'react';
import Loading from '../../Loading/Loading';
import { useApp } from '../../../state/appContext';
import { getLyrics } from '../../../services/lyrics';

export default function LyricsContainer() {
  const { artistName, recording } = useApp();

  const [lyrics, setLyrics] = useState('');
  const [loading, setLoading] = useState(false);
  
  useEffect(() => {
    setLoading(true);

    getLyrics(artistName, recording)
      .then(({ lyrics }) => {
        setLyrics(lyrics);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      {
        loading ? <Loading />
          : <p>{lyrics}</p>
      }
    </div>
  );
}
