import React from 'react'
import './header.css'


import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
export const HeaderForm = (): any => {


    return (
        <>
            <div className='header'>
                <div className='logo-title'>
                    <h1>FREE PDF/WORD</h1>
                </div>
                <div className='header-saving'>
                    {/*<button className='pdf-save' >Save as PDF</button>
                    <button  className='word-save'>Save as Word</button>*/}
                    <Stack spacing={2} direction="row" className='options-save-as'>
                        {/* need add the function save/donwload as PDF or word */}
                        <Button className='pdf-save' variant="outlined" onClick=""
                            sx={{
                                color: 'lightgreen', // Text color
                                borderColor: 'lightgreen', // Border color
                                '&:hover': {
                                    backgroundColor: 'rgba(144, 238, 144, 0.1)', // Light green background on hover
                                    borderColor: 'lightgreen', // Maintain border color on hover
                                },
                            }}>Save as PDF</Button>
                        <Button className='word-save' variant="outlined" onClick=""
                            sx={{
                                color: 'lightgreen', 
                                borderColor: 'lightgreen',
                                '&:hover': {
                                    backgroundColor: 'rgba(144, 238, 144, 0.1)', 
                                    borderColor: 'lightgreen', 
                                },
                            }}>Save as Word</Button>
                    </Stack>
                </div>
            </div>
        </>
    )
}
//onClick={triggerPdfDownload}