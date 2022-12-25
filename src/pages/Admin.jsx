import React from 'react';
import { Button } from '../component/AuthForm';
import { useAuth } from '../auth/AuthContext ';
import BackgroundAnimation from '../component/BackgroundAnimation';
import '../style/admin.css';

function Admin(props) {
  const { setAuthTokens } = useAuth();

  function logOut() {
    setAuthTokens();
  }

  return (
    <div className="admin">
      <BackgroundAnimation />
      <div>Admin Page</div>
      <Button onClick={logOut}>Log out</Button>
    </div>
  );
}

export default Admin;
