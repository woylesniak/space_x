import React from 'react';
import Image from 'next/image';
import clsx from 'clsx';

interface LogoProps {
  url: string;
  alt: string;
  customClass?: string;
}

export const Logo = ({ url, alt, customClass }: LogoProps) => {
  const logoClass = clsx(['logo', customClass]);

  return (
    <div className={logoClass}>
      <Image src={url} alt={alt} />
    </div>
  );
};
