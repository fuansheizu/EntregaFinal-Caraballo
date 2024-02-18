import React from 'react'
import { useState } from "react";


const Contacts = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault ();
    }

    const handleName = (e) => {
        setName(e.target.value);
        console.log(e.target.value);
    }

    const handleEmail = (e) => {
        setEmail(e.target.value)
        console.log(e.target.value)
    }

    const handlePhone = (e) => {
        setPhone(e.target.value)
        console.log(e.target.value)
    }

    return (
    <div className="container">
        <h1 className="contacts-title">Contacto</h1>
    <form className="form" onSubmit={handleSubmit}>
        <input type="text" placeholder="ingresa tu nombre" value={name} onChange={handleName}/>
        <input type="email" placeholder="ingresa tu email" value={email} onChange={handleEmail}/>
        <input type="phone" placeholder="ingresa tu teléfono" value={phone} onChange={handlePhone}/>
        <button className="send" type="submit">Enviar</button>
    </form>
    </div>
    )
}

export default Contacts
