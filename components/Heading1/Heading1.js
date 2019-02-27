import React from 'react';
import classNames from 'classnames';

import styles from './Heading1.module.scss';

export function Heading1(props) {
  const { as, children, className, ...rest } = props;

  const Element = as || 'h1';

  return (
    <Element className={classNames(styles.heading1, className)} {...rest}>
      {children}
    </Element>
  );
}
