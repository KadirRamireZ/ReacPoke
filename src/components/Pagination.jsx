import React from 'react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pageNumbers = [];

  for (let i = 1; i <= totalPages; i++) { 
    pageNumbers.push(i);
  }

  return (
    <div className="pagination">
      {pageNumbers.map((page) => (
        <button
          key={page}
          className={`pagination__button ${currentPage === page ? 'active' : ''}`}
          onClick={() => onPageChange(page)}
        >
          {page}
        </button>
      ))}
    </div>
  );
};

export default Pagination;


