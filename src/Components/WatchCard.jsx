import "../css/card.css";
import "../css/home.css";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const WatchCard = ({ image, name, price }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = () => {
        setIsOpen((prev) => !prev);
    };

    return (
        <motion.div
            id="cardBox"
            onClick={toggleOpen}
            animate={{ height: isOpen ? "60vh" : "48vh" }} // Adjust initial height as needed
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            style={{
                height: "48vh",
                width: "85vw",
                overflow: "hidden", // Hide overflow for smooth height transition
                cursor: "pointer", // Indicate it's clickable
            }}
        >
            <div id="cardBoxImage">
                <img src={image} alt="" />
            </div>
            <h4 className="text2">{name}</h4>
            <div id="priceCard">${price}</div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ height: isOpen ? "5vh" : "5vh",opacity: 1, y: 0 }}
                        transition={{ type: "spring", stiffness: 300, damping: 30, duration: 0.3 }}
                        exit={{ opacity: 0, y: -20 }}
                    >
                        <button className="b2">ADD TO CART</button>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};

export default WatchCard;
