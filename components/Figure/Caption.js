import React from 'react';
import classNames from 'classnames';

import styles from './Caption.module.scss';

export function Caption(props) {
  const { as, children, className, ...rest } = props;

  const Element = as || 'div';

  return (
    <Element className={classNames(styles.caption, className)} {...rest}>
      {children}
    </Element>
  );
}
