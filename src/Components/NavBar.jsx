import { useEffect, useState } from "react";
import CartIcon from "../svg/CartIcon";
import LogoSVG from "../svg/Logo";
import ThemeButton1 from "../svg/ThemeButton1";
import ThemeButton2 from "../svg/ThemeButton2";
import Menu from "./DropdownMenu";
import MenuIcon from "../svg/MenuIcon";
import CloseIcon from "../svg/CloseIcon";

const NavBar = ({featured, products, newWatch}) => {
    const [theme, setTheme] = useState(false);
    const [open, setOpen] = useState(false);
    const [cartOpen, setCartOpen] = useState(false);

    const handleTheme = () => {
        setTheme((prev) => !prev);
    }

    const toggleOpenCartState = () => {
        setCartOpen((prev) => !prev);
    };

    const toggleOpenState = () => {
        setOpen((prev) => !prev);
    };

    useEffect(() => {
        if (theme) {
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
            document.documentElement.style.setProperty("--primary-body-color", "#FCFCFC");
            document.documentElement.style.setProperty("--primary-homeImageBox-color", "#FFB568");
            document.documentElement.style.setProperty("--primary-titleColor-color", "#2E2E2E");
            document.documentElement.style.setProperty("--primary-textColor-color", "#595959");
            document.documentElement.style.setProperty("--primary-button2-color", "#2B2B2B");
            document.documentElement.style.setProperty("--primary-borderColor-color", "#F0F0F0");
            document.documentElement.style.setProperty("--primary-cardBackground-color", "#FFFFFF");
            document.documentElement.style.setProperty("--primary-borderCard-color", "1px solid rgb(236, 234, 234)");
            document.documentElement.style.setProperty("--primary-action-color", "#2B2B2B");
            document.documentElement.style.setProperty("--primary-boxShadow-color", "10px 6px 10px 1px rgb(223, 218, 218)");
        }
    }, [theme]);

    return (
        <div className=" h-auto w-full flex absolute top-0 left-0 p-5 justify-center">
            <div className=" w-1/2 pl-3">
                <LogoSVG />
            </div>
            <div className=" w-1/2 flex justify-end pr-2 gap-5">
                <button onClick={handleTheme}>
                   {theme ? (
                    <ThemeButton2 />
                   ) : (
                    <ThemeButton1 />
                   )}
                </button>
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
                {cartOpen ? (
                    null
                ) : (
                    open ? (
                        <button className="z-50" onClick={toggleOpenState}>
                          <CloseIcon />
                        </button>
                    ) : (
                        <button className="z-50" onClick={toggleOpenState}>
                          <MenuIcon />
                        </button>
                    )
                )}
                <Menu isOpen={open} featured={featured} products={products} newWatch={newWatch} cart={cartOpen} toggle={toggleOpenState} toggleCart={toggleOpenCartState}/>
            </div>
        </div>
    );
}

export default NavBar;