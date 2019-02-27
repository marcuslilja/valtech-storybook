import React from 'react';
import classNames from 'classnames';

import styles from './Box.module.scss';

export function Box(props) {
  const {
    as,
    display,
    children,
    className,
    alignItems,
    flexDirection,
    justifyContent,
    backgroundColor,
    margin,
    marginTop,
    marginLeft,
    marginRight,
    marginBottom,
    padding,
    paddingTop,
    paddingLeft,
    paddingRight,
    paddingBottom,
    ...rest
  } = props;

  const Element = as || 'div';

  const styleModifiers = {
    [styles[`display-${display}`]]: display,
    [styles[`alignItems-${alignItems}`]]: alignItems,
    [styles[`flexDirection-${flexDirection}`]]: flexDirection,
    [styles[`justifyContent-${justifyContent}`]]: justifyContent,
    [styles[`backgroundColor-${backgroundColor}`]]: backgroundColor,
    [styles[`margin-${margin}`]]: margin,
    [styles[`marginTop-${marginTop}`]]: marginTop,
    [styles[`marginLeft-${marginLeft}`]]: marginLeft,
    [styles[`marginRight-${marginRight}`]]: marginRight,
    [styles[`marginBottom-${marginBottom}`]]: marginBottom,
    [styles[`padding-${padding}`]]: padding,
    [styles[`paddingTop-${paddingTop}`]]: paddingTop,
    [styles[`paddingLeft-${paddingLeft}`]]: paddingLeft,
    [styles[`paddingRight-${paddingRight}`]]: paddingRight,
    [styles[`paddingBottom-${paddingBottom}`]]: paddingBottom,
  };

  return (
    <Element
      className={classNames(styles.box, styleModifiers, className)}
      {...rest}
    >
      {children}
    </Element>
  );
}
