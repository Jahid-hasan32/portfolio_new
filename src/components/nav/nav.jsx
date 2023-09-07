import './nav.css'
import { FaHome } from 'react-icons/fa'
import { MdMiscellaneousServices } from 'react-icons/md'
import { SiAboutdotme } from 'react-icons/si'
import {GiSkills} from 'react-icons/gi'
import { AiFillMessage } from 'react-icons/ai'
import { useState } from 'react'

export const Navbar = () => {

    const [active, setActive] = useState('#')

    return (
        <nav className='nav'>
            <a href="#" onClick={() => setActive('#')} className={active === '#' ? active : ''}><FaHome/></a>
            <a href="#skills"><GiSkills/></a>
            <a href="#about" onClick={() => setActive('#about')} className={active === '#about' ? active : ''}><SiAboutdotme/></a>
            <a href="#portfolio"><MdMiscellaneousServices/></a>
            <a href="#contact"><AiFillMessage/></a>

        </nav>
    )
}