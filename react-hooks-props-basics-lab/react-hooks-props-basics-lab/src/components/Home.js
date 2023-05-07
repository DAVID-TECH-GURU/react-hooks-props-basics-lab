import React from 'react';

function Home(props) {
  const { user } = props;

  return (
    <div>
      <h1>Welcome, {user.name}!</h1>
      <p>This is your home page.</p>
    </div>
  );
}

export default Home;
