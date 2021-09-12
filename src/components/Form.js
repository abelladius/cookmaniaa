import React, { Component } from 'react'
import './Form.css'
export class Form extends Component {
    render() {
        return (
            <form>
                <div className = 'form-wrapper'>
                    <h1>Adauga o reteta!</h1>
                    <label className='title'>Titlul retetei: </label>
                    <input type='text' />
                    <label>Ingrediente necesare: </label>
                    <input type='text' />
                    <label>Timpul de preparare: </label>
                    <input type='text' />
                    <label>Modul de preparare: </label>
                    <textarea rows='4' cols="50"></textarea>
                    <button className = "btn" type='submit'>Adauga</button>
                    


                </div>
            </form>

            
        )
    }
}

export default Form
