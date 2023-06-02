import React, { useState, useEffect } from 'react';

const RickAndMortyCharacters = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    // fetch('https://rickandmortyapi.com/api/character')
    // .then(response => response.json())
    // .then(data => setCharacters(data.results))

    const fetchCharacters = async () => {
      const APIurl  = 'https://rickandmortyapi.com/api/character'
      
      try {
        const response = await fetch(APIurl);
        const data = await response.json();
        setCharacters(data.results);
      } catch (error) {
        console.error('Error fetching characters:', error);
      }
    };
    fetchCharacters();

  }, []);

  return (
    <div>
      <h1>Rick and Morty Characters</h1>
      <ul>
        {characters.map((character) => (
          <li key={character.id}>{character.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default RickAndMortyCharacters;
