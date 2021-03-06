import React, { useEffect, useReducer } from 'react';
import { authReducer } from './components/auth/authReducer';
import { AuthContext } from './components/auth/authContext';
import { AppRouter } from './routes/AppRouter';

const init = () => {
  return JSON.parse(localStorage.getItem('user')) || {logged: false}
}

export const App = () => {
  const [user, dispatch] = useReducer(authReducer, {}, init);
  useEffect(()=> {
    if (!user) return;
    localStorage.setItem('user', JSON.stringify(user))
  }, [user]);

  useReducer
  return (
    <AuthContext.Provider value={{dispatch, user}}>
      <AppRouter/>
    </AuthContext.Provider>
  )
}
