// About.jsx
import React from 'react';
import './About.css';
import HeaderFooter from '../Components/HeaderFooter';
import profile1 from "../Components/Images/lafaiete2.jpeg";
import profile2 from "../Components/Images/natan.jpeg";

export default function About() {
  return (
    <div>
      <div className="container">
        <div className="profile-container">
          <img src={profile1} alt="Profile Lafaiete" className="profile" />
          <div className="link-container">
            <a href="#">Lafaite Santos</a>
          </div>
        </div>
        <div className="profile-container">
          <img src={profile2} alt="Profile Natan" className="profile" />
          <div className="link-container">
            <a href="#">Natan Simoes</a>
          </div>
        </div>
      </div>
      <h1>
        About
      </h1>
      <p className='about-paragraph'>
        Bem-vindo ao To-Do App! Somos apaixonados por produtividade e organização. Nosso objetivo é simplificar sua vida, fornecendo uma plataforma intuitiva para gerenciar suas tarefas diárias. Com uma interface amigável e recursos poderosos, estamos aqui para ajudá-lo a alcançar seus objetivos de maneira eficiente. Junte-se a nós nessa jornada para uma vida mais produtiva e equilibrada!
      </p>
      <HeaderFooter />
    </div>
  );
}
