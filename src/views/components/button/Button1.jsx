import React from 'react';
import { motion } from 'framer-motion';
const Button1 = ({ text, active, setActive }) => {

    return (
        <motion.button
            onClick={() => setActive(text)}
            className={`px-6 py-2 rounded text-xs sm:text-base font-semibold text-black hover:text-[#AD171A] ${active === text ? "bg-[#FDE1BD] text-[#AD171A]" : "bg-[#EEEEEE] text-[#000]"}`}
        
            whileHover={{
                // backgroundColor: button1.hoverButton,
                // style: { color: button1.color },
                y: -6,
                transition: { duration: 0.5 },
            }}
            exit={{
                // backgroundColor: button1.defaultButton,
                y: 0,
                transition: { duration: 0.5 }
            }}>
            {text}
        </motion.button>
    );
};

export default Button1;