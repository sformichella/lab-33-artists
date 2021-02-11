import { useState, useEffect } from 'react';


export const useSearch = getResults => {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const handleSearch = ({ target }) => {
    setSearchTerm(target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    setLoading(true);
    setPage(1);

    getResults(searchTerm, 1)
      .then(res => {
        setResults(res.results);
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
    if(searchTerm) {
      setLoading(true);

      getResults(searchTerm, page)
        .then(res => {
          setResults(res.results);
          setTotalPages(res.totalPages);
          setLoading(false);
        });
    }
  }, [page]);

  return {
    searchTerm,
    handleSearch,
    handleSubmit, 
    results,
    loading,
    totalPages,
    page,
    pageDown,
    pageUp
  };
};
