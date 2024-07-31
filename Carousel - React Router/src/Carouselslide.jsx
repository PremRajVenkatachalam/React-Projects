import React, { useEffect, useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import image1 from './Images/image1.jpg';
import image2 from './Images/image2.jpg';
import image3 from './Images/image3.jpg';
import { Link } from 'react-router-dom';
import './Carouselslide.css';

const images = [image1, image2, image3];

function Carouselslide() {
  const [index, setIndex] = useState(0);
  const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(prevIndex => (prevIndex + 1 === images.length ? 0 : prevIndex + 1));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      <nav className="navbar">
        <h2 className="navbar-heading">CAROUSEL</h2>
        <ul>
          <li><Link to='/about'>About</Link></li>
          <li><Link to='/contact'>Contact</Link></li>
        </ul>
      </nav>

      <div className="carousel-container">
        <Carousel activeIndex={index} onSelect={(selectedIndex) => setIndex(selectedIndex)}>
          {images.map((image, index) => (
            <Carousel.Item key={index}>
              <img src={image} alt={`Slide ${index + 1}`} />
            </Carousel.Item>
          ))}
        </Carousel>
      </div>

      <div className="center-container">
        <div className="para">
          <h2>Carousels</h2>
          <p>Enhanced User Experience: Carousels allow you to showcase multiple pieces of content (such as images, text, or videos) in a compact space, enhancing the user experience by providing interactive and engaging elements.</p>
          <p>Content Organization: Carousels help in organizing content efficiently, making it easier for users to navigate through different sections without feeling overwhelmed.</p>
          <p>Visual Appeal: With smooth transitions and animations, carousels add visual appeal to the website, making it look modern and professional.</p>
          <p>Highlight Key Information: Use carousels to highlight key information, promotions, or featured content. This draws the user's attention to important sections of your website.</p>
          <p>Responsive Design: Carousels can be made responsive, ensuring they look good on various devices, including desktops, tablets, and mobile phones.</p>
          <p>Customizability: Carousels are highly customizable. You can control the transition effects, speed, navigation controls (arrows, dots), and other design aspects to match your site's theme.</p>
          <p>User Interaction: Carousels allow users to interact with the content by manually navigating through the slides. This interactive element keeps users engaged.</p>
          <p>Dynamic Content: Carousels can display dynamic content, such as latest blog posts, featured products, or user-generated content, keeping your site content fresh and up-to-date.</p>
          <p>Accessibility: Ensure your carousel is accessible to all users, including those using screen readers. Use appropriate ARIA roles and properties to make it inclusive.</p>
          <p>Performance Considerations: Optimize images and content within the carousel to ensure it does not negatively impact the page load time and overall performance of the website.</p>
          <p>SEO Implications: Be mindful of SEO implications. Make sure that important content within the carousel is crawlable by search engines and not hidden behind JavaScript.</p>
          <p>Fallback Content: Provide fallback content for users who may have JavaScript disabled, ensuring that the carousel's key information is still accessible.</p>
        </div>
      </div>

      {showScrollButton && (
        <button className="scroll-to-top" onClick={scrollToTop}>
          Scroll to Top
        </button>
      )}
    </>
  );
}

export default Carouselslide;