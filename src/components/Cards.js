import React from 'react';
import CardItem from './CardItem';
import './Cards.css';
import sarme from './images/img-sarmale.jpg';
import mamaliga from './images/img-mamaliga.jpg';
import fasoleCiolan from './images/img-fasoleCiolan.jpg';

function Cards() {
    return (
        <div className = 'cards'>
            <h1>Arunca o privire la aceste retete!</h1>
            <div className = 'cards__container'>
                <div className = 'cards__wrapper'>
                    <ul className = 'cards__items'>
                    <CardItem
                        src= {sarme}
                        text = "Sarmale cu varza murata si smantana"
                        label = 'Sarmale'
                        path = '/retete'
                        />
                        <CardItem
                        src= {mamaliga}
                        text = "Mamaliga traditionala cu branza si smantana"
                        label = 'Mamaliga'
                        path = '/retete'
                        />
                        <CardItem
                        src= {fasoleCiolan}
                        text = "Fasole cu ciolan afumat"
                        label = 'Fasole cu ciolan'
                        path = '/retete'
                        />
                        
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards
