import { useState, useEffect } from 'react';


export const useArtists = getArtists => {
  const [artists, setArtists] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('miley');
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const handleSearch = ({ target }) => {
    setSearchTerm(target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    setLoading(true);
    setPage(1);

    getArtists(searchTerm, 1)
      .then(res => {
        setArtists(res.results);
        setTotalPages(res.totalPages);
        setLoading(false);
      });
  };

  const pageUp = () => {
    setPage(page + 1);
  };

  const pageDown = () => {
    setPage(page - 1);
  };

  useEffect(() => {
    setLoading(true);

    getArtists(searchTerm, page)
      .then(res => {
        setArtists(res.results);
        setTotalPages(res.totalPages);
        setLoading(false);
      });
  }, [page]);

  return {
    searchTerm,
    handleSearch,
    handleSubmit, 
    artists,
    loading,
    totalPages,
    page,
    pageDown,
    pageUp
  };
};
