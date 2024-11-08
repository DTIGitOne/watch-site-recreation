import CartIcon from "../svg/CartIcon";
import LogoSVG from "../svg/Logo";
import MenuIcon from "../svg/MenuIcon";
import ThemeButton1 from "../svg/ThemeButton1";

const NavBar = () => {
    return (
        <div className=" h-auto w-full flex absolute top-0 left-0 p-5 justify-center">
            <div className=" w-1/2 pl-3">
                <LogoSVG />
            </div>
            <div className=" w-1/2 flex justify-end pr-2 gap-5">
                <ThemeButton1 />
                <CartIcon />
                <MenuIcon />
            </div>
        </div>
    );
}

export default NavBar;