import React from 'react';
import { getSize } from './utils';

import styles from './Icons.module.scss';

export function SpeechBubble(props) {
  const size = getSize(props.size);

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size.width}
      height={size.height}
      viewBox="0 0 24 24"
      className={styles.svg}
    >
      <path d="M20 9.999v-2h4v12.001h-3v4l-5.333-4h-7.667v-4h12v-6.001zm-2 4.001h-9.667l-5.333 4v-4h-3v-14.001h18v14.001z" />
    </svg>
  );
}
