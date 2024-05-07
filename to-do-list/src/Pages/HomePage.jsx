import React from 'react';
import './HomePage.css'; 
import HeaderFooter from '../Components/HeaderFooter';

export default function Homepage() {
  return (
    <div>
      <div className="home-wrapper">
        <h1>Welcome to</h1>
        <h1>To Do List</h1>
      </div>
      
     
      <HeaderFooter />
    </div>
  );
}
