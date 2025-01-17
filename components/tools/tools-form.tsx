import React from 'react'
import './tools.css'
export const ToolsForm = () => {
    return (
        <>
            <div className='together-tools'>
                <div className='text-tool'>
                    <button className='bold' name="button-bold">Bold</button>
                    <button className='italic' name="button-italic">Italic</button>
                    <button className='underline' name="button-underline">Underline</button>
                </div>
                <div className='text-design'>
                    <button className='color' name="button-colors">color (limited)</button>
                    <button className='highlight' name="button-highlight">Highlight (limited)</button>
                    <button className='size' name="button-size">Size</button>
                </div>
            </div>
        </>
    )
}