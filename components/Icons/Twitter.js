import React from 'react';
import { getSize } from './utils';

import styles from './Icons.module.scss';

export function Twitter(props) {
  const size = getSize(props.size);

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size.width}
      height={size.height}
      viewBox="0 0 16 13"
      className={styles.svg}
    >
      <path d="M16 1.54a6.558 6.558 0 0 1-1.885.516A3.292 3.292 0 0 0 15.558.24a6.572 6.572 0 0 1-2.085.797A3.286 3.286 0 0 0 7.88 4.03 9.32 9.32 0 0 1 1.115.6 3.286 3.286 0 0 0 2.13 4.983a3.268 3.268 0 0 1-1.487-.41c-.036 1.52 1.054 2.943 2.633 3.26a3.289 3.289 0 0 1-1.483.056 3.286 3.286 0 0 0 3.067 2.28A6.602 6.602 0 0 1 0 11.528a9.291 9.291 0 0 0 5.032 1.475c6.094 0 9.538-5.148 9.33-9.765A6.669 6.669 0 0 0 16 1.54z" />
    </svg>
  );
}
