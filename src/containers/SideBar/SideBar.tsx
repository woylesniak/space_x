import clsx from 'clsx';
import React from 'react';
import { Favorite } from '../../components/Favorite/Favorite';
import Launche from '../../models/Launche';

interface SideBarProps {
  isOpen: Boolean;
  favorites: Launche[];
  customClass?: string;
  removeFavorite: (e: number) => void;
}

export const SideBar = ({
  isOpen,
  favorites,
  customClass,
  removeFavorite,
}: SideBarProps) => {
  const sideBarClasses = clsx([
    'side-bar',
    isOpen && 'side-bar--open',
    customClass,
  ]);

  const favoritesList = favorites.map((favorite: Launche) => (
    <Favorite
      key={favorite.id}
      id={favorite.id}
      imageSrc={favorite.ships[0].image}
      name={favorite.ships[0].name}
      removeItem={(e: number) => removeFavorite(e)}
    />
  ));

  return (
    <div className={sideBarClasses}>
      <div className='side-bar__favorites'>{favoritesList}</div>
    </div>
  );
};
