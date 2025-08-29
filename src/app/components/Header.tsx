import Drawer from "./Drawer";
import Logo from "./Logo";
import NavbarTabs from "./NavBarTabs/NavbarTabs";

export default function Header() {
    return (
        <header>
            <Drawer/>
            <Logo/>
            <NavbarTabs/>
        </header>
    );
};