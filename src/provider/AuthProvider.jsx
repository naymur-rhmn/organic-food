import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "../authentication/firebase.config";

export const AuthContext = createContext();

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // google sign in
  const googleProvider = new GoogleAuthProvider();
  const googleSignIn = () => signInWithPopup(auth, googleProvider);

  // observer
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
      }
    });
    return () => unsubscribe();
  }, []);

  // logout
  const logOut = () => {
    signOut(auth).then(() => {
      setUser(null);
    });
  };

  const data = { googleSignIn, user, logOut };

  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
