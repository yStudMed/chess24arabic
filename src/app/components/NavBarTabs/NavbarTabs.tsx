import Tab from "./Tab";
import Home from "./Home";
import News from "./News";
import Results from "./Results";
import Tournaments from "./Tournaments";
import CloseDrawer from "../CloseDrawer";
import TopPlayers from "./TopPlayers";
import styles from "./navbar-tabs.module.css";

export default function NavbarTabs() {
    return (
        <ul className={styles["navbar-list"]}>
            <li key="closeDrawer" className={styles.close}>
                <CloseDrawer/>
            </li>
            <Tab activeClassName={styles.active} href="/" component={<Home className={styles["home-tab"]} />} />
            <Tab activeClassName={styles.active} href="/news" component={<News/>} />
            <Tab activeClassName={styles.active} href="/results" component={<Results/>} />
            <Tab activeClassName={styles.active} href="/tournaments" component={<Tournaments/>} />
            <Tab activeClassName={styles.active} href="/top-players" component={<TopPlayers/>} />
        </ul>
    );
};