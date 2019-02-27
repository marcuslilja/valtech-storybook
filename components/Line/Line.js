import React from 'react';
import classNames from 'classnames';

import styles from './Line.module.scss';

export function Line(props) {
  const { as, children, className, backgroundColor, ...rest } = props;

  const Element = as || 'div';

  const styleModifiers = {
    [styles[`backgroundColor-${backgroundColor}`]]: backgroundColor,
  };

  return (
    <Element
      className={classNames(styles.line, styleModifiers, className)}
      {...rest}
    >
      {children}
    </Element>
  );
}
