import React from 'react';
import author from '../images/author.jpg';
import koryun1 from '../images/koryun1.jpg';
import koryun2 from '../images/koryun2.jpg';
import "./AuthorAbout.scss"

function AuthorAbout() {

    return (
        <div id="aboutAuthor">
            <img src={author} alt="Author photo"/>
            <div>
                <img src={koryun1} alt="About author" />
                <img src={koryun2} alt="About author" />
            </div>
        </div>   
    )
}

export default AuthorAbout;