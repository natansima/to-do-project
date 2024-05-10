// About.jsx
import React from 'react';
import './About.css';
import HeaderFooter from '../Components/HeaderFooter';
import profile1 from "../Components/Images/lafaiete2.jpeg";
import profile2 from "../Components/Images/natan.jpeg";
import giticon from "../Components/Images/github-icon.png";
import linkedin from "../Components/Images/linkedin-icon.png";

export default function About() {
  return (
    <div>
      <div className="container">
        <div className="profile-container">
          <img src={profile1} alt="Profile Lafaiete" className="profile" />
          <div className="link-container">
          <p style={{ fontSize: '20px', fontWeight: 'bold' }}>Lafaiete Santos</p>

            <div className="icon-container">
              <a href="https://github.com/lafaietes/" target="_blank">
                <img src={giticon} className='icon'/>

                
              </a>
              <a href="https://www.linkedin.com/in/lafaiete-santos-3885b7242/" target="_blank">
                <img src={linkedin} className='icon'/>
              </a>
            </div>
          </div>
        </div>
        <div className="profile-container">
          <img src={profile2} alt="Profile Natan" className="profile" />
          <div className="link-container">
            <p style={{ fontSize: '20px', fontWeight: 'bold' }}>Natan Simões</p>
            <div className="icon-container">
              <a href="https://github.com/natansima/" target="_blank">
                <img src={giticon} className='icon'/>
              </a>
              <a href="https://www.linkedin.com/in/natan-simoes12/" target="_blank">
                <img src={linkedin} className='icon'/>
              </a>
            </div>
          </div>
        </div>
      </div>
      <h1>About</h1>
      <p className='about-paragraph'>
        Welcome to the To-Do App! We are passionate about productivity and organization.<br></br>Our goal is to simplify your life by providing an intuitive platform to manage your daily tasks.<br></br>With a user-friendly interface and powerful features, we are here to help you achieve your goals efficiently.<br></br>Join us on this journey to a more productive and balanced life!
      </p>
      <HeaderFooter />
    </div>
  );
}
