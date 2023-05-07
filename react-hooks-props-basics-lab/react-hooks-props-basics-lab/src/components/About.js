import React from 'react';
import Links from './Links';

function About(props) {
  const { bio, github, linkedin } = props;

  return (
    <div>
      {bio && <p>{bio}</p>}
      <Links github={github} linkedin={linkedin} />
    </div>
  );
}

export default About;
