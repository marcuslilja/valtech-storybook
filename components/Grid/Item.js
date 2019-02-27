import React from 'react';
import classNames from 'classnames';

import styles from './Item.module.scss';

export function Item(props) {
  const { as, children, className, ...rest } = props;

  const Element = as || 'div';

  return (
    <Element className={classNames(styles.item, className)} {...rest}>
      {children}
    </Element>
  );
}

Item.displayName = 'Grid.Item';
