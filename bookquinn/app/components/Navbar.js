import React from 'react';
import Link from 'next/link';

const Navbar = () => {
    return (
        <>
            <nav className="bg-black justify-between flex">
                    <Link href="/" className="text-white hover:text-blue-500 p-2">Accueil</Link>
                    <Link href="/aboutme" className="text-white hover:text-pink-500 rounded-full p-2">Qui suis-je ?</Link>
                    <Link href="/competences" className="text-white hover:text-gray-300 rounded-full p-2">Projets</Link>
                    <Link href="/projects" className="text-white hover:text-pink-500 rounded-full p-2">Projets</Link>
                    <Link href="/contact" className="text-white hover:text-blue-500 rounded-full p-2">Contact</Link>
            </nav>
            {/* <li className="relative group">
                <details className="border border-black rounded-lg bg-gray-300">
                    <summary className="flex items-center justify-between p-2 font-medium marker:content-none hover:cursor-pointer">
                        <div>
                            Coucou
                        </div>
                    </summary>
                    <ul>
                        <li>
                            Tournois
                        </li>
                        <li>
                            Truc
                        </li>
                    </ul>
                </details>
            </li> */}
        </>
    );
}

export default Navbar;