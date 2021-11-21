import React, { forwardRef } from 'react';
import clsx from 'clsx';
import {
  ButtonBase,
  ButtonBaseProps,
} from '../../commons/ButtonBase/ButtonBase';
import { BUTTON } from '../../types/button';

export type ButtonProps = {
  color?: BUTTON.COLOR;
  variant?: BUTTON.VARIANT;
  circle?: boolean;
  customClass?: string;
  active?: boolean;
} & ButtonBaseProps;

// eslint-disable-next-line react/display-name
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = BUTTON.VARIANT.OUTLINE,
      color = BUTTON.COLOR.PRIMARY,
      circle = false,
      children = '',
      customClass = '',
      active,
      ...baseProps
    },
    ref
  ) => {
    const buttonClasses = clsx([
      variant && `button--${variant}`,
      color && `button--${variant}-${color}`,
      circle && 'button--circle',
      active && 'button--active',
      customClass,
    ]);

    return (
      <ButtonBase className={buttonClasses} {...baseProps} ref={ref}>
        <span className='button__label'>{children}</span>
      </ButtonBase>
    );
  }
);
