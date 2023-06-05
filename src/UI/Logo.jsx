
import Image from 'next/Image';
import Link from 'next/link';

const Logo = () => {
    return (
        <Link href='/'>
            <Image src='/logo.png' alt='TechFontes' width={90} height={90}></Image>
        </Link>
    )
}

export default Logo;