import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
  closeModal,
  openModal,
} from '../features/modalContent/modalContentSlice';
import routes from '../routes';

function useRedirectToLogin() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isAuth = useSelector((state) => state.auth.isAuth);
  const link = useSelector((state) => state.url.link);

  const checkAuthAnDirect = useCallback(
    (event) => {
      if (!isAuth) {
        event?.preventDefault();
        dispatch(openModal());
      } else {
        navigate(link, { replace: true });
      }
    },
    [dispatch, isAuth, link, navigate]
  );

  return { checkAuthAnDirect };
}

export default useRedirectToLogin;
