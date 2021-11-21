import React from 'react';
import clsx from 'clsx';
import Image from 'next/image';
import { Typography } from '../../commons/Typography/Typography';
import { IoTrashOutline } from 'react-icons/io5';
import { Button } from '../Button/Button';

interface FavoriteProps {
  id: number;
  imageSrc: string;
  name: string;
  customClass?: string;
  removeItem: (e: number) => void;
}

export const Favorite = ({
  id,
  imageSrc,
  name,
  customClass,
  removeItem,
}: FavoriteProps) => {
  const favoriteClasses = clsx(['favorite', customClass]);

  return (
    <div className={favoriteClasses}>
      <div className='favorite__wrapper'>
        <div className='favorite__image'>
          <Image src={imageSrc} alt={name} width='60' height='60' />
        </div>
        <Typography variant='h3' color='dark'>
          {name}
        </Typography>
        <Button
          circle
          customClass='favorite__button'
          onClick={() => removeItem(id)}
        >
          <IoTrashOutline />
        </Button>
      </div>
    </div>
  );
};
