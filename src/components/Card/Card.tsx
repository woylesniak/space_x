import React from 'react';
import clsx from 'clsx';
import { BUTTON } from '../../types/button';
import { Button } from '../Button/Button';
import Image from 'next/image';
import Launche from '../../models/Launche';
import { Typography } from '../../commons/Typography/Typography';

interface CardProps {
  launche: Launche;
  customClass?: String;
  addFavorite: (e: Launche) => void;
}

export const Card = ({ launche, customClass, addFavorite }: CardProps) => {
  const cardClasses = clsx(['card', customClass]);
  const {
    ships,
    launch_date_local,
    mission_name,
    rocket: {
      rocket: { description },
    },
  }: Launche = launche;

  const date = new Date(launch_date_local).toLocaleDateString('en-US');

  return (
    <div className={cardClasses} onClick={() => addFavorite(launche)}>
      <div className='card__image'>
        <Image
          key={ships[0].image}
          src={ships[0].image}
          alt={ships[0].name}
          width='472'
          height='265'
        />
      </div>
      <Typography
        variant='body2'
        color='soft'
        customClass='card__content--date'
      >
        {date}
      </Typography>
      <div className='card__content'>
        <Typography variant='h2'>{mission_name}</Typography>
        <Typography variant='body1' color='light'>
          {description}
        </Typography>
      </div>

      <div className='card__action'>
        <Button variant={BUTTON.VARIANT.OUTLINE}>Czytaj więcej</Button>
      </div>
    </div>
  );
};
