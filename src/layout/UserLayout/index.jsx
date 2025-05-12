import { Outlet } from 'react-router-dom';
import styles from './UserLayout.module.scss';
import SideNavUser from '../../component/SideNavUser';
import { useSelector } from 'react-redux';
import Modal from '../../component/Modal';

function UserLayout() {
  const isOpen = useSelector((state) => state.modal.isOpen);
  return (
    <div className={styles.DivBodyContainer}>
      <SideNavUser />
      {isOpen && <Modal />}
      <Outlet />
    </div>
  );
}

export default UserLayout;
