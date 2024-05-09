import React from 'react';
import './HomePage.css'; 
import HeaderFooter from '../Components/HeaderFooter';

export default function Homepage() {
  return (
    <div >
      <div className="home-wrapper">
        <h1>Welcome to your ToDo List</h1>
        <p> "Everyone needs a single, reliable, organized to-do list and note-taking system."</p>
          <a className='a-home' href="https://edition.cnn.com/cnn-underscored/health-fitness/time-management-tips" target="_blank">CNN</a> 
        <p>"There is scientific evidence that the act of planning activities through to-do lists reduces the burden on the brain."</p>
          <a className='a-home' href="https://edition.cnn.com/cnn-underscored/health-fitness/time-management-tips" target="_blank">Forbes</a>    
        <p> "Experts say that organizing your responsibilities in a digestible way can instantly make you more productive."</p>
          <a className='a-home' href="https://edition.cnn.com/cnn-underscored/health-fitness/time-management-tips" target="_blank">Time</a> 
      </div>
      <HeaderFooter />
    </div>
  );
}