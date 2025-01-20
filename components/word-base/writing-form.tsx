import React from 'react';
import './write.css';
import { useTextContext } from '../header/text-context';

export const WritingForm: React.FC = () => {
  const { text, setText } = useTextContext(); // Access text and setText from context

  const handleChangeInput = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(event.target.value); // Update the context value with the user's input
  };

  return (
    <div className="base-writing">
      <textarea
        className="input-writing"
        value={text}
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
    </div>
  );
};
