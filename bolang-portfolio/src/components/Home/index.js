import { Link } from 'react-router-dom';
import LogoTitle1 from '../../assets/images/logo-b.png'
import LogoTitle2 from '../../assets/images/logo-l.png'
import './index.scss'
import { useState } from 'react';
import AnimatedLetters from '../AnimatedLetters';

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = ['o', 'l', 'a', 'n', 'g', 's']
    const jobArray = ['w','e','b',' ','d','e','v','e','l','o','p','e','r','.']
    return (
        <div className="container home-page">
            <div className="text-zone">
                <h1>Hi, <br/> I'm
                <img src={LogoTitle1} alt='developer'className='b'/>
                <AnimatedLetters letterClass={letterClass} strArray={nameArray}/>
                <img src={LogoTitle2} alt='developer'className='l'/>
                onson
                <br/>
                web developer.
                </h1>
                <h2>Full-Stack Developer / Python Expert / DevOps Engineer</h2>
                <Link to='/contact' className='flat-button'>CONTACT ME</Link>
            </div>

        </div>
    )
}

export default Home