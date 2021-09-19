import React from 'react';
import { useLocation } from 'react-router-dom';
import dataContext from '../../context/dataContext';

function CardDetails() {
  const { cards } = React.useContext(dataContext);
  const location = useLocation().pathname.split('/')[2];
  const [cardDetails, setCardDetails] = React.useState('');

  React.useEffect(() => {
    cards.find((card) => (
      (card.id === location)
        ? setCardDetails(card)
        : null
    ));
  }, []);

  if (cardDetails) {
    const {
      name,
      images: { small },
      evolvesFrom,
      evolvesTo,
      artist,
      rarity,
      nationalPokedexNumbers,
      cardmarket: { updatedAt, prices: { averageSellPrice } },
    } = cardDetails;
    return (
      <div>
        <img className="w-60 h-60" src={small} alt={name} />
        <h1>{name}</h1>
        <ul>
          <li>{`Pokédex number: ${nationalPokedexNumbers}`}</li>
          <li>{`Artist: ${artist}`}</li>
          <li>{`Rarity: ${rarity}`}</li>
          {
            (evolvesFrom)
              ? <li>{`Evolves from: ${evolvesFrom}`}</li>
              : null
          }
          {
            (evolvesTo)
              ? <li>{`Evolves to: ${evolvesTo}`}</li>
              : null
          }
          <li>{`Card average sell price (${updatedAt}): ${averageSellPrice}\u20AC`}</li>
        </ul>
      </div>
    );
  }
  return null;
}

export default CardDetails;
