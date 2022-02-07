import React from 'react';
import { Nav2 } from '../../components';

const About = () => {
  return (
    <div>
        <h1 className='glow'>ABOUT</h1>
        <h3> about info</h3>
        <Nav2 link={'/menu'} />
    </div>);
};

export default About;
