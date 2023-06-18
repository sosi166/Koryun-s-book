import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import "./Contact.scss";

function Contact() {

    const ref = useRef();
    const [success, setSuccess] = useState(null);
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");

    const handleSubmit = e => {
        e.preventDefault()
        if (name !== "" && phone !== "") {
                 emailjs.sendForm(/*--------*/ ref.current, /*------*/) 
                .then((result) => {
                    console.log(result.text);
                    setSuccess(true);
                    setName("");
                    setPhone("");
                    setTimeout(function () {
                        setSuccess(null)
                    }, 6000);
                }, (error) => {
                    console.log(error.text);
                    setSuccess(null);
                });
        } else {
            setSuccess(false)
            setTimeout(function () {
                setSuccess(null)
            }, 10000);
        }
    }

    return (
        <div id="contact">
            <h1>Անբացահայտ լռություն</h1>
            <h4>Գիրքն արժե 5500 դրամ</h4>
            <p>{success === false && "Լրացրե՛ք բոլոր դաշտերը :)"}</p>
            <form
                ref={ref}
                onSubmit={handleSubmit}
            >
                <div className="inputs">
                    <input
                        placeholder="Անուն"
                        name="name"
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
                    <input
                        placeholder="Հեռախոսահամար"
                        name="phone"
                        value={phone}
                        onChange={e => setPhone(e.target.value)}
                    />
                </div>
                <button type="submit">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    Պատվիրել</button>
            </form>
            <p>{success && "Պատվերն ընդունված է, շնորհակալություն :)"}</p>
        </div>
    )
}

export default Contact;