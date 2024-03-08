import Link from 'next/link';

const Footer = () => {
    return (
        <footer className='bg-red-400 bottom-0 fixed p-2 w-full flex'>
            <ul>
                <li>
                    <Link href='#Top'>
                        <img className="w-5" src='/arrowUp.svg' alt='Arrow Up' />
                    </Link>
                </li>
            </ul>
        </footer>
    );
};

export default Footer;