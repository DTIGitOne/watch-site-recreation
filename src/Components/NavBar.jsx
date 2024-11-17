import { useEffect, useState } from "react";
import CartIcon from "../svg/CartIcon";
import LogoSVG from "../svg/Logo";
import ThemeButton1 from "../svg/ThemeButton1";
import ThemeButton2 from "../svg/ThemeButton2";
import Menu from "./DropdownMenu";
import MenuIcon from "../svg/MenuIcon";
import CloseIcon from "../svg/CloseIcon";

// Navigation Bar component
const NavBar = ({featured, products, newWatch}) => {
    const [theme, setTheme] = useState(null); // site theme state
    const [open, setOpen] = useState(false); // is navigation bar for mobile open
    const [cartOpen, setCartOpen] = useState(false); // is the cart open 

    // set the theme that is located in the local storage
    useEffect(() => {
        const themeStorage = localStorage.getItem("theme");
        setTheme(themeStorage ? JSON.parse(themeStorage) : false);
    }, []);
    
    // changing/setting the site theme
    const handleTheme = () => {
        setTheme((prev) => {
            const newTheme = !prev;
            localStorage.setItem("theme", JSON.stringify(newTheme));
            return newTheme;
        });
    };

    // function to scroll to selected element
    const handleScrollToSection = (section) => {        
        if (section.current) {
            section.current.scrollIntoView({ behavior: 'smooth' });
        }
    };
    
    // cart toggle function
    const toggleOpenCartState = () => {
        setCartOpen((prev) => !prev);
    };
    
    // menu mobile toggle function
    const toggleOpenState = () => {
        setOpen((prev) => !prev);
    };

    // useEffect hook to check changes of theme
    useEffect(() => {
        if (theme) {
            // Dark Theme
            document.documentElement.style.setProperty("--primary-body-color", "#1F1F1F");
            document.documentElement.style.setProperty("--primary-homeImageBox-color", "#EFBE8A");
            document.documentElement.style.setProperty("--primary-titleColor-color", "#F2F2F2");
            document.documentElement.style.setProperty("--primary-textColor-color", "#BFBFBF");
            document.documentElement.style.setProperty("--primary-button2-color", "#3D3D3D");
            document.documentElement.style.setProperty("--primary-borderColor-color", "#333333");
            document.documentElement.style.setProperty("--primary-cardBackground-color", "#292929");
            document.documentElement.style.setProperty("--primary-borderCard-color", "1px solid #333333");
            document.documentElement.style.setProperty("--primary-action-color", "#3D3D3D");
            document.documentElement.style.setProperty("--primary-boxShadow-color", "10px 6px 10px 1px #242424");
        } else {
            // Light theme
            document.documentElement.style.setProperty("--primary-body-color", "#FCFCFC");
            document.documentElement.style.setProperty("--primary-homeImageBox-color", "#FFB568");
            document.documentElement.style.setProperty("--primary-titleColor-color", "#2E2E2E");
            document.documentElement.style.setProperty("--primary-textColor-color", "#595959");
            document.documentElement.style.setProperty("--primary-button2-color", "#2B2B2B");
            document.documentElement.style.setProperty("--primary-borderColor-color", "#F0F0F0");
            document.documentElement.style.setProperty("--primary-cardBackground-color", "#FFFFFF");
            document.documentElement.style.setProperty("--primary-borderCard-color", "1px solid rgb(236, 234, 234)");
            document.documentElement.style.setProperty("--primary-action-color", "#2B2B2B");
            document.documentElement.style.setProperty("--primary-boxShadow-color", "0px 0px 0px 0px rgb(223, 218, 218)");
        }
    }, [theme]);

    return (
        <div className=" h-auto w-full flex absolute top-0 left-0 p-5 justify-center">
            <div id="navBar" className="h-auto flex justify-center">
            <div className=" w-1/2 pl-3 flex">
                <LogoSVG />
                <div id="desktopNav">
                    <button>HOME</button>
                    <button onClick={() => handleScrollToSection(featured)}>FEATURED</button>
                    <button onClick={() => handleScrollToSection(products)}>PRODUCTS</button>
                    <button onClick={() => handleScrollToSection(newWatch)}>NEW</button>
                </div>
            </div>
            <div className=" w-1/2 flex justify-end pr-2 gap-5">
                {/* theme button toggler */}
                <button onClick={handleTheme}>
                   {theme ? (
                    <ThemeButton2 />
                   ) : (
                    <ThemeButton1 />
                   )}
                </button>
                {/* button toggler condition for displaying the icon for when the cart is open or closed */}
                {open ? (
                    null
                ) : (
                    cartOpen ? (
                        <button className="z-50" onClick={toggleOpenCartState}>
                            <CloseIcon />
                        </button>
                    ) : (
                        <button className="z-50" onClick={toggleOpenCartState}>
                            <CartIcon />
                        </button>
                    )
                )}
                {/* same logic as the cart but only for the mobile navigation menu */}
                {cartOpen ? (
                    null
                ) : (
                    open ? (
                        <button className="z-50 phoneButton" onClick={toggleOpenState}>
                          <CloseIcon />
                        </button>
                    ) : (
                        <button className="z-50 phoneButton" onClick={toggleOpenState}>
                          <MenuIcon />
                        </button>
                    )
                )}
                {/* the menu that is being conditionly open either for the navigating menu for mobile or for the cart menu*/}
                <Menu isOpen={open} featured={featured} products={products} newWatch={newWatch} cart={cartOpen} toggle={toggleOpenState} toggleCart={toggleOpenCartState}/>
            </div>
            </div>
        </div>
    );
}

export default NavBar;