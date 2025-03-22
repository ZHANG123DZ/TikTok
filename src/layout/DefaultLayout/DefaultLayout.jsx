import { Outlet } from 'react-router-dom';
import SideNav from '../../component/SideNav';
import styles from "./DefaultLayout.module.scss"
function DefaultLayout() {
  return (
    <div className={styles.appContainer}>
        <div className={styles.app__inner}>
            <SideNav/>
            <main><Outlet/></main>
        </div>
    </div>
  )
}

export default DefaultLayout
