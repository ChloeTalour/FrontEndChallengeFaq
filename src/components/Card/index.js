// == Import npm
import React from 'react';
import imgMobile from 'src/assets/images/illustration-woman-online-mobile.svg'
import shadow from 'src/assets/images/bg-pattern-mobile.svg';
import box from 'src/assets/images/illustration-box-desktop.svg'
import './styles.scss';
import QuestionBox from './questionBox';
import data from 'src/assets/data/question'

// == Composant
const Card = () => {
  const allData = data.map((elt) => (
    <QuestionBox 
      question={elt.question}
      response={elt.response}
      key={elt.question}
    />
  ));
  return(
  <div className="card">
     <img src={imgMobile} alt="" className="card__firstImage"/>
     <img src={shadow} alt="" className="card__secondImage"/>
     <img src={box} alt="boxShadow" className="card__box-desktop"/>
   <h1 className="card__title">FAQ</h1>
   {allData}
  </div>
)};

// == Export
export default Card;
