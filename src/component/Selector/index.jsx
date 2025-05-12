import PropTypes from 'prop-types';
import clsx from 'clsx';
import { useEffect, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faSortDown } from '@fortawesome/free-solid-svg-icons';

import styles from './styles.module.scss';

function Selector({ placeholder, list, label, isNum, dataName, onChange }) {
  const [click, setClick] = useState(false);
  const [data, setData] = useState();
  const boxRef = useRef(null);

  const now = new Date().getFullYear();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (boxRef.current && !boxRef.current.contains(event.target)) {
        return setClick(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [click]);

  const getValue = (index) => {
    if (!isNum) return list[index];
    return label === 'Năm' ? now - index : index + 1;
  };

  return (
    <div
      className={styles.DivSelector}
      ref={boxRef}
      onClick={() => setClick(!click)}
      {...{
        [`data-${dataName}`]: data,
      }}
    >
      <div
        className={styles.DivSelectLabel}
        style={{ color: data ? 'white' : undefined }}
      >
        {data ? `${label} ${data}` : `${placeholder}`}
        <FontAwesomeIcon
          icon={faSortDown}
          color="white"
          className={styles[click ? 'StyledArrowTriangleDownLargeFill' : '']}
        />
      </div>
      {click ? (
        <div className={styles.DivOptionsWrapper}>
          {list.map((item, index) => (
            <div
              key={index + 1}
              {...{
                [`data-${dataName}`]: getValue(index),
              }}
              className={clsx(
                styles.DivOption,
                data === getValue(index) && styles.DivCheck
              )}
              onClick={() => {
                setData(getValue(index));
                setClick(false);
              }}
            >
              {label} {getValue(index)}
              {data === getValue(index) ? (
                <FontAwesomeIcon
                  icon={faCheck}
                  className={styles.DivIconContainer}
                />
              ) : null}
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
}

Selector.propTypes = {
  placeholder: PropTypes.string.isRequired,
  list: PropTypes.array.isRequired,
  label: PropTypes.string,
  isNum: PropTypes.bool,
  dataName: PropTypes.string,
  onChange: PropTypes.func,
};

export default Selector;
