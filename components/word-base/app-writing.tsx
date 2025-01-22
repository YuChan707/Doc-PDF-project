import React, { useState } from 'react'
import { WritingForm } from './writing-form'
//import { HeaderForm } from '../header/header-form';
export const AppWriting = () => {
  const [information, setInformation] = useState('');
  return (
    <>
      
      <WritingForm setInformation={setInformation} information={information}/>
    </>
  )
}
//<HeaderForm setInformation={setInformation} information={information}/>
