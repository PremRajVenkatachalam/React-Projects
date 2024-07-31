import React from 'react';
import './About.css';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="about-container"> {/* Added className here */}
      <h1>About Us</h1>
      <p>Welcome to our website! We are a team of passionate individuals dedicated to providing the best services to our users. Our goal is to create a user-friendly platform that meets the needs of our diverse audience.</p>
      <p>Founded in 2022, we have quickly grown to become a trusted name in our industry. Our commitment to excellence and innovation drives us to continually improve and expand our offerings.</p>
      <p>We believe in the power of technology to transform lives and are excited to be at the forefront of this exciting journey. Thank you for visiting our site and being a part of our community.</p>
      <h2>Our Team</h2>
      <ul>
        <li><strong>John Doe</strong> - CEO & Founder</li>
        <li><strong>Jane Smith</strong> - Chief Technology Officer</li>
        <li><strong>Emily Johnson</strong> - Head of Marketing</li>
        <li><strong>Michael Brown</strong> - Lead Developer</li>
      </ul>
      <Link to="/" className="home-button">Home</Link>
      <Link to="/Contact" className="home-button2">Contact</Link>
    </div>
  );
}

export default About;