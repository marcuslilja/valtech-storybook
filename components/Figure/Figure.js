import React from 'react';
import classNames from 'classnames';

import styles from './Figure.module.scss';

export function Figure(props) {
  const { as, children, className, ...rest } = props;

  const Element = as || 'div';

  return (
    <Element className={classNames(styles.figure, className)} {...rest}>
      {children}
    </Element>
  );
}
