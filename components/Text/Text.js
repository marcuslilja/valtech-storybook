import React from 'react';
import classNames from 'classnames';

import styles from './Text.module.scss';

export function Text(props) {
  const {
    as,
    color,
    children,
    fontSize,
    className,
    textAlign,
    fontFamily,
    fontWeight,
    letterSpacing,
    textTransform,
    textDecoration,
    backgroundColor,
    ...rest
  } = props;

  const Element = as || 'div';

  const styleModifiers = {
    [styles[`color-${color}`]]: color,
    [styles[`fontSize-${fontSize}`]]: fontSize,
    [styles[`textAlign-${textAlign}`]]: textAlign,
    [styles[`fontFamily-${fontFamily}`]]: fontFamily,
    [styles[`fontWeight-${fontWeight}`]]: fontWeight,
    [styles[`letterSpacing-${letterSpacing}`]]: letterSpacing,
    [styles[`textTransform-${textTransform}`]]: textTransform,
    [styles[`textDecoration-${textDecoration}`]]: textDecoration,
    [styles[`backgroundColor-${backgroundColor}`]]: backgroundColor,
  };

  return (
    <Element
      className={classNames(styles.text, styleModifiers, className)}
      {...rest}
    >
      {children}
    </Element>
  );
}
