import React from 'react';
import "./Footer.scss";

function Footer() {

    return (
        <div id="footer">
            <div className="footer-top">
                <div className='social'>
                    <a href='https://www.facebook.com/profile.php?id=100000735868251' target="_blank">
                        <h3>Facebook</h3>
                    </a>
                    <a href='https://www.instagram.com/koryun_khachkalyan/' target="_blank">
                        <h3>Instagram</h3>
                    </a>
                </div>
                <h3>+374 (98) 909 532</h3>
            </div>
            <p >Created by Sosi &#169;  2023</p>
        </div>
    )
}

export default Footer;