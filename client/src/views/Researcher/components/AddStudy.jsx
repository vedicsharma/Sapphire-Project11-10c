import React, {useState} from 'react';

function AddStudy({newList, setNewList, updateStudyList}) {
    const [studyID, setStudyID] = useState(0);
    const [studyName, setStudyName] = useState('');
    
    function addStudyFunc(){
        const newStudy = {
            id: studyID,
            name: studyName,
        }

        setNewList([...newList, newStudy]);

        updateStudyList([...newList, newStudy]);

        setStudyID('');
        setStudyName('');
    }
    
    return (
        <div>
          <h2>Add a Study</h2>
          <div>
            <label>Study ID:</label>
            <input
              type="text"
              value={studyID}
              onChange={(e) => setStudyID(e.target.value)}
            />
          </div>
          <div>
            <label>Study Name:</label>
            <input
              type="text"
              value={studyName}
              onChange={(e) => setStudyName(e.target.value)}
            />
          </div>
          <button onClick={addStudyFunc}>Add Study</button>
        </div>
      );
  }
  
  export default AddStudy;