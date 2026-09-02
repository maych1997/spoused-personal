import React, { createContext, useEffect, useState } from 'react';
import auth from '@react-native-firebase/auth';

export const AuthContext = createContext({
  user: null,
});

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth().onAuthStateChanged(setUser);

    return unsubscribe;
  }, []);

  return (
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  );
}
