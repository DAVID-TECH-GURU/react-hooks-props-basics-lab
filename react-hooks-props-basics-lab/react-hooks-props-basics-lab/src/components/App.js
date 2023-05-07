import React from 'react';
import NavBar from './NavBar';
import Home from './Home';
import About from './About';

function App() {
  const user = {
    name: 'John Doe',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.',
    github: 'https://github.com/johndoe',
    linkedin: 'https://www.linkedin.com/in/johndoe'
  }

  return (
    <div>
      <NavBar />
      <Home user={user} />
      <About bio={user.bio} github={user.github} linkedin={user.linkedin} />
    </div>
  );
}

export default App;
