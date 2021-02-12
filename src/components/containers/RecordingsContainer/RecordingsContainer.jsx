import React, { useState, useEffect } from 'react';
import ArtistList from '../../ArtistList/ArtistList';
import Loading from '../../Loading/Loading';
import { useParams } from 'react-router-dom';
import { getRecordings } from '../../../services/musicBrainz';

export default function RecordingsContainer() {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);

    getRecordings(id)
      .then(res => {
        setResults(res.results);
        setLoading(false);
      });
  }, []);

  return (
    <>
      {
        loading
          ? <Loading />
          : <ArtistList
            artists={results}
            type="recording"
          />
      }
    </>
  );
}
