import Link from 'next/link';

const Header = () => {
    return (
        <header className='text-center bg-blue-500 p-2 text-2xl flex'>
            <a className='flex items-center justify-start' href="#Top">
                <span role="img" aria-label="wolf">🐺 Chloe's Nicolini Book</span>
            </a>
        </header>
    );
};

export default Header;