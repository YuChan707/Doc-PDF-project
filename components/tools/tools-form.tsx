import React, { useState } from 'react';
import './tools.css';
import ToggleButton from 'react-bootstrap/ToggleButton';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import './style'

//nav bar
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

export const ToolsForm = () => {
    const [value, setValue] = useState([1, 3]);
    const handleChange_basic = (val) => setValue(val);
    const handleChange_decoration = (val) => setValue(val);

    //values size
    const [size, setSize] = useState("");
    const [highlight, setHighlight] = useState("");
    const [color, setColor] = useState("");

    const handleOptionSelectSize = (selectedOption) => {
        const [selectedSize] = selectedOption.split(" ");
        setSize(selectedSize);
    };
    const handleOptionSelectHighlight = (selectedOption) => {
        const [selectedhighlight] = selectedOption.split(" ");
        setHighlight(selectedhighlight);
    };
    const handleOptionColor = (selectedOption) => {
        const [selectedColor] = selectedOption.split(" ");
        setColor(selectedColor);
    };

    return (
        <>
            <div className='together-tools'>
                <div className='text-tool'>
                    <ToggleButtonGroup type="checkbox" value={value} onChange={handleChange_basic}>
                        <ToggleButton
                            id="bold"
                            value={1}
                            style={{ backgroundColor: '#476A77', color: 'white', border: 'none' }}
                        >
                            bold
                        </ToggleButton>
                        <ToggleButton
                            id="italic"
                            value={2}
                            style={{ backgroundColor: '#517982', color: 'white', border: 'none' }}
                        >
                            italic
                        </ToggleButton>
                        <ToggleButton
                            id="underline"
                            value={3}
                            style={{ backgroundColor: '#76a0aa', color: 'white', border: 'none' }}
                        >
                            underline
                        </ToggleButton>

                    </ToggleButtonGroup>
                </div>
                <div className='text-design'>
                    <ToggleButtonGroup type="checkbox" value={value} onChange={handleChange_decoration}>

                        {/*color (text) */}
                    <Navbar
                            style={{ backgroundColor: '#76a0aa', color: 'white', border: 'none', borderRadius: '5px' }}>
                            
                            <Container>
                                <NavDropdown title="Color" className="nav-dropdown"
                                    style={{ borderRadius: '5px', width: '25%', textAlign: 'center' }}>
                                    {/*Sizes */}
                                    <NavDropdown.Item eventKey="black" onClick={() => handleOptionSelectHighlight("black")}
                                        className="select-value"
                                        style={{ backgroundColor: '#a2ab74', color: 'white', border: 'none' }}> Black</NavDropdown.Item>
                                    <NavDropdown.Item eventKey="red" onClick={() => handleOptionSelectHighlight("red")}
                                        style={{ backgroundColor: '#c2c8a4', color: 'white', border: 'none' }}> Red</NavDropdown.Item>
                                    <NavDropdown.Item eventKey="blue" onClick={() => handleOptionSelectHighlight("blue")}
                                        style={{ backgroundColor: '#a2ab74', color: 'white', border: 'none' }}> Blue</NavDropdown.Item>
                                </NavDropdown>
                            </Container>
                        </Navbar>
                    {/*highlight (color) */}
                    <Navbar
                            style={{ backgroundColor: '#517982', color: 'white', border: 'none', borderRadius: '5px' }}>
                            
                            <Container>
                                <NavDropdown title="Higlight" className="nav-dropdown"
                                    style={{ borderRadius: '5px', width: '25%', textAlign: 'center' }}>
                                    {/*Sizes */}
                                    <NavDropdown.Item eventKey="yellow" onClick={() => handleOptionSelectHighlight("yellow")}
                                        className="select-value"
                                        style={{ backgroundColor: '#a2ab74', color: 'white', border: 'none' }}> Yellow</NavDropdown.Item>
                                    <NavDropdown.Item eventKey="light-green" onClick={() => handleOptionSelectHighlight("light-green")}
                                        style={{ backgroundColor: '#c2c8a4', color: 'white', border: 'none' }}> Light green</NavDropdown.Item>
                                    <NavDropdown.Item eventKey="light-pink" onClick={() => handleOptionSelectHighlight("light-pink")}
                                        style={{ backgroundColor: '#a2ab74', color: 'white', border: 'none' }}> Ligh pink</NavDropdown.Item>
                                </NavDropdown>
                            </Container>
                        </Navbar>
                        {/*size */}
                        <Navbar
                            style={{ backgroundColor: '#476A77', color: 'white', border: 'none', borderRadius: '5px' }}>
                            
                            <Container>
                                <NavDropdown title="Size" className="nav-dropdown"
                                    style={{ borderRadius: '5px', width: '25%', textAlign: 'center' }}>
                                    {/*Sizes */}
                                    <NavDropdown.Item eventKey="10" onClick={() => handleOptionSelectSize("10")}
                                        className="select-value"
                                        style={{ backgroundColor: '#a2ab74', color: 'white', border: 'none' }}> 10</NavDropdown.Item>
                                    <NavDropdown.Item eventKey="11" onClick={() => handleOptionSelectSize("11")}
                                        style={{ backgroundColor: '#c2c8a4', color: 'white', border: 'none' }}> 11</NavDropdown.Item>
                                    <NavDropdown.Item eventKey="12" onClick={() => handleOptionSelectSize("12")}
                                        style={{ backgroundColor: '#a2ab74', color: 'white', border: 'none' }}> 12</NavDropdown.Item>
                                </NavDropdown>
                            </Container>
                        </Navbar>

                    </ToggleButtonGroup>
                </div>
            </div>
        </>
    )
}

/*
<div>
<button className='bold' name="button-bold">Bold</button>
<button className='italic' name="button-italic">Italic</button>
<button className='underline' name="button-underline">Underline</button>
</div>
                <div className='text-design'>
                
                    <button className='color' name="button-colors">color (limited)</button>
                    <button className='highlight' name="button-highlight">Highlight (limited)</button>
                    <button className='size' name="button-size">Size</button>
                </div>
*/
/*
                        <ToggleButton
                            id="color"
                            className='size' name="button-size"
                            value={1}
                            style={{ backgroundColor: '#476A77', color: 'white', border: 'none' }}>
                            size
    </ToggleButton>
                    <ToggleButtonGroup type="checkbox" value={value} onChange={handleChange_decoration}>
                        <ToggleButton
                            id="color"
                            value={1}
                            className='color'
                            name="button-colors"
                            style={{ backgroundColor: '#76a0aa', color: 'white', border: 'none' }}>
                            color
                        </ToggleButton>
                        <ToggleButton
                            id="color"
                            value={1}
                            className='highlight'
                            name="button-highlight"
                            style={{ backgroundColor: '#517982', color: 'white', border: 'none' }}>
                            Highlight
                        </ToggleButton>
*/