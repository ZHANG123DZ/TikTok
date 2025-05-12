import { Outlet } from 'react-router-dom';
import SideNav from '../../component/SideNav';
import styles from './DefaultLayout.module.scss';
import { useSelector } from 'react-redux';
import Modal from '../../component/Modal';

function DefaultLayout() {
  const isOpen = useSelector((state) => state.modal.isOpen);

  return (
    <div className={styles.DivBodyContainer}>
      <SideNav />
      {isOpen && <Modal />}
      <Outlet />
    </div>
  );
}

export default DefaultLayout;
