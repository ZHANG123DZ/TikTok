import { useEffect, useState } from 'react';

import styles from './Home.module.scss';
import Login from '../Login';
import Register from '../Register';
import DivModalContainer from '../../component/DivModalContainer';

function Home() {
  const [activeForm, setActiveForm] = useState(null);

  useEffect(() => {
    console.log(Boolean(activeForm));
    const modalRoot = document.querySelector('.DivModalContainer');
    if (activeForm) modalRoot.style.zIndex = '300';
    else modalRoot.style.zIndex = '-300';
  }, [activeForm]);

  return (
    <div className={styles.MainContent}>
      <div>
        {!activeForm ? (
          <button
            className={styles.topRightLoginButton}
            onClick={() => setActiveForm('login')}
          >
            <div className="TUXButton_label">Login</div>
          </button>
        ) : (
          <DivModalContainer>
            {activeForm === 'login' ? (
              <Login
                switchToRegister={() => setActiveForm('register')}
                onClose={() => setActiveForm(null)}
              />
            ) : (
              <Register
                switchToLogin={() => setActiveForm('login')}
                onClose={() => setActiveForm(null)}
              />
            )}
          </DivModalContainer>
        )}
      </div>
    </div>
  );
}

export default Home;
