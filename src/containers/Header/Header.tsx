import React from 'react';
import clsx from 'clsx';
import logoUrl from '../../assets/logo.svg';
import { Logo } from '../../commons/Logo/Logo';
import { InputBase } from '../../commons/InputBase/InputBase';
import { BUTTON } from '../../types/button';
import { Button } from '../../components/Button/Button';
import { AiOutlineHeart, AiOutlineClose } from 'react-icons/ai';

interface HeaderProps {
  activeButton?: boolean;
  customClass?: string;
  onSearch?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  setOpenBar: () => void;
}

export const Header = ({
  activeButton,
  customClass,
  onSearch,
  setOpenBar,
}: HeaderProps) => {
  const headerClasses = clsx(['header', customClass]);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.persist();
    onSearch && onSearch(e);
  };

  const changeIcon = activeButton ? <AiOutlineClose /> : <AiOutlineHeart />;

  return (
    <header className={headerClasses}>
      <Logo url={logoUrl} alt='logo' />
      <InputBase
        name='search'
        placeholder='Search for a ship'
        onChangeInput={onChange}
      />
      <Button
        color={BUTTON.COLOR.DARK}
        variant={BUTTON.VARIANT.CONTAINED}
        circle
        active={activeButton}
        onClick={() => setOpenBar()}
      >
        {changeIcon}
      </Button>
    </header>
  );
};
