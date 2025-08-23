import Link from "next/link";

export default function Footer() {
    return (
        <footer>
            <p>
                الحقوق محفوظة © Chess24Arabic
            </p>
            <ul>
                <li><Link href="about-us">من نحن</Link></li>
                <li><Link href={"team"}>فريق العمل</Link></li>
            </ul>
        </footer>
    );
};