import { useState } from 'react'
import './resume.css'
import { Progress } from './progress'

export const Accordion = ({title, text}) => {

    const [isOpen, setIsOpen] = useState(false)

    function clickHandler(){
        setIsOpen(!isOpen)
    }

      
    return(
        <>
        <div className="main">
                <div className="accordion">
                <div className="title_container">
                <h2>{title}</h2>
                <p className='handle_btn' onClick={(clickHandler)}>{isOpen ? "➖" : "➕"}</p>
            </div>
            {
                isOpen && 
            <p className='accor_text'>{text}</p>
            }
                </div>



        </div>
        </>
    )
}