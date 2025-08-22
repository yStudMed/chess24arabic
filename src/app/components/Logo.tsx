import Image from 'next/image'
import Link from 'next/link';

export default function Logo() {
    return (
        <Link href={"/"}>
            <Image src="/chess24logo.png" alt='chess24arabic' width={128} height={128} />
        </Link>
    );
};