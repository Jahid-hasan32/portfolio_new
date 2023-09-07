import { motion } from 'framer-motion';
import React, {useState} from 'react';
import './progress.css'

export const Progress = ({ skill, progress }) => {

    const barWidth = `${progress}%`;

    const progressVariant = {
        initial : {
            // opacity : 0,
            width: '0%'
        },
        open : {
            width: barWidth,
            transition:{
                duration: 1.3
            }
        }

    }

    return (
        <div className="wrapper">
        <div className="skill_name">{skill}</div>
          <motion.div
            
            variants={progressVariant}
            initial="initial"
            whileInView="open"
            
            className="progress_bar">

            </motion.div>
            
        </div>

    )
}
