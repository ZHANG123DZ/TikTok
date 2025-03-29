import PropTypes from 'prop-types';
import { createPortal } from 'react-dom';

function DivModalContainer({ children }) {
  const modalRoot = document.querySelector('.DivModalContainer');
  if (!modalRoot) return null;
  console.log('hi');
  return createPortal(
    <div>
      <div className="DivCenterWrapper">{children}</div>
    </div>,
    modalRoot
  );
}

DivModalContainer.propTypes = {
  children: PropTypes.element.isRequired,
  active: PropTypes.string.isRequired,
};

export default DivModalContainer;
