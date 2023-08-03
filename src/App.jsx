import React, { useState, useEffect } from 'react';
import Login from './components/login';
import Navbar from './components/navbar';
import Footer from './components/footer';
import Grid from './layout/grid';
import Container from './layout/container';
import Search from './components/search';
import './App.css';

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [pokemons, setPokemons] = useState([]);
  const [notFound, setNotFound] = useState(false);
  const [searching, setSearching] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const handleLogin = (username) => {

    setLoggedIn(true);
    setUsername(username);
  };

  const handleLogout = () => {
    setLoggedIn(false);
    setUsername('');
  };

  const handleSearch = (textSearch) => {
    if (!textSearch) {
      setPokemons([]);
      setNotFound(false);
      setSearching(false);
      setCurrentPage(1);
      return;
    }

    setNotFound(false);
    setSearching(true);

    fetch(`https://pokeapi.co/api/v2/pokemon/${textSearch.toLowerCase()}`)
      .then((response) => response.json())
      .then((data) => {
        if (data) {
          setPokemons([data]);
          setSearching(false);
          setCurrentPage(1);
        } else {
          setNotFound(true);
          setSearching(false);
          setCurrentPage(1);
        }
      })
      .catch(() => {
        setNotFound(true);
        setSearching(false);
        setCurrentPage(1);
      });
  };

  const showPokemons = async () => {
    setSearching(true);

    const limit = 1300;
    const offset = (currentPage - 1) * limit;

    const api = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`);
    const data = await api.json();
    const promises = await data.results.map(async (pokemon) => {
      const result = await fetch(pokemon.url);
      const res = await result.json();
      return res;
    });

    const results = await Promise.all(promises);

    setPokemons((prev) => [...prev, ...results]);
    setNotFound(false);
    setSearching(false);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    showPokemons();
  }, [currentPage]);

  return (
    <>
      <Container>
        <Navbar title="KADIR - POKEDEX" />
        {loggedIn ? (

          <Grid pokemons={pokemons} />
        ) : (

          <Login onLogin={handleLogin} />
        )}
      </Container>
      <Footer />
    </>
  );
};

export default App;
