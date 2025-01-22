
import React, { useState } from 'react'
import { WritingForm } from '../components/word-base/writing-form'
import { HeaderForm } from './header/header-form';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ToolsForm } from './tools/tools-form'


export const AppTogether = () => {
    const [information, setInformation] = useState('');
    return (
        <>
            <header>
                <HeaderForm setInformation={setInformation} information={information} />
            </header>
            <ToolsForm />
            <WritingForm setInformation={setInformation} information={information} />
        </>
    )
}

