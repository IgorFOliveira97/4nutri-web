import { createContext } from 'react';
import useAuth from './hooks/useAuth';

const Context = createContext();

function AuthProvider({ children }) {
  const { loading, authenticated, handleLogin, handleLogout, userData } =
    useAuth();
  return (
    <Context.Provider
      value={{ loading, authenticated, handleLogin, handleLogout, userData }}
    >
      {children}
    </Context.Provider>
  );
}

export { AuthProvider, Context };
