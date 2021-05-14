import React from 'react';
import './about.css'
import Reviews from '../reviews-component/reviews-component'
import Contact from '../contact-us/contact-us'

const About = () => (
  <div className="about">
    <Contact />
    <Reviews />
  </div>
);
export default About;
