import React from 'react';
import classNames from 'classnames';

import styles from './Image.module.scss';

export function Image(props) {
  const { className, ...rest } = props;

  return <img className={classNames(styles.image, className)} {...rest} />;
}
