'use client' // Error boundaries must be Client Components
import styles from "./error-boundary.module.css";
import { useEffect } from 'react';

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string }
    reset: () => void
}) {
    useEffect(() => {
        // Log the error to an error reporting service
        console.error(error)
    }, [error])

    return (
        <div className={styles.container}>
            <h2>حدث خطأ أثناء جلب الصفحة !</h2>
            <button
                onClick={
                    // Attempt to recover by trying to re-render the segment
                    () => reset()
                }
            >
                جرب مرة أخري
            </button>
        </div>
    )
}