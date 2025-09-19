import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'فريق العمل',
};


import styles from "./team.module.css"
import Image from "next/image";

export default function Team() {
    return (
        <div className={styles.container}>
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
        </div>
    );
};