import React from 'react';
import classNames from 'classnames';

import styles from './Grid.module.scss';

export function Grid(props) {
  const {
    as,
    rowGap,
    columns,
    children,
    columnGap,
    className,
    ...rest
  } = props;

  const Element = as || 'div';

  const styleModifiers = {
    [styles[`rowGap-${rowGap}`]]: rowGap,
    [styles[`columns-${columns}`]]: columns,
    [styles[`columnGap-${columnGap}`]]: columnGap,
  };

  return (
    <Element
      className={classNames(styles.grid, styleModifiers, className)}
      {...rest}
    >
      {children}
    </Element>
  );
}
