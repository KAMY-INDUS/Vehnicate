import React from 'react';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import { auth, GoogleAuthProvider, GithubAuthProvider } from '@/firebaseConfig';

const uiConfig = {
  signInSuccessUrl: '/',
  signInOptions: [GoogleAuthProvider.PROVIDER_ID, GithubAuthProvider.PROVIDER_ID],
};

const LoginPage = () => {
  return (
    <section id='login'>
      <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={auth} />
    </section>
  );
};

export default LoginPage;
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, GithubAuthProvider } from 'firebase/auth';
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth, GoogleAuthProvider, GithubAuthProvider };