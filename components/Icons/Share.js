import React from 'react';
import { getSize } from './utils';

import styles from './Icons.module.scss';

export function Share(props) {
  const size = getSize(props.size);

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size.width}
      height={size.height}
      viewBox="0 0 24 24"
      className={styles.svg}
    >
      <path d="M14 18l10-7.088-10-6.912v3.042s-11.618 2.583-14 12.958c5.072-5.431 14-5.218 14-5.218v3.218z" />
    </svg>
  );
}
