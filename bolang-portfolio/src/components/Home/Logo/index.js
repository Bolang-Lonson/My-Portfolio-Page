import './index.scss'
import LogoBL from '../../../assets/images/BolangPic.jpg'
import { useEffect, useState } from 'react'

const Logo = () => {
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setIsActive(true);
        }, 1000);
    }, []);
    return (
        <div className='logo-container'>
          <img className={isActive? 'solid-logo fadein':'solid-logo'} src={LogoBL} alt='BL'/>
        </div>
    )
}

export default Logo