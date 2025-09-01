import Home from "./Home";
import News from "./News";
import Results from "./Results";
import Tournaments from "./Tournaments";
import CloseDrawer from "../CloseDrawer";
import TopPlayers from "./TopPlayers";
import styles from "./navbar-tabs.module.css";
import Link from "next/link";

export default function NavbarTabs() {
    return (
        <ul className={styles["navbar-list"]}>
            <li className={styles.close}>
                <CloseDrawer/>
            </li>
            <li>
                <Link href="/">
                    <Home className={styles["home-tab"]} />
                </Link>
            </li>
            <li>
                <Link href="#">
                    <News />
                </Link>
            </li>
            <li>
                <Link href="#">
                    <Results />
                </Link>
            </li>
            <li>
                <Link href="#">
                    <Tournaments />
                </Link>
            </li>
            <li>
                <Link href="#">
                    <TopPlayers />
                </Link>
            </li>
        </ul>
    );
};