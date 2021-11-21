import React, { ElementType, FC } from 'react';
import clsx from 'clsx';

export type TypographyVariant =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'body1'
  | 'body2';

export type TypographyAlign =
  | 'inherit'
  | 'left'
  | 'center'
  | 'right'
  | 'justify';
export type TypographyColor = 'primary' | 'dark' | 'soft' | 'light';

export type TypographyGutterBottom = 1 | 2 | 3 | 4 | 5 | 6 | 7;

const variantToComponentMapping = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  body1: 'p',
  body2: 'p',
};

const variantToColorMapping = {
  h1: 'primary',
  h2: 'primary',
  h3: 'primary',
  h4: 'dark',
  h5: 'dark',
  body1: 'light',
  body2: 'soft',
};

export interface TypographyProps {
  variant: TypographyVariant;
  color?: TypographyColor;
  align?: TypographyAlign;
  component?: ElementType;
  customClass?: string;
  gutterBottom?: TypographyGutterBottom;
  bold?: boolean;
  children?: React.ReactNode;
  dangerouslySetInnerHTML?: React.ReactNode;
}

export const Typography: FC<TypographyProps> = ({
  color,
  component,
  customClass,
  variant,
  align,
  gutterBottom,
  bold,
  dangerouslySetInnerHTML,
  children = null,
}) => {
  const Component = component || variantToComponentMapping[variant] || 'span';

  const colorMapped = color || variantToColorMapping[variant] || 'dark';

  const componentClasses = clsx([
    'typography',
    variant && `typography--${variant}`,
    colorMapped && colorMapped !== 'inherit' && `typography--${colorMapped}`,
    gutterBottom && `typography--gutter-bottom-${gutterBottom}`,
    bold && 'typography--bold',
    align && align !== 'inherit' && `typography--${align}`,
    customClass,
  ]);

  const render = dangerouslySetInnerHTML ? (
    <Component
      className={componentClasses}
      dangerouslySetInnerHTML={{ __html: dangerouslySetInnerHTML }}
    />
  ) : (
    <Component className={componentClasses}>{children}</Component>
  );
  return <>{render}</>;
};
