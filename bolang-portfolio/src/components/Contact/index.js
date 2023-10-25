import './index.scss';
import Loader from 'react-loaders';
import { useState, useEffect, useRef } from 'react';
import AnimatedLetters from '../AnimatedLetters';
import emailjs from '@emailjs/browser'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'

const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    const refForm = useRef();
    const pos = [3.8708030, 11.5207314];

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 3000)
    }, []);

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            'bolang_email',
            'portfolio_contact_form',
            refForm.current,
            'ii_6Ii48gBYlvgiPP'
        ).then(
            () => {
                alert('Message successfully sent!')
                window.location.reload(false)
            },
            () => {
                alert('Failed to send the message, please try again')
            }
        )
    }

    return (
        <>
        <div className='container contact-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters 
                        letterClass={letterClass}
                        strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'M', 'e']}
                        idx={15}
                    />
                </h1>
                <p>
                    I am interested in freelance opportunities - especially on ambitious
                    or large projects. However, if you have any other requests or
                    questions, don't hesitate to contact me using below form either.
                </p>
                <div className='contact-form'>
                    <form ref={refForm} onSubmit={sendEmail}>
                        <ul>
                            <li className='half'>
                                <input type='text' name='name' placeholder='Name' required/>
                            </li>
                            <li className='half'>
                                <input type='email' name='email' placeholder='Email' required/>
                            </li>
                            <li>
                                <input type='text' name='subject' placeholder='Subject' required/>
                            </li>
                            <li>
                                <textarea placeholder='Message' name='message' required></textarea>
                            </li>
                            <li>
                                <input type='submit' className='flat-button' value='SEND'/>
                            </li>
                        </ul>
                    </form>
                </div>
            </div>
            <div className='info-map'>
                Bolang-Lonson,
                <br/>
                Cameroon,
                <br/>
                Elig Effa, Melen <br/>
                Yaounde <br/>
                <span>bbeinyoh12@gmail.com</span>
            </div>
            <div className='map-wrap'>
                <MapContainer center={pos} zoom={13}>
                    <TileLayer url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'/>
                    <Marker position={pos}>
                        <Popup>Where you can find me, send me a request</Popup>
                    </Marker>
                </MapContainer>
            </div>
        </div>
        <Loader type='pacman'/>
        </>
    )
}

export default Contact