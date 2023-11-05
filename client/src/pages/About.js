import React from 'react'
import './About.css'
// import { Link } from 'react-router-dom'

const About = () =>  {

  const sneaker = 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/9f5d3ab4-98b4-44fe-9823-3b409603b520/dunk-low-retro-mens-shoes-M0t9Sv.png';

  return (
    <div className="About">
    <div className="flex-container">
      <div className="left-side">
        {/* <p>We are beyond e-commerce: we are a labor of love.</p> */}
        <h2>👋 Welcome to Kicks To Go!</h2>
        <p>Kicks To Go is  where sneaker culture and innovation come together. 
          We're not just an online store:  <br />
          we're your gateway to exclusive collaborations, curated collections, and a thriving sneaker community.</p>
      </div>
      <div className="right-side">
        <img src={ sneaker } alt="sneaker"/> 
      </div>
    </div>
  </div>
  );
};

export default About;
