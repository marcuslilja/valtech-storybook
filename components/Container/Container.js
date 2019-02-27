import React from 'react';
import classNames from 'classnames';

import styles from './Container.module.scss';

export function Container(props) {
  const { as, width, children, className, ...rest } = props;

  const Element = as || 'div';

  const styleModifiers = {
    [styles[`width-${width}`]]: width,
  };

  return (
    <Element
      className={classNames(styles.container, styleModifiers, className)}
      {...rest}
    >
      {children}
    </Element>
  );
}
