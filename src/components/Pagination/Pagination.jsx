import React from 'react';
import PropTypes from 'prop-types';

export default function Pagination({ pageUp, pageDown, totalPages, page }) {

  const initialPage = totalPages === 0 ?
    page - 1 : page;

  return (
    <div>
      <button onClick={pageDown} disabled={page === 1}>Prev</button>
      <span>Page {initialPage} of {totalPages}</span>
      <button onClick={pageUp} disabled={page === totalPages}>Next</button>
    </div>
  );
}

Pagination.propTypes = {
  pageUp: PropTypes.func.isRequired,
  pageDown: PropTypes.func.isRequired,
  totalPages: PropTypes.number,
  page: PropTypes.number
};
