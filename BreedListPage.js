// BreedListPage.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function BreedListPage() {
  const [breeds, setBreeds] = useState([]);

  useEffect(() => {
    const fetchBreeds = async () => {
      try {
        const response = await axios.get('https://api.thecatapi.com/v1/breeds');
        setBreeds(response.data);
      } catch (error) {
        console.error('Error fetching breeds:', error);
      }
    };

    fetchBreeds();
  }, []);

  return (
    <div>
      <h1>Cat Breeds</h1>
      <ul>
        {breeds.map(breed => (
          <li key={breed.id}>
            <Link to={`/breed/${breed.id}`}>{breed.name}</Link> - {breed.origin}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BreedListPage;
