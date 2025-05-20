import React, { useState } from 'react';

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const userInfo = {
    user,
    setUser,
  };
  return <AuthContext value={userInfo}>{children}</AuthContext>;
};

export default AuthProvider;
