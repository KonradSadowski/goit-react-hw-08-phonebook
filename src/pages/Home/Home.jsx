import React from 'react';
import { useAuth } from '../../hooks/useAuth';
import css from './Home.module.css';
const Home = () => {
  const { isLoggedIn } = useAuth();
  return isLoggedIn ? (
    <div className={css.container}>
      <h1 style={css.title}>
        You are logged in! Please use the navigation bar to navigate around.
      </h1>
    </div>
  ) : (
    <div className={css.container}>
      <h1 style={css.title}>
        Welcome! Please log in or sign up to get started.
      </h1>
    </div>
  );
};
export default Home;
