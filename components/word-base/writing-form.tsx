import React from 'react'
import './write.css'
import Button from 'react-bootstrap/Button'

export const WritingForm = ({ setInformation, information }) => {
  const handleChangeInput = (e) => {
    setInformation(e.target.value);
  };

  return (
    <>
      <div className="base-writing">
        <textarea
          className="input-writing"
          onChange={handleChangeInput}
          rows={10}
          cols={50}
          style={{
            width: '100%',
            padding: '10px',
            fontSize: '16px',
            height: '100%',
          }}
          placeholder="Write something" // Placeholder text
        />
        <div>
          <button>show preview</button>
        </div>
      </div>
    </>
  );
};


