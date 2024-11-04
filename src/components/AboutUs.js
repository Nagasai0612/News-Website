import React from 'react';
import './AboutUs.css'; // Optional: Import CSS for styling

const AboutUs = () => {
  return (
    <div className="about-container">
      <h1>About Us</h1>
      <p>
        Welcome to News24X7, your go-to source for the latest news from around the globe. Our mission is to provide accurate, timely, and comprehensive news coverage to keep you informed about the world around you.
      </p>
      
      <h2>Our Mission</h2>
      <p>
        At News24X7, we believe that informed citizens are empowered citizens. We strive to deliver unbiased news, in-depth analysis, and insightful commentary on a variety of topics, including politics, business, technology, health, and entertainment.
      </p>

      <h2>Meet Our Team</h2>
      <p>
        Our dedicated team of journalists, editors, and content creators work tirelessly to bring you the latest updates. With years of experience in the industry, we are committed to maintaining the highest standards of journalism.
      </p>
      <ul className="team-list">
        <li>Nagasai - Editor-in-Chief</li>
        <li>Google- Senior Journalist</li>
        <li>Emily - News Analyst</li>
        <li>Michael - Technology Correspondent</li>
      </ul>

      <h2>Contact Us</h2>
      <p>
        We value your feedback and are here to answer any questions you may have. Feel free to reach out to us through our contact page or follow us on our social media channels.
      </p>
    </div>
  );
};

export default AboutUs;
