import "../css/menu.css";
import { useEffect, useRef, useState } from "react";
import Cart from "./Cart";

// Component menu for mobile and Cart menu | conditinal rendring component used for both
const Menu = ({isOpen, featured, products, newWatch, toggle, cart, toggleCart}) => {
    const [extended, setExtended] = useState(false); // is the Menu open
    const [visible, setVisible] = useState(false); // state for visiblitie used for animation toggling
    const menuRef = useRef(null);

    // scrolling to section and toggling animation for menu
    const handleScrollToSection = (section) => {
        if (menuRef.current) {
            menuRef.current.classList.remove("openAnimation");
            menuRef.current.classList.add("closeAnimation");
        }
        setExtended(false)
        document.body.style.overflow = "auto";
        setTimeout(() => {
            toggle()
            setVisible(false);
        }, 300);
        
        if (section.current) {
            section.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    // closing the menu with the toggling of the closing animation
    const handleClose = () => {
        if (menuRef.current) {
            menuRef.current.classList.remove("openAnimation");
            menuRef.current.classList.add("closeAnimation");
        }
        setExtended(false)
        document.body.style.overflow = "auto";
        setTimeout(() => {
            toggle()
            setVisible(false);
        }, 300);
    }

    // useEffect hook for detecting the expanded state
    useEffect(() => {
        setExtended(isOpen)
    }, [isOpen]);

    // check when the menu is open to make sure the user screen is at the top of the screen and toggle the open animation
    useEffect(() => {
        if (isOpen) {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            setVisible(true);
            setExtended(true);
            document.body.style.overflow = "hidden";
        } else {
            if (menuRef.current) {
                menuRef.current.classList.remove("openAnimation");
                menuRef.current.classList.add("closeAnimation");
            }
            setExtended(false)
            document.body.style.overflow = "auto";
            setTimeout(() => {
                setVisible(false);
            }, 300);
        }
    }, [isOpen]);

    // same logic but for the cart logic
    useEffect(() => {
        setExtended(cart)
    }, [cart]);

    // also making sure the screen is at the top when the cart is toggled
    useEffect(() => {
        if (cart) {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            setVisible(true);
            setExtended(true);
            document.body.style.overflow = "hidden";
        } else {
            if (menuRef.current) {
                menuRef.current.classList.remove("openAnimation");
                menuRef.current.classList.add("closeAnimation");
            }
            setExtended(false)
            document.body.style.overflow = "auto";
            setTimeout(() => {
                setVisible(false);
            }, 300);
        }
    }, [cart]);


    return (
        visible ? (
            <div 
                ref={menuRef}
                id="menuBox" 
                className={extended ? "openAnimation" : "closeAnimation"}
            >
                { /* if the cart propertiy is provided then return the Cart component else if the standard menu is toggled return the mobile menu*/ }
                {cart ? (
                    <Cart />
                ) : (
                    <div id="menuBox" className={extended ? "fadeIn" : "fadeOut"}>
                    <button onClick={handleClose}>HOME</button>
                    <button onClick={() => handleScrollToSection(featured)}>FEATURED</button>
                    <button onClick={() => handleScrollToSection(products)}>PRODUCTS</button>
                    <button onClick={() => handleScrollToSection(newWatch)}>NEW</button>
                </div>
                )}
            </div>
        ) : (
            null
        )
    );
};

export default Menu;
