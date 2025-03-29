import { NavLink } from 'react-router-dom';
import config from '../../config/index';
import SearchStyles from './TUXButtonSearch.module.scss';
import SideNavStyles from './SideNav.module.scss';
import TUXButton from './TUXButton';
import navigation from '../../navigation';

function SideNav() {
  return (
    <div className={SideNavStyles.SideNav}>
      <div className={SideNavStyles.FixedContent}>
        <div className="logoContainer">
          <NavLink to={config.routes.home}>
            <div className="logoContent">
              <img
                src="./src/assets/imgs/logoTikTok.jpg"
                alt="TikTok"
                className={SideNavStyles.logo}
              />
            </div>
          </NavLink>
        </div>
        <div className={SearchStyles.TUXTooltipSearch}>
          <NavLink to={config.routes.home}>
            <button className={SearchStyles.TUXButtonSearch}>
              <div className={SearchStyles.TUXButton_contentSearch}>
                <div className={SearchStyles.TUXButton_iconContainerSearch}>
                  <i className="bx bx-search"></i>
                </div>
                <div className={SearchStyles.TUXButton_labelSearch}>
                  Tìm kiếm
                </div>
              </div>
            </button>
          </NavLink>
        </div>
      </div>
      <div className="ScrollingContentContainer">
        <div className={SideNavStyles.MainNavContent}>
          {Object.keys(navigation).map((key) => (
            <TUXButton data={navigation[key]} key={key} />
          ))}
        </div>
        <div className="FooterContainer">
          <hr />
          <h4>Company</h4>
          <h4>Program</h4>
          <h4>Terms & polices</h4>
        </div>
      </div>
    </div>
  );
}

export default SideNav;
