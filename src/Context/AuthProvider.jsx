import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from 'firebase/auth';
import { auth } from '../../fairbase.config';

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // ✅ Create User with optional name and photoURL
  const createUser = async (
    email,
    password,
    name = 'New User',
    photoURL = 'https://i.pravatar.cc/150?img=3'
  ) => {
    setLoading(true);
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const createdUser = userCredential.user;

      // ✅ Set default or provided profile data
      await updateProfile(createdUser, {
        displayName: name,
        photoURL: photoURL,
      });

      // ✅ Refresh the user state
      setUser({ ...auth.currentUser });
      return userCredential;
    } catch (error) {
      console.error('Error creating user:', error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  // ✅ Sign In User
  const sinInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // ✅ Google Sign-In
  const googleSignIn = () => {
    setLoading(true);
    const provider = new GoogleAuthProvider();
    return signInWithPopup(auth, provider);
  };

  // ✅ Sign Out User
  const signOutUser = () => {
    setLoading(true);
    return signOut(auth);
  };

  // ✅ Update User Profile
  const updateUser = updatedData => {
    setLoading(true);
    return updateProfile(auth.currentUser, updatedData)
      .then(() => {
        setUser({ ...auth.currentUser });
      })
      .finally(() => setLoading(false));
  };

  // ✅ Detect Auth State Changes
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, currentUser => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => unSubscribe();
  }, []);

  const userInfo = {
    user,
    setUser,
    loading,
    setLoading,
    createUser,
    sinInUser,
    signOutUser,
    updateUser,
    googleSignIn,
  };

  return <AuthContext value={userInfo}>{children}</AuthContext>;
};

export default AuthProvider;
