import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

import styles from './TUXButton.module.scss';

function TUXButton({ data }) {
  return (
    <>
      <div className={styles.TUXTooltip}>
        <NavLink to={data.link}>
          <button className={styles.TUXButton}>
            <div className={styles.TUXButton_content}>
              <div className={styles.TUXButton_iconContainer}>{data.icon}</div>
              <div className={styles.TUXButton_label}>{data.label}</div>
            </div>
          </button>
        </NavLink>
      </div>
    </>
  );
}

TUXButton.propTypes = {
  data: PropTypes.object.isRequired,
};

export default TUXButton;
