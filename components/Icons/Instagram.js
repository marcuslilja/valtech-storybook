import React from 'react';
import { getSize } from './utils';

import styles from './Icons.module.scss';

export function Instagram(props) {
  const size = getSize(props.size);

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size.width}
      height={size.height}
      viewBox="0 0 16 16"
      className={styles.svg}
    >
      <path d="M14.154 6.769h-1.393c.102.394.162.805.162 1.23a4.923 4.923 0 1 1-9.846 0c0-.425.06-.836.162-1.23H1.846v6.77c0 .339.275.614.616.614h11.076c.34 0 .616-.275.616-.615v-6.77zm.123-4.283a.64.64 0 0 0-.64-.64h-1.92a.64.64 0 0 0-.64.64v1.92c0 .353.287.64.64.64h1.92a.64.64 0 0 0 .64-.64v-1.92zM8 4.923a3.077 3.077 0 1 0 0 6.153 3.077 3.077 0 0 0 0-6.153zM14.154 16H1.846A1.846 1.846 0 0 1 0 14.153V1.846C0 .826.827 0 1.846 0h12.308C15.174 0 16 .826 16 1.846v12.307c0 1.02-.826 1.847-1.846 1.847z" />
    </svg>
  );
}
