import React from 'react';
import './Contact.css';
import { Link } from 'react-router-dom';

const Contact = () => {
    return (
      <div className="contact-container">  {/* Add this class here */}
        <h1>Contact Us</h1>
        <p>If you have any questions, comments, or feedback, we'd love to hear from you! Please reach out to us using the form below:</p>
        <form>
          <label>Name:</label>
          <input type="text" name="name" />
          <br />
          <label>Email:</label>
          <input type="email" name="email" />
          <br />
          <label>Message:</label>
          <textarea name="message"></textarea>
          <br />
          <button type="submit">Submit</button>
        </form>
        <h2>Our Office</h2>
        <p>123 Main Street<br />Anytown, USA<br />Phone: (123) 456-7890<br />Email: info@ourwebsite.com</p>
        <h2>Follow Us</h2>
        <ul>
          <li><a href="https://www.facebook.com">Facebook</a></li>
          <li><a href="https://www.twitter.com">Twitter</a></li>
          <li><a href="https://www.instagram.com">Instagram</a></li>
          <li><a href="https://www.linkedin.com">LinkedIn</a></li>
        </ul>
        <Link to="/" className="homebutton">Home</Link>
        <Link to="/About" className="homebutton2">About</Link>
      </div>
    );
  }

export default Contact;
