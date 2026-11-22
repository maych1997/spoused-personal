import React, {
  createContext,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';

export const AuthContext = createContext({
  user: null,
  profileCompleted: false,
  profileError: null,
  isLoading: true,
  markProfileCompleted: () => {},
  retryProfileCompletion: () => {},
});

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [profileCompleted, setProfileCompleted] = useState(false);
  const [profileError, setProfileError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const profileRequest = useRef(0);

  const loadProfileCompletion = useCallback(async currentUser => {
    const requestId = ++profileRequest.current;
    setUser(currentUser);
    setProfileCompleted(false);
    setProfileError(null);

    if (!currentUser) {
      setIsLoading(false);
      return;
    }

    setIsLoading(true);

    try {
      const snapshot = await database()
        .ref(`/users/${currentUser.uid}/profileCompleted`)
        .once('value');

      if (profileRequest.current === requestId) {
        setProfileCompleted(
          snapshot.val() === true || snapshot.val() === 'yes',
        );
      }
    } catch (error) {
      console.error('Failed to load profile completion status:', error);
      if (profileRequest.current === requestId) {
        setProfileError(error.message || 'Failed to load profile status.');
      }
    } finally {
      if (profileRequest.current === requestId) {
        setIsLoading(false);
      }
    }
  }, []);

  useEffect(() => {
    const unsubscribe = auth().onAuthStateChanged(loadProfileCompletion);
    return () => {
      profileRequest.current += 1;
      unsubscribe();
    };
  }, [loadProfileCompletion]);

  const retryProfileCompletion = () => {
    loadProfileCompletion(auth().currentUser);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        profileCompleted,
        profileError,
        isLoading,
        retryProfileCompletion,
        markProfileCompleted: setProfileCompleted,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
