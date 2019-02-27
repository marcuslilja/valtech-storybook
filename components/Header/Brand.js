import React from 'react';

import styles from './Brand.module.scss';

export function Brand(props) {
  const { children, ...rest } = props;

  return (
    <a className={styles.brand} {...rest}>
      {children}
    </a>
  );
}
