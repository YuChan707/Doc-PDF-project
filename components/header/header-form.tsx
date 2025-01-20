import React from 'react'
import './header.css'
//import { triggerPdfDownload } from './PDF/toPDF-app';
export const HeaderForm = (): any => {

    const triggerPdfDownload = () => {
        // Add logic here to trigger PDF download, potentially using context
    }
    return (
        <>
            <div className='header'>
                <div className='logo-title'>
                    <h1>FREE PDF/WORD</h1>
                </div>
                <div className='header-saving'>
                    <button className='pdf-save' >Save as PDF</button>
                    <button className='word-save'>Save as Word</button>
                </div>
            </div>
        </>
    )
}
//onClick={triggerPdfDownload}