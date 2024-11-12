import "../css/menu.css";
import { useEffect, useRef, useState } from "react";
import Cart from "./Cart";

const Menu = ({isOpen, featured, products, newWatch, toggle, cart, toggleCart}) => {
    const [extended, setExtended] = useState(false);
    const [visible, setVisible] = useState(false);
    const menuRef = useRef(null);

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

    useEffect(() => {
        setExtended(isOpen)
    }, [isOpen]);

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

    useEffect(() => {
        setExtended(cart)
    }, [cart]);

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
                {cart ? (
                    <Cart />
                ) : (
                    <div id="menuBox" className={extended ? "fadeIn" : "fadeOut"}>
                    <button>HOME</button>
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
