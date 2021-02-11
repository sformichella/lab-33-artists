import React, { useState, useEffect } from 'react';
import ArtistList from '../../ArtistList/ArtistList';
import Loading from '../../Loading/Loading';
import { useParams } from 'react-router-dom';
import Pagination from '../../Pagination/Pagination';
import { getReleases } from '../../../services/musicBrainz';

export default function ReleasesContainer() {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const { id } = useParams();

  const pageUp = () => {
    setPage(page + 1);
  };

  const pageDown = () => {
    setPage(page - 1);
  };

  useEffect(() => {
    setLoading(true);

    getReleases(id, page)
      .then(res => {
        setResults(res.results);
        setTotalPages(res.totalPages);
        setLoading(false);
      });
  }, [page]);

  return (
    <>
      <Pagination
        pageUp={pageUp}
        pageDown={pageDown}
        page={page}
        totalPages={totalPages}
      />
      {
        loading
          ? <Loading />
          : <ArtistList
            artists={results}
          />
      }
    </>
  );
}
