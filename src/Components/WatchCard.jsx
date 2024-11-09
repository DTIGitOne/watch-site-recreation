import "../css/card.css";
import "../css/home.css";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { div } from "framer-motion/client";
import ProductButtonIcon from "../svg/ProductButtonIcon";

const WatchCard = ({ image, name, price, product, newW }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <motion.div
            id="cardBox"
            onClick={() => setIsOpen(true)}
            animate={{height: isOpen ? "100%" : "100%", backgroundColor: isOpen ? newW ? "var(--primary-homeImageBox-color)" : "" : ""}}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            style={{
                height: "100%",
                width: "100%",
                overflow: "hidden",
                cursor: "pointer",
                position: "relative"
            }}
        >
            {product ? (
                <div id="productIcon">
                    <ProductButtonIcon />
                </div>
            ) : (
                null
            )}
            <div className={product ? "cardBoxImage2" : "cardBoxImage1"}>
                <img src={image} alt="" />
            </div>
            <h4 className={product ? "product1" : "text2"}>{name}</h4>
            <div className={product ? "priceCard2" : "priceCard1"}>${price}</div>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ height: isOpen ? "5vh" : "5vh",opacity: 1, y: 0 }}
                        transition={{ type: "spring", stiffness: 300, damping: 30, duration: 0.3 }}
                        style={{
                            height: "50px",
                            width: "100%",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center"
                        }}
                        exit={{ opacity: 0, y: -20 }}
                    >
                        <button className={newW ? "b4" : "b2"}>ADD TO CART</button>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};

export default WatchCard;
