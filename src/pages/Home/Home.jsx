import React from 'react';

const styles = {
  container: {
    minHeight: 'calc(100vh - 50px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontWeight: 500,
    fontSize: 48,
    textAlign: 'center',
  },
};
export const Home = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>
        Welcome in your phonebook! Please log in to your account.
      </h1>
    </div>
  );
};
