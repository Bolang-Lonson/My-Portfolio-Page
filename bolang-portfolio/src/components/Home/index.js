import { Link } from 'react-router-dom';
import LogoTitle1 from '../../assets/images/logo-b.png'
import LogoTitle2 from '../../assets/images/logo-l.png'
import './index.scss'
import Logo from './Logo';
import { useEffect, useState } from 'react';
import AnimatedLetters from '../AnimatedLetters';

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    const nameArray1 = ['o', 'l', 'a', 'n', 'g', '  -'];
    const nameArray2 = ['o', 'n', 's', 'o', 'n'];
    const jobArray = ['w','e','b',' ','d','e','v','e','l','o','p','e','r','.'];

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 4000)
    }, []);

    return (
        <div className="container home-page">
          <div className="text-zone">
            <h1>
              <span className={letterClass}>H</span>
              <span className={`${letterClass} _12`}>i,</span>
              <br/>
              <span className={`${letterClass} _13`}>I</span>
              <span className={`${letterClass} _14`}>'m</span>
              <img src={LogoTitle1} alt='developer'className='b'/>
              <AnimatedLetters letterClass={letterClass} strArray={nameArray1} idx={15}/>
              <img src={LogoTitle2} alt='developer'className='l'/>
              <AnimatedLetters letterClass={letterClass} strArray={nameArray2} idx={21}/>
              <br/>
              <AnimatedLetters letterClass={letterClass} strArray={jobArray} idx={26}/>
            </h1>
            <h2>Full-Stack Developer / Python Expert / DevOps Engineer</h2>
            <Link to='/contact' className='flat-button'>CONTACT ME</Link>
          </div>
        <Logo/>
        </div>
    )
}

export default Home