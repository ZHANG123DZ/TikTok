import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import styles from './style.module.scss';
import Button from '../Button';
import TikTok from '../../assets/imgs/logoTikTok.png';
import clsx from 'clsx';
import navigationUser from '../../navigationUser';

function SideNavUser() {
  return (
    <div className={styles.DivSideNavPlaceholderContainer}>
      <div className={styles.DivSideNavContainer}>
        <div className={styles.DivAnimationCover}></div>
        <div className={styles.DivFixedContentContainer}>
          <div className={styles.DivLogoWrapper}>
            <a href="#" style={{ position: 'relative' }}>
              <img src={TikTok} alt="logoTikTok" style={{ width: '100px' }} />
            </a>
          </div>
          <div className={styles.DivSearchWrapper}>
            {
              <Button
                label="Tìm kiếm"
                className="StyledTUXSearchButton"
                secondary
                size="medium"
                searchButton
                capsule
                icon={<FontAwesomeIcon icon={faSearch} />}
              ></Button>
            }
          </div>
        </div>
        <div className={styles.DivScrollingContentContainer}>
          <div className={styles.DivMainNavContainer}>
            {Object.values(navigationUser).map((data) => (
              <div
                className="TUXTooltip-reference StyledTUXTooltip"
                key={data.label}
              >
                <Button
                  to={data.link}
                  label={data.label}
                  className="StyledTUXNavButton"
                  isDefault
                  size="medium"
                  secondary
                  navButton
                  icon={data.icon}
                ></Button>
              </div>
            ))}
          </div>
          <div className={styles.SubMainNavContentContainer}>
            <div className={styles.DivUserContainer}>
              <p className={clsx()}>Các tài khoản Đã follow</p>
              <ul className={styles.UlAccountList}>
                <p>Những tài khoản bạn đã follow sẽ xuất hiện tại đây</p>
              </ul>
            </div>
          </div>
          <div className={styles.SubMainNavFooterContainer}>
            <div className={styles.DivFooterContainer}>
              <h4 className={styles.H4LinkListHeader}>Công ty</h4>
              <h4 className={styles.H4LinkListHeader}>Chương trình</h4>
              <h4 className={styles.H4LinkListHeader}>
                Điều khoản và chính sách
              </h4>
              <div className={styles.DivMoreContainer}>
                <span className={styles.SpanMoreText}>Thêm</span>
              </div>
              <span className={styles.SpanCopyright}>&cpy 2025 TikTok</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SideNavUser;
