// == Import npm
import React, {useState} from 'react';
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import './styles.scss';

// == Composant
const QuestionBox = ({question, response}) => {
  const [open, setOpen] = useState(false);
  console.log('salut');
  const changeState = () => {
    setOpen(!open);
    if (open) {
      const arrowElement = document.querySelector('.arrow');
      arrowElement.classList.add('validate');
    }
  }
  return(
  <div className="question-box">
    <ul className="question-box__list">
      <li className={open ? "question-box__list--question active" : 'question-box__list--question'} onClick={changeState}>
      {question} <span className={open ? "arrow__validate" : 'arrow'} >></span>
      <CSSTransition
        in={open}
        timeout={100}
        classNames="alert"
        unmountOnExit
        onEnter={() => setOpen(true)}
        onExited={() => setOpen(false)}
      >
       <ul className="question-box__list--response">
          <li>
          {response}
          </li>
        </ul>
      </CSSTransition>
      </li>
    </ul>

  </div>
)};

// == Export
export default QuestionBox;

