import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';


function HeroSection() {
    return (
        <div className = 'hero-container'>
            <h1>Poti adauga si tu, o reteta!</h1>
            <p>Ce mai astepti?</p>
            <div className = "hero-btns">
            <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>
                    Continua!
                </Button>
                <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large'>
                    Arunca o privire la alte retete!
                </Button>
            </div>
        </div>
    )
}

export default HeroSection
