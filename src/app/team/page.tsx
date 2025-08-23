import Container from "../components/Container";
import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from "./team.module.css"

export default function Team() {
    return (
        <Container>
            <div className={styles.container}>
                <Header />
                <article>
                    Hi
                </article>
                <Footer />
            </div>
        </Container>
    );
};