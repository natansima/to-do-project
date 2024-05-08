import React from 'react';
import './HomePage.css'; 
import HeaderFooter from '../Components/HeaderFooter';

export default function Homepage() {
  return (
    <div>
      <div className="home-wrapper">
        <h1>Welcome to</h1>
        <h1>To Do List</h1>
        <p> "Everyone needs a single, reliable, organized to-do list and note-taking system" <a href="https://edition.cnn.com/cnn-underscored/health-fitness/time-management-tips" target="_blank">
        CNN Underscored
            </a> </p>
        
            <p> "There is scientific evidence that the act of planning activities through to-do lists reduces the burden on the brain." <a href="https://edition.cnn.com/cnn-underscored/health-fitness/time-management-tips" target="_blank">
        Forbes
            </a></p>
        
            <p> "Experts say that organizing your responsibilities in a digestible way can instantly make you more productive."  <a href="https://edition.cnn.com/cnn-underscored/health-fitness/time-management-tips" target="_blank">
        Time
            </a> </p>
       


      </div>
      
     
      <HeaderFooter />
    </div>
  );
}
