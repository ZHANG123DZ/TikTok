import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import clsx from 'clsx';
import './Button.css';
import styles from './Button.module.scss';
import useRedirectToLogin from '../../hooks/useRedirectToLogin';
import { useDispatch, useSelector } from 'react-redux';
import { nextUrl } from '../../features/url/urlSlice';

function Button({
  children,
  icon,
  label = '',
  to = '',
  href = '',
  className = '',
  id = '',
  isDefault = false,
  capsule = false,
  primary = false,
  secondary = false,
  borderless = false,
  size = '',
  searchButton = false,
  navButton = false,
  responsiveButton = false,
  iconOnlyButton = false,
  segmentControl = false,
  mentionSuggest = false,
  emoji = false,
  unstyledButton = false,
  closeButton = false,
  disabled = false,
  loading = false,
  IsProtected = false,
  onClick = () => ({}),
}) {
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.auth.isAuth);
  const { checkAuthAnDirect } = useRedirectToLogin();

  let Component = 'button';
  const props = {
    id,
    className: clsx('TUXButton', styles[className], {
      ['TUXButton--default']: isDefault,
      [`TUXButton--${size}`]: size,
      [`TUXButton--primary`]: primary,
      [`TUXButton--secondary`]: secondary,
      [`TUXButton--capsule`]: capsule,
      ['TUXButton--borderless']: borderless,
      ['TUXSegmentedControl']: segmentControl,
      ['TUXUnstyledButton']: unstyledButton,
      [styles.StyledTUXSearchButton]: searchButton,
      [styles.StyledTUXNavButton]: navButton,
      [styles.StyledTUXIconOnlyButton]: iconOnlyButton,
      [styles.StyledTUXResponsiveButton]: responsiveButton,
      [styles.StyledMentionSuggestionButton]: mentionSuggest,
      [styles.StyledEmojiButton]: emoji,
      [styles.StyledTUXMoreCloseButton]: closeButton,
      [styles.disabled]: disabled || loading,
    }),
    disabled,
  };

  const handleClick = (event) => {
    if (disabled || loading) {
      event.preventDefault();
      return;
    }
    if (onClick) {
      onClick(event);
    }
    if (IsProtected && !isAuth) {
      event.preventDefault();
      dispatch(nextUrl(to || href));
      checkAuthAnDirect(event);
    }
  };

  if (to) {
    Component = NavLink;
    props.to = to;
  } else if (href) {
    Component = 'a';
    props.href = href;
  }

  return (
    <Component {...props} onClick={(event) => handleClick(event)}>
      {loading ? (
        <FontAwesomeIcon icon={faSpinner} spin />
      ) : (
        <div className="TUXButton-content">
          {icon && (
            <div className="TUXButton-iconContainer">
              <div className={styles.DivIconWithRedDotContainer}>{icon}</div>
            </div>
          )}
          {label && <div className="TUXButton-label">{label}</div>}
          {children && <div>{children}</div>}
        </div>
      )}
    </Component>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  id: PropTypes.string,
  label: PropTypes.string,
  className: PropTypes.string,
  to: PropTypes.string,
  href: PropTypes.string,
  icon: PropTypes.element,
  isDefault: PropTypes.bool,
  capsule: PropTypes.bool,
  primary: PropTypes.bool,
  secondary: PropTypes.bool,
  borderless: PropTypes.bool,
  searchButton: PropTypes.bool,
  navButton: PropTypes.bool,
  responsiveButton: PropTypes.bool,
  iconOnlyButton: PropTypes.bool,
  segmentControl: PropTypes.bool,
  mentionSuggest: PropTypes.bool,
  emoji: PropTypes.bool,
  unstyledButton: PropTypes.bool,
  onlyButton: PropTypes.bool,
  closeButton: PropTypes.bool,
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  IsProtected: PropTypes.bool,
  onClick: PropTypes.func,
};

export default Button;
