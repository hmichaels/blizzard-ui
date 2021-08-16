import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';

import styles from './NavbarDropdown.module.scss';

import contractArrow from '../../assets/icons/expand_less_24dp.svg';
import expandArrow from '../../assets/icons/expand_more_24dp.svg';

export const NavbarDropdown = ({ columns, footerItems, label }) => {
  const [expanded, setExpanded] = useState(false);

  const contentsRef = useRef();
  const labelRef = useRef();

  useEffect(() => {
    const handleClick = e => {
      if (expanded && !(contentsRef ?? {}).current.contains(e.target) && e.target !== labelRef.current) {
        setExpanded(false);
      }
    }
    document.addEventListener('mousedown', handleClick);

    return () => {
      document.removeEventListener('mousedown', handleClick);
    }
  })

  const renderColumns = () => {
    if (columns.length > 0) {
      const output = columns.map((column, index) => {
        return (
          <a className={`${styles.column} ${styles[`shortDelay-${index}`]}`} href={column.url} key={`column-${index}`}>
            <img src={column.image} alt={column.name} />
            <span className={styles.columnName}>{column.name}</span>
          </a>
        );
      });

      return (
        <div className={styles.columns}>
          {output}
        </div>
      );
    }
    return null;
  }

  const renderFooter = () => {
    if (footerItems.length > 0) {
      const output = footerItems.map((item, index) => {
        return (
          <a className={styles.footerItem} href={item.url} key={`footer-${index}`}>
            <img src={item.image} alt={item.name} />
            {item.name}
          </a>
        )
      });

      return (
        <div className={styles.footer}>
          <div className={`${styles[`mediumDelay-${columns.length}`]} ${styles.footerContent}`}>
            {output}
          </div>
        </div>
      )
    }
    return null;
  }

  const toggleContents = () => {
    if (columns.length > 0 || footerItems.length > 0) {
      setExpanded(!expanded);
    }
  }

  const contents = expanded
    ? (
      <div className={styles.container} ref={contentsRef}>
        {renderColumns()}
        {renderFooter()}
      </div>
    )
    : null;

  return (
    <React.Fragment>
      <div className={`${styles.label} ${expanded ? styles.expanded : ''}`} onClick={toggleContents} ref={labelRef}>
        {label}
        <img src={expanded ? contractArrow : expandArrow} alt="" />
      </div>
      {contents}
    </React.Fragment>
  );
};

NavbarDropdown.propTypes = {
  columns: PropTypes.arrayOf(PropTypes.object),
  footerItems: PropTypes.arrayOf(PropTypes.object),
  label: PropTypes.string.isRequired
}

NavbarDropdown.defaultProps = {
  columns: [],
  footerItems: []
}