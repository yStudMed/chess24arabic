import OpenDrawerButton from "./OpenDrawerButton";
import Logo from "./Logo";
import NavbarTabs from "./NavBarTabs/NavbarTabs";

export default function Header() {
    return (
        <header>
            <OpenDrawerButton/>
            <Logo/>
            <NavbarTabs/>
        </header>
    );
};