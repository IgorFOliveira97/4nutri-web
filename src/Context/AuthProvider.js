import { createContext } from 'react';
import useAuth from './hooks/useAuth';

const Context = createContext();

function AuthProvider({ children }) {
  const { loading, authenticated, handleLogin, userData } = useAuth();
  return (
    <Context.Provider value={{ loading, authenticated, handleLogin, userData }}>
      {children}
    </Context.Provider>
  );
}

export { Context, AuthProvider };
