import PropTypes from 'prop-types';

import styles from './FormTabs.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

function FormTabs({ children, onClose }) {
  return (
    <div className={styles.DivCenterWrapper}>
      <div className={styles.FormTabs}>
        <div>
          <button className={styles.closeWrapper} onClick={onClose}>
            <FontAwesomeIcon icon={faXmark} />
          </button>
        </div>
        <div className="FormContainer">{children}</div>
      </div>
    </div>
  );
}

FormTabs.propTypes = {
  children: PropTypes.element.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default FormTabs;
