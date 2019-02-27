import React from 'react';
import classNames from 'classnames';

import styles from './Heading2.module.scss';

export function Heading2(props) {
  const { as, children, className, ...rest } = props;

  const Element = as || 'h2';

  return (
    <Element className={classNames(styles.heading2, className)} {...rest}>
      {children}
    </Element>
  );
}
