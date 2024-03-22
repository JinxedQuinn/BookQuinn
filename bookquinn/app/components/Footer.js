import Link from 'next/link';

const Footer = () => {
    return (
        <footer className='bg-gradient-to-r from-teal-600 to-pink-900 bottom-0 sticky p-2 w-full flex justify-between'>
            <a href='https://github.com/JinxedQuinn' className="w-5">
                <img src='/github.svg' alt='GitHub' />
            </a>
            <a href='https://ko-fi.com/jinxedquinn#checkoutModal' className="w-5">
                <img src='/kofi.svg' alt='Ko-Fi' />
            </a>
            <a href='https://www.linkedin.com/in/nicolinichloe/' className="w-5">
                <img src='./linkedin.svg' alt='LinkedIn' />
            </a>
            <a href='https://www.codewars.com/users/JinxedQuinn' className="w-5">
                <img src='/codewars.svg' alt='CodeWars' />
            </a>
            <Link href='/cv' className="w-5">
                <img src='/Cvitae.svg' alt='CV' />
            </Link>
            <Link href='#Top'>
                <img className="w-5" src='/arrowUp.svg' alt='Arrow Up' />
            </Link>
        </footer>
    );
};

export default Footer;