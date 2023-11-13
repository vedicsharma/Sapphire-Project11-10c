import React, {useState} from 'react';
import {CSSTransition} from 'react-transition-group';
 
function StudyList({studyList, updateStudyList}) {
    const [open, setOpen] = useState(false);

    function DropDownButton(props){
        return (
            <li className='study-list'>
                <a href = "#" className = "icon-button" onClick={() => setOpen(!open)}>
                    {props.icon}
                </a>
                {open && props.children}
            </li>
        )
    }

    function DropDownMenu(){
        function DropDownStudies(props){
            return(
                <a href = "#" className='dropdown-study'>
                    <span className='icon-button'>{props.leftIcon}</span>
                    {props.children}
                    <span className = "icon-right">{props.rightIcon}</span>
                </a>
            )
        }
        return (
            <div className='dropdown'>
            <ul>
          {studyList.map(study => (
            <li key={study.id}>{study.name}</li>
          ))}
        </ul>
          </div>
        )
    }

    return (
        <DropDownButton icon = "^">
            <DropDownMenu/>
        </DropDownButton>
    );
    
  }
  
  export default StudyList;