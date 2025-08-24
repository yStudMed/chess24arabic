import Container from "../components/Container";
import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from "./team.module.css"
import Image from "next/image";

export default function Team() {
    return (
        <Container>
            <div className={styles.container}>
                <Header />
                <article>
                    <div className={styles["team-member"]}>
                        <div className={styles['image-container']}>
                            <Image alt="Youssef Alfiky" src={"/photo_2025-07-29_21-23-09.jpg"} width={100} height={100} className={styles.img}/>
                            <p>Youssef Alfiky</p>
                        </div>
                        <a href="mailto:youssefalfikey22@gmail.com" className={styles["contact-email"]}>
                            youssefalfikey22@gmail.com
                        </a>
                    </div>
                </article>
                <Footer />
            </div>
        </Container>
    );
};