import React, { forwardRef } from 'react';
import clsx from 'clsx';

export type ButtonBaseProps = {
  type?: 'button';
  disabled?: boolean;
  children?: React.ReactNode;
  className?: string;
  onClick?: (
    e?: React.MouseEvent<HTMLButtonElement, MouseEvent> | React.KeyboardEvent,
    ...args: any[]
  ) => void;
  onFocus?: (e?: React.FocusEvent<HTMLButtonElement>) => void;
  onBlur?: (e?: React.FocusEvent<HTMLButtonElement>) => void;
  onKeyDown?: (e?: React.KeyboardEvent<HTMLButtonElement>) => void;
  onKeyUp?: (e?: React.KeyboardEvent<HTMLButtonElement>) => void;
};

// eslint-disable-next-line react/display-name
export const ButtonBase = forwardRef<HTMLButtonElement, ButtonBaseProps>(
  (
    {
      type = 'button',
      disabled = false,
      children = '',
      className = '',
      onClick,
      onFocus,
      onKeyDown,
      onKeyUp,
      onBlur,
    },
    ref
  ) => {
    const buttonClasses = clsx([
      'button',
      disabled && 'button--disabled',
      className,
    ]);

    const handleFocus = (e: React.FocusEvent<HTMLButtonElement>): void => {
      if (onFocus) {
        onFocus(e);
      }
    };

    const handleBlur = (e: React.FocusEvent<HTMLButtonElement>): void => {
      if (onBlur) {
        onBlur(e);
      }
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>): void => {
      if (onKeyDown) {
        onKeyDown(e);
      }
    };

    const handleKeyUp = (e: React.KeyboardEvent<HTMLButtonElement>): void => {
      if (onKeyUp) {
        onKeyUp(e);
      }
    };

    return (
      <button
        className={buttonClasses}
        disabled={disabled}
        type={type}
        ref={ref}
        onClick={onClick}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onKeyDown={handleKeyDown}
        onKeyUp={handleKeyUp}
        tabIndex={0}
      >
        {children}
      </button>
    );
  }
);
