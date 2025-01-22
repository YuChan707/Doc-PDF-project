import React, { useState } from 'react'
import './write.css'
import Button from 'react-bootstrap/Button'

import {DisplayComponent} from './display-form.tsx'

export const WritingForm = ({ setInformation, information }) => {
  //to be able to display the preview
  const [showDisplay, setShowDisplay] = useState(false);
  const ShowComponents = () => {
    setShowDisplay(!showDisplay);
  };

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
          <Button
          onClick={ShowComponents}
          >{showDisplay ? "Hide Display" : "Show Display"}</Button>
          <div className="showPDF">
          {showDisplay && <DisplayComponent information={information} />}
          </div>
        </div>
      </div>
    </>
  );
};
{/*onClick={}*/}

