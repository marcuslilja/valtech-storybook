import React from 'react';
import { getSize } from './utils';

import styles from './Icons.module.scss';

export function Facebook(props) {
  const size = getSize(props.size);

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size.width}
      height={size.height}
      viewBox="0 0 8 16"
      className={styles.svg}
    >
      <path d="M0 5.23v2.736h1.675V16h3.222V7.932h2.248l.24-2.701H4.897V3.692c0-.637.129-.889.744-.889h1.744V0H5.154C2.756 0 1.675 1.055 1.675 3.077V5.23H0z" />
    </svg>
  );
}
