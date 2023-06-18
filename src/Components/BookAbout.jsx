import React from 'react';
import book4 from '../images/book4.jpg'
import book2 from '../images/book2.jpg'
import mariam1 from '../images/mariam1.jpg'
import mariam2 from '../images/mariam2.jpg'
import mariam3 from '../images/mariam3.jpg'
import "./BookAbout.scss"

function BookAbout() {

    return (
        <div id="aboutBook">
            <img src={book2} alt="photo about the book" />
            <img src={book4} alt="photo about the book" />
            <img src={mariam1} alt="photo about the book" />
            <img src={mariam2} alt="photo about the book" />
            <img src={mariam3} alt="photo about the book" />
        </div>
    )
}

export default BookAbout;