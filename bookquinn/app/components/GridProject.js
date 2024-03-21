import Link from 'next/link';

const GridProject = () => {
    return (
        <div>
            <div className="container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 m-2">
                    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                        <img src="/Pokeapi.png" alt="" className="w-full h-56 object-cover object-center" />
                        <div className="p-4">
                            <h1 className="text-gray-900 font-bold text-2xl">Dataviz et API</h1>
                            <p className="mt-2 text-gray-600">Utilisation de l'API Pokémon, création d'un Pokédex, affichage des cartes Pokémon recherchées, et création d'un Quiz autour de cet univers.</p>
                            <a href="https://github.com/Stoyots/pokemonFinal?tab=readme-ov-file" className="flex items-center mt-3 text-blue-500 hover:underline">
                                    Lien GitHub
                                    <svg className="h-5 w-5 mx-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                                    </svg>
                            </a>
                        </div>
                    </div>

                    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                        <img src="https://source.unsplash.com/random/800x600" alt="" className="w-full h-56 object-cover object-center" />
                        <div className="p-4">
                            <h1 className="text-gray-900 font-bold text-2xl">Project 2</h1>
                            <p className="mt-2 text-gray-600">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                            <Link href="/project/2" className="flex items-center mt-3 text-blue-500 hover:underline">
                                    Learn more
                                    <svg className="h-5 w-5 mx-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                                    </svg>
                            </Link>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default GridProject;