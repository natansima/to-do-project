import React from 'react';
import './HomePage.css'; 
import HeaderFooter from '../Components/HeaderFooter';

export default function Homepage() {
  return (
    <div >
      <div className="home-wrapper">

      <h1>Welcome to<br></br>your best productive tool</h1>
      <br>
      </br>

      <blockquote>
        <p className="p-home-page">"Everyone needs a single, reliable, organized to-do list and note-taking system."</p>
          <footer className="a-home"><a href="https://edition.cnn.com/cnn-underscored/health-fitness/time-management-tips" target="_blank">CNN</a></footer> 
      </blockquote>
      <blockquote>
        <p className="p-home-page">"There is scientific evidence that the act of planning activities through to-do lists reduces the burden on the brain."</p>
          <footer className="a-home"><a href="https://edition.cnn.com/cnn-underscored/health-fitness/time-management-tips" target="_blank">Forbes</a></footer>  
      </blockquote>
      <blockquote>
        <p className="p-home-page"> "Experts say that organizing your responsibilities in a digestible way can instantly make you more productive."</p>
          <footer className="a-home"><a href="https://edition.cnn.com/cnn-underscored/health-fitness/time-management-tips" target="_blank">Time</a></footer> 
      </blockquote>
      
      
      
      </div>
      <HeaderFooter />
    </div>
  );
}