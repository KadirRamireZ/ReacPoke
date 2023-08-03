import React from 'react';
import Card from '../components/card';
import Pagination from '../components/Pagination';

const Grid = ({ pokemons }) => {
  const [currentPage, setCurrentPage] = React.useState(1);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const itemsPerPage = 20;
  const totalPages = Math.ceil(pokemons.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  return (
    <div className="grid">
      <div className="grid__pokemon">
        {pokemons.slice(startIndex, endIndex).map((poke) => (
          <Card key={poke.name} pokemon={poke} />
        ))}
      </div>
      {pokemons.length > itemsPerPage && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      )}
    </div>
  );
};

export default Grid;
