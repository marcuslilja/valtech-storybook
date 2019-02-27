import React from 'react';

import styles from './Link.module.scss';

export function Link(props) {
  const { children, ...rest } = props;

  return (
    <a className={styles.link} {...rest}>
      {children}
    </a>
  );
}
