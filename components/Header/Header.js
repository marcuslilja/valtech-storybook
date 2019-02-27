import React from 'react';

import styles from './Header.module.scss';

export function Header(props) {
  const { children } = props;

  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>{children}</header>
    </div>
  );
}
