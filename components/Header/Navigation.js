import React from 'react';

import styles from './Navigation.module.scss';

export function Navigation(props) {
  const { children } = props;

  return <nav className={styles.navigation}>{children}</nav>;
}
