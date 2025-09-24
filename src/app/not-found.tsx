import styles from "./not-found.module.css"

export default function NotFound() {
    return (
        <div className={styles.container}>
            <h1 className={styles["response-not-found-statis-code"]}>
                404 :(
            </h1>
            <h2 className={styles["response-message"]}>
                المعذرة، هذه الصفحة غير موجودة.
            </h2>
            <h3 className={styles["response-explaination"]}>
                يبدوا أننا لم ’ نستطع أن نجد ما ’ تبحث عنه.
            </h3>
        </div>
    );
}