import React from 'react';
import { motion } from 'framer-motion';
import { button1 } from '../../../constant/color';
const Button1 = ({ text, active }) => {
    return (
        <motion.button
            className='px-6 py-2 rounded text-base font-semibold text-black hover:text-orange-500'
            style={{ backgroundColor: `${active ? button1.hoverButton : button1.defaultButton}`, color: `${active && button1.color}` }}
            whileHover={{
                backgroundColor: button1.hoverButton,
                style: { color: button1.color },
                y: -6,
                transition: { duration: 0.5 },
            }}
            exit={{
                backgroundColor: button1.defaultButton,
                y: 0,
                transition: { duration: 0.5 }
            }}>
            {text}
        </motion.button>
    );
};

export default Button1;