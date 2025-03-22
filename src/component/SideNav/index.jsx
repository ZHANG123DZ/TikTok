import { NavLink } from "react-router-dom"
import config from "../../config/index"
import TUXButtonStyles from "./TUXButton.module.scss"
import SideNavStyles from "./SideNav.module.scss"

function SideNav() {
  return (
    <div className={SideNavStyles.SideNav}>
      <div className={SideNavStyles.FixedContent}>
        <div className="logoContainer">
          <NavLink to={config.routes.home}>
            <div className="logoContent">
              <img src="./src/assets/imgs/logoTikTok.jpg" alt="TikTok" className={SideNavStyles.logo}/>
            </div>
          </NavLink>
        </div>
        <div className={TUXButtonStyles.TUXTooltipSearch}>
          <NavLink to={config.routes.home} >
            <button className={TUXButtonStyles.TUXButtonSearch}>
              <div className={TUXButtonStyles.TUXButton_contentSearch}>
                <div className={TUXButtonStyles.TUXButton_iconContainerSearch}><i class='bx bx-search'></i></div>
                  <div className={TUXButtonStyles.TUXButton_labelSearch}>Tìm kiếm</div>
              </div>
            </button>
          </NavLink>
          </div>
      </div>
      <div className="ScrollingContentContainer">
        <div className="MainNavContent">
          <div className={TUXButtonStyles.TUXTooltip}>
          <NavLink to={config.routes.home} >
            <button className={TUXButtonStyles.TUXButton}>
              <div className={TUXButtonStyles.TUXButton_content}>
                <div className={TUXButtonStyles.TUXButton_iconContainer}><i class='bx bxs-home'></i></div>
                  <div className={TUXButtonStyles.TUXButton_label}>For you</div>
              </div>
            </button>
          </NavLink>
          </div>
          <div className={TUXButtonStyles.TUXTooltip}>
          <NavLink to={config.routes.home} >
            <button className={TUXButtonStyles.TUXButton}>
              <div className={TUXButtonStyles.TUXButton_content}>
                <div className={TUXButtonStyles.TUXButton_iconContainer}><i class='bx bx-compass'></i></div>
                  <div className={TUXButtonStyles.TUXButton_label}>Explore</div>
              </div>
            </button>
          </NavLink>
          </div>
          <div className={TUXButtonStyles.TUXTooltip}>
          <NavLink to={config.routes.home} >
            <button className={TUXButtonStyles.TUXButton}>
              <div className={TUXButtonStyles.TUXButton_content}>
                <div className={TUXButtonStyles.TUXButton_iconContainer}><i class='bx bx-user-minus' ></i></div>
                  <div className={TUXButtonStyles.TUXButton_label}>Following</div>
              </div>
            </button>
          </NavLink>
          </div>
          <div className={TUXButtonStyles.TUXTooltip}>
          <NavLink to={config.routes.home} >
            <button className={TUXButtonStyles.TUXButton}>
              <div className={TUXButtonStyles.TUXButton_content}>
                <div className={TUXButtonStyles.TUXButton_iconContainer}><i class='bx bxs-tv' ></i></div>
                  <div className={TUXButtonStyles.TUXButton_label}>LIVE</div>
              </div>
            </button>
          </NavLink>
          </div>
          <div className={TUXButtonStyles.TUXTooltip}>
          <NavLink to={config.routes.home} >
            <button className={TUXButtonStyles.TUXButton}>
              <div className={TUXButtonStyles.TUXButton_content}>
                <div className={TUXButtonStyles.TUXButton_iconContainer}><i class='bx bx-folder-plus' ></i></div>
                  <div className={TUXButtonStyles.TUXButton_label}>Upload</div>
              </div>
            </button>
          </NavLink>
          </div>
          <div className={TUXButtonStyles.TUXTooltip}>
          <NavLink to={config.routes.home} >
            <button className={TUXButtonStyles.TUXButton}>
              <div className={TUXButtonStyles.TUXButton_content}>
                <div className={TUXButtonStyles.TUXButton_iconContainer}><i class='bx bxs-user'></i></div>
                  <div className={TUXButtonStyles.TUXButton_label}>Profile</div>
              </div>
            </button>
          </NavLink>
          </div>
          <div className={TUXButtonStyles.TUXTooltip}>
          <NavLink to={config.routes.home} >
            <button className={TUXButtonStyles.TUXButton}>
              <div className={TUXButtonStyles.TUXButton_content}>
                <div className={TUXButtonStyles.TUXButton_iconContainer}><i class='bx bx-dots-horizontal' ></i></div>
                  <div className={TUXButtonStyles.TUXButton_label}>More</div>
              </div>
            </button>
          </NavLink>
          </div>
        </div>
        <div className="FooterContainer">
          <hr />
          <h4>Company</h4>
          <h4>Program</h4>
          <h4>Terms & polices</h4>
        </div>
      </div>
    </div>
  )
}

export default SideNav
