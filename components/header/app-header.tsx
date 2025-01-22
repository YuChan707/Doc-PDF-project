import React, { useState } from 'react'
import { HeaderForm } from './header-form'

export const AppHeader = () => {
  const [information, setInformation] = useState('');
  return (
    <>
      <HeaderForm setInformation={setInformation} information={information}/>
    </>
  )
}