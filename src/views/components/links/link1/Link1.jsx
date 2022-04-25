import React from 'react';
import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';
const Link1 = ({ text, href }) => {
    return (
        <motion.li whileHover={{
            x: 8,
            transition: { duration: 0.5 },
            color: '#f27820'
        }} exit={{
            x: 0, transition: { duration: 0.5 }
        }}>
            <NavLink to={href} class="text-gray-600 hover_text">{text}</NavLink>
        </motion.li>
    );
};

export default Link1;