import Home from "./Home";
import News from "./News";
import Results from "./Results";
import Tournaments from "./Tournaments";
import styles from "./navbar-tabs.module.css";

export default function NavbarTabs() {
    return (
        <ul className={styles["navbar-list"]}>
            <li>
                <Home className={styles["home-tab"]}/>
            </li>
            <li>
                <News/>
            </li>
            <li>
                <Results/>
            </li>
            <li>
                <Tournaments/>
            </li>
        </ul>
    );
};