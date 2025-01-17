import React, { useState } from 'react'
//import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';
//import {StyleSheet, TextInput} from 'react-native';
import './write.css'
import { useTextContext } from "./text-context";

const PLACEHOLDER_TEXT = "Write your document";
export const WritingForm = () => {
    //const [number, onChangeNumber] = React.useState('');
    const [text, setText] = useState('');

    /*
    const { text_, setText_ } = useTextContext();

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      setText(e.target.value);
    };
    */

    const handleChangeInput = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setText(event.target.value);
    };

    return (
        <>
            <div className='base-writing'>

                <textarea
                    className='input-writing'
                    value={text}
                    onChange={handleChangeInput}
                    rows={10} // Adjust the rows for height
                    cols={50} // Adjust the cols for width
                    style={{
                        width: '100%', // Optional to make it responsive
                        padding: '10px',
                        fontSize: '16px',
                        height:'100%'
                    }}
                    placeholder={PLACEHOLDER_TEXT}
                />
            </div>
        </>
    )
}