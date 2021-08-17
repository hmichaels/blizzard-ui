import React from 'react';
import PropTypes from 'prop-types';

import styles from './LinkButton.module.scss';

export const LinkButton = ({ children, onClick, url }) => {
  const handleOnClick = () => {
    onClick(url);
  }

  const attrs = {
    ...typeof onClick === 'function' ? { onClick: handleOnClick } : { href: url }
  };

  return (
    <a className={styles.linkButton} {...attrs} test="hai">
      {children}
    </a>
  )
};

LinkButton.propTypes = {
  onClick: PropTypes.func,
  url: PropTypes.string
}

LinkButton.defaultProps = {}