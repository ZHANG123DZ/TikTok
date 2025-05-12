import { useDispatch, useSelector } from 'react-redux';
import { getProfile } from '../services/authService';
import { useEffect } from 'react';

function useCurrentUser() {
  const dispatch = useDispatch();

  return { currentUser };
}

export default useCurrentUser;
