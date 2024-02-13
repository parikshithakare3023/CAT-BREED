// BreedDetailPage.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function BreedDetailPage() {
  const { breedId } = useParams();
  const [breed, setBreed] = useState(null);

  useEffect(() => {
    const fetchBreedDetail = async () => {
      try {
        const response = await axios.get(`https://api.thecatapi.com/v1/breeds/${breedId}`);
        setBreed(response.data);
      } catch (error) {
        console.error('Error fetching breed detail:', error);
      }
    };

    fetchBreedDetail();
  }, [breedId]);

  if (!breed) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{breed.name}</h2>
      <p>Origin: {breed.origin}</p>
      <p>Weight: {breed.weight.metric} kg</p>
      <p>Hairless: {breed.hairless ? 'Yes' : 'No'}</p>
      <img src={breed.image.url} alt={breed.name} />
      <a href={breed.wikipedia_url} target="_blank" >Wikipedia Link</a>

    </div>
  );
}

export default BreedDetailPage;
