import Link from "next/link";

export default function Footer() {
    return (
        <footer>
            <p>
                الحقوق محفوظة © Chess24Arabic
            </p>
            <ul>
                <li><Link href={"#"}>من نحن</Link></li>
                <li><Link href={"#"}>عن المطور</Link></li>
            </ul>
        </footer>
    );
};