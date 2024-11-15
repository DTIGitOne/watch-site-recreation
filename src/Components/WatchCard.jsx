import "../css/card.css";
import "../css/home.css";
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ProductButtonIcon from "../svg/ProductButtonIcon";
import NewIcon from "../svg/NewIcon";
import SaleIcon from "../svg/SaleIcon";
import { addWatch } from "./js/functions";
import { mergedArray } from "../Data/data";

const WatchCard = ({ image, name, price, product, newW, sale, id }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [cartColor, setCartColor] = useState("#FFFFFF");
    const [buttonColor, setButtonColor] = useState("#FFFFFF");

    const addCart = (event) => {
        const watchesCart = JSON.parse(localStorage.getItem('watches')) || [];
        const matchedWatches = watchesCart
            .map(cartItem => {
                const watch = mergedArray.find(watch => watch.id === cartItem.id);
                return watch ? { ...watch, amount: cartItem.amount } : null;
            })
            .filter(Boolean);

        const watch = matchedWatches.find(item => item.id === id);
        if (watch && watch.amount > 2) {
            setButtonColor("#ff7658")
        } else {
            event.stopPropagation();
            setButtonColor("var(--primary-homeImageBox-color)")
            setIsOpen(true);
            addWatch(id);

            setTimeout(() => {
                setIsOpen(false);
                setButtonColor("#FFFFFF")
            }, 300);
        }
    }

    const addCart2 = () => {
        const watchesCart = JSON.parse(localStorage.getItem('watches')) || [];
        const matchedWatches = watchesCart
            .map(cartItem => {
                const watch = mergedArray.find(watch => watch.id === cartItem.id);
                return watch ? { ...watch, amount: cartItem.amount } : null;
            })
            .filter(Boolean);

        const watch = matchedWatches.find(item => item.id === id);
        if (watch && watch.amount > 2) {
            setCartColor("red");
            console.log("no");
        } else {
            setCartColor("var(--primary-homeImageBox-color)")
            console.log("ok");
            setIsOpen(true);
            addWatch(id);

            setTimeout(() => {
                setIsOpen(false);
                setCartColor("#FFFFFF");
            }, 300);
        }
    }

    return (
         <div
            id="cardBox"
            onClick={product ? (addCart2) : (() => setIsOpen(true))}
            className=""
            style={{
                width: "100%",
                height: "100%",
                overflow: "hidden",
                cursor: "pointer",
                position: "relative",
                backgroundColor: isOpen ? newW ? "var(--primary-homeImageBox-color)" : "" : "",
            }}
        >
            {product ? (
                <div id="productIcon">
                    <ProductButtonIcon added={cartColor}/>
                </div>
            ) : (
                null
            )}
            {sale ? (
                <div id="SaleIconBox">
                    <SaleIcon />
                </div>
            ) : (
                null
            )}
            {newW ? (
                <div id="newWatch">
                    <NewIcon open={isOpen}/>
                </div>
            ) : (
                null
            )}
            <div className={product ? "cardBoxImage2" : "cardBoxImage1"}>
                <img src={image} alt="" />
            </div>
            <h4 className={isOpen && newW ? "text3" : product ? "product1" : "text2"}>{name.toUpperCase()}</h4>
            <div className={isOpen && newW ? "priceCard3" : product ? "priceCard2" : "priceCard1"}>${price}</div>
            {product ? (
                null
            ) : (
                <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        style={{ width: "100%", overflow: "hidden" }}
                        className="flex justify-center items-center mb-1 mt-1"
                    >
                        <button onClick={addCart} className={newW ? "b4" : "b6"} style={{color: buttonColor}}>
                            ADD TO CART
                        </button>
                    </motion.div>
                )}
                </AnimatePresence>
            )}
        </div>
    );
};

export default WatchCard;
