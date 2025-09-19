import styles from "./main.module.css"
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Chess 24 Arabic',
};

export default function Home() {
    return (
        <div className={styles.main}>
            <article>
                <div className={styles["matches-title"]}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path fill="currentColor" d="M19 3h-1V2a1 1 0 1 0-2 0v1H8V2a1 1 0 1 0-2 0v1H5a2 2 0 0 0-2 2v15c0 
                        1.1.9 2 2 2h14a2 2 0 0 0 2-2V5c0-1.1-.9-2-2-2Zm0 17H5V9h14v11ZM5 7V5h2v1a1 1 0 1 0 2 
                        0V5h8v1a1 1 0 1 0 2 0V5h1v2H5Zm2 4h3v3H7v-3Zm5 0h3v3h-3v-3Zm5 0h3v3h-3v-3ZM7 15h3v3H7v-3Zm5 
                        0h3v3h-3v-3Z"
                        />
                    </svg>
                    <h1> مباريات مباشرة </h1>
                </div>
            </article>
        </div>
    );
};