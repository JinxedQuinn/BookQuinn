import Link from 'next/link';

const GridProject = () => {
    return (
        <section className='h-screen bg-gradient-to-r from-fuchsia-500 to-cyan-500'>
            <div className="container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 m-2">
                    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                        <img src="/Pokeapi.png" alt="" className="w-full h-56 object-cover object-center" />
                        <div className="p-4">
                            <h1 className="text-gray-900 font-bold text-2xl">Dataviz et API</h1>
                            <p className="mt-2 text-gray-600">Utilisation de l&apos;API Pokémon, création d&apos;un Pokédex, affichage des cartes Pokémon recherchées, et création d&apos;un Quiz autour de cet univers.</p>
                            <a href="https://github.com/Stoyots/pokemonFinal?tab=readme-ov-file" className="flex items-center mt-3 text-blue-500 hover:underline">
                                    Lien Pokésite
                                    <svg className="h-5 w-5 mx-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                                    </svg>
                            </a>
                        </div>
                    </div>

                    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                        <img src="AMPUNV.png" alt="" className="w-full h-56 object-cover object-center" />
                        <div className="p-4">
                            <h1 className="text-gray-900 font-bold text-2xl">Plateforme de vente de meuble</h1>
                            <p className="mt-2 text-gray-600">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                            <a href="https://github.com/adatechschool/reseau-social-php-chacsocialnetwork" className="flex items-center mt-3 text-blue-500 hover:underline">
                                    Lien Réseau Social PHP
                                    <svg className="h-5 w-5 mx-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                                    </svg>
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default GridProject;