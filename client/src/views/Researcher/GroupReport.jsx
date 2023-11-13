import NavBar from '../../components/NavBar/NavBar';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './GroupReport.less';
import AddStudy from './components/AddStudy';
import StudyList from './components/StudyList';
import Popup from 'reactjs-popup';

export default function GroupReport(props) {
  const navigate = useNavigate();
  const [studyList, setStudyList] = useState([]);
  
  // State to hold the current study
  const [study, setStudy] = useState({
    id: '',
    name: '',
  });

  const updateStudyList = (newStudyList) => {
    setStudyList(newStudyList);
  }

  return (
    <div className='container nav-padding'>
      <NavBar />
      {/* <h1>Group Report</h1> */}
      <div className='menu-bar'>
        <div id='daily-report-header'>Studies</div>
        {/* Button to add a study */}
        <Popup trigger=
                {<button> Click to add study </button>} 
                modal nested>
                {
                    close => (
                        <div className='modal'>
                            <AddStudy 
                              newList = {studyList}
                              setNewList = {setStudyList}
                              updateStudyList = {updateStudyList}
                            />
                            <div>
                                <button onClick=
                                    {() => close()}>
                                        Close
                                </button>
                            </div>
                        </div>
                    )
                }
            </Popup>
        <StudyList
          studyList = {studyList}
          updateStudyList = {updateStudyList}
        />
        {/* Do we need a menu button to go back to report landing page?*/}
        <button
          id={'group-level-return'}
          className={`btn-${'primary'} btn-${'sm'}`}
          type='button'
          onClick={() => navigate('/report')}
        >
          Return to Dashboard
        </button>
      </div>
    </div>
  );
}
