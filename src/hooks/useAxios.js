import React from 'react';
import axios from 'axios';

function useAxios() {
  const [cards, setCards] = React.useState(null);
  const [error, setError] = React.useState('');
  const [loading, setLoading] = React.useState(true);

  const url = 'https://api.pokemontcg.io/v2/cards';
  const API_KEY = process.env.MY_API_KEY;
  const fetchData = () => {
    axios.get(url, {
      mode: 'cors',
      headers: {
        'X-Api-Key': API_KEY,
      },
    }).then((res) => setCards(res.data.data))
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  };

  React.useEffect(() => {
    fetchData();
  }, []);

  return { cards, error, loading };
}

export default useAxios;
