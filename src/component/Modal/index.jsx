import { createPortal } from 'react-dom';
import { useEffect, useState } from 'react';
import './ModalStyle.css';
import RenderModalView from '../../function/RenderModal';
import { useDispatch } from 'react-redux';
import { openModal } from '../../features/modalContent/modalContentSlice';

function Modal({ children }) {
  const [modalRoot, setModalRoot] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(openModal());
    const root = document.querySelector('.DivModalContainer');
    const mask = root?.querySelector('.DivModalMask');

    if (root && mask) {
      root.classList.add('modalActive');
      setModalRoot(mask);
      return () => {
        root.classList.remove('modalActive');
      };
    }
  }, []);

  if (!modalRoot) return null;

  return createPortal(children, modalRoot);
}

export default Modal;
