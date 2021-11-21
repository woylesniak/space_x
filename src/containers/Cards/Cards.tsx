import React from 'react';
import Launche from '../../models/Launche';
import { Card } from '../../components/Card/Card';

interface CardsProps {
  launchces: Launche[];
  addToList: (Launche: Launche) => void;
}

export const Cards = ({ launchces, addToList }: CardsProps) => {
  const renderCards = launchces.map((launchce: Launche) => {
    return (
      <Card
        key={launchce.id}
        launche={launchce}
        addFavorite={() => addToList(launchce)}
      />
    );
  });

  return <div className='cards'>{renderCards}</div>;
};
