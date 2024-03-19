import React from 'react';
import Link from 'next/link';

const Navbar = () => {
    return (
        <>
            <nav className="flex justify-between p-2 bg-black">
                <a href="#about" className="text-white hover:text-blue-500 p-2">À propos</a>
                <a href="#skills" className="text-white hover:text-pink-500 rounded-full p-2">Compétences</a>
                <a href="#projects" className="text-white hover:text-white rounded-full p-2">Projets</a>
                <a href="#cv" className="text-white hover:text-pink-500 rounded-full p-2">CV</a>
                <a href="#contact" className="text-white hover:text-blue-500 rounded-full p-2">Contact</a>
            </nav>

            <ul>
                <li>
                    <details className="group w-full border border-black rounded-lg bg-gray-300">
                        <summary className="flex items-center justify-between gap-2 p-2 font-medium marker:content-none hover:cursor-pointer">
                            <span className="flex gap-2">
                                <img className="w-6 h-6 rounded-lg" src="/contreattaque.png" alt=""></img>
                                <span className='text-center'>
                                    FC Contre-Attaque
                                </span>
                            </span>
                            {/* <img className="w-5 h-5 transition group-open:rotate-90" src="/arrow.svg" alt="arrow" /> */}
                        </summary>
                        {/* <article className="px-4 pb-4 border w-full">
                            <div className='m-2 italic text-center'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </div>
                            
                        </article> */}
                        <ul>
                            <li>
                                Tournois
                            </li>
                            <li>
                                Truc
                            </li>
                        </ul>
                    </details>
                </li>
            </ul>
        </>
    );
}

export default Navbar;