import Link from 'next/link';

const Header = () => {
    return (
        <header className='bg-blue-500 p-2 text-2xl flex justify-between items-center'>
            <div>Chloé Nicolini</div>
            <Link href="/" className='flex items-center mr-1'>
                <span role="img" aria-label="wolf">🐺</span>
            </Link>
        </header>
    );
};

export default Header;