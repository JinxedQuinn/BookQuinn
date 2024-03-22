import Link from 'next/link';

const CV = () => {
    return (
        <div className="bg-gray-100">
            <div className="container mx-auto py-8">
                <div className="grid grid-cols-4 sm:grid-cols-12 gap-6 px-4">
                    <div className="col-span-4 sm:col-span-3">
                        <div className="bg-white shadow rounded-lg p-6">
                            <div className="flex flex-col items-center">
                                <img src="/ChloeNicolini.jpeg" className="w-32 h-32 bg-gray-300 rounded-full mb-4 shrink-0">

                                </img>
                                <h1 className="text-xl font-bold">Chloé Nicolini</h1>
                                <p className="text-gray-700">Développeuse Full Stack</p>
                                <div className="mt-6 flex flex-wrap gap-4 justify-center">
                                    <Link href="/contact" className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">Contact</Link>
                                    <Link href="#" className="bg-gray-300 hover:bg-gray-400 text-gray-700 py-2 px-4 rounded">Resume</Link>
                                </div>
                            </div>
                            <hr className="my-6 border-t border-gray-300"></hr>
                            <div className="flex flex-col">
                                <span className="text-gray-700 uppercase font-bold tracking-wider mb-2">Savoir-Être</span>
                                <ul>
                                    <li className="mb-2">Aisance Relationnelle</li>
                                    <li className="mb-2">Créativité</li>
                                    <li className="mb-2">Réactivité</li>
                                    <li className="mb-2">Sens de l&apos;innovation</li>
                                </ul>
                            </div>
                            <hr className="my-6 border-t border-gray-300"></hr>
                            <div className="flex flex-col">
                                <span className="text-gray-700 uppercase font-bold tracking-wider mb-2">Savoir-Faire</span>
                                <ul>
                                    <li className="mb-2">Accueil / Accompagnement</li>
                                    <li className="mb-2">Analyser un besoin, un comportement</li>
                                    <li className="mb-2">Assister</li>
                                    <li className="mb-2">Cohésion de groupe</li>
                                    <li className="mb-2">Conception de support</li>
                                </ul>
                            </div>
                            <hr className="my-6 border-t border-gray-300"></hr>
                            <div className="flex flex-col">
                                <span className="text-gray-700 uppercase font-bold tracking-wider mb-2">Stacks</span>
                                <ul>
                                    <li className="mb-2">JavaScript</li>
                                    <li className="mb-2">React</li>
                                    <li className="mb-2">Node.js</li>
                                    <li className="mb-2">HTML/CSS</li>
                                    <li className="mb-2">Tailwind Css</li>
                                </ul>
                            </div>
                            <hr className="my-6 border-t border-gray-300"></hr>
                            <div className="flex flex-col">
                                <span className="text-gray-700 uppercase font-bold tracking-wider mb-2">Langues</span>
                                <ul>
                                    <li className="mb-2">🇬🇧 Anglais - B2</li>
                                    <li className="mb-2">🇯🇵 Japonais - A1</li>
                                    <li className="mb-2">🇳🇱 Néerlandais - A1</li>
                                </ul>
                            </div>
                            <hr className="my-6 border-t border-gray-300"></hr>
                            <div className="flex flex-col">
                                <span className="text-gray-700 uppercase font-bold tracking-wider mb-2">Centres d&apos;intêrets</span>
                                <ul>
                                    <li className="mb-2">Boxe</li>
                                    <li className="mb-2">Chant</li>
                                    <li className="mb-2">Football</li>
                                    <li className="mb-2">Jeux de plateaux</li>
                                    <li className="mb-2">Jeux Vidéos</li>
                                    <li className="mb-2">Musique</li>
                                    <li className="mb-2">Séries / Films</li>
                                    <li className="mb-2">Tatouages</li>
                                    <li className="mb-2">Voyages</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-4 sm:col-span-9">
                        <div className="bg-white shadow rounded-lg p-6">
                            <h2 className="text-xl font-bold mb-4">About Me</h2>
                            <p className="text-gray-700 overflow-y-auto max-h-[200px]">Je m&apos;appelle Chloé Nicolini, je suis en formation de Développeuse Web Full Stack à l&apos;école Ada Tech School. Je suis passionnée par le développement web et je suis à la recherche d&apos;un stage de fin de formation pour valider mes compétences et espérer passer le diplôme à la fin de l&apos;année. J&apos;ai entamé cette reconversion professionelle car J&apos;ai décidé de monter un projet niche relatif à une de mes passions. <br></br>Je ne crois pas qu&apos;il y ait de bonnes ou de mauvaises façons de se lancer dans un projet tel que le mien. En fait, moi j’ai toujours eu la passion, euh… depuis que je suis enfant, du football et du multimédia, c’est-à-dire finalement quasiment de la même chose. Et ce qui est assez amusant, c’est que j’ai eu plus tard l’occasion, de… de vivre de cette passion, euh, de l’habiter, de faire ce qu’on appelle profession-passion. J’ai… Moi, si je devais résumer ma vie aujourd’hui avec vous, je dirais que c’est d’abord des rencontres, euh, des gens qui m’ont tendu la main, peut-être à un moment où je ne pouvais pas, où j’étais seule chez moi. Et c’est assez, c’est assez curieux de se dire que les hasards, les rencontres forgent une destinée… Parce que quand on a le goût de la chose, quand on a le goût de la chose bien faite, le beau geste, parfois on ne trouve pas, euh, l’interlocuteur en face, je dirais, le miroir qui vous aide à avancer. Alors ce n’est pas mon cas, euh comme je le disais là, puisque moi au contraire, j’ai pu; et je dis merci à la vie, je lui dis merci, je chante la vie, je danse la vie… Euh, je ne suis qu’amour ! Je chante l’amour ! Mais ce qui est amusant quan… d’être la ensemble, et qu’on évoque ça aujourd’hui, c’est que je suis à ce tournant là euh, de la vie aujourd’hui, je réalise pleinement, par ce travail, euh… avec euh… mon école, euh, je réalise cette passion. Quand je dis passion, c’est vraiment, c’est le coeur, c’est les tripes, c’est le vécu d’une femme, une femme qui peut... euh... s’exprimer.
                            </p>

                            <hr className="my-6 border-t border-gray-300"></hr>

                            <h2 className="text-xl font-bold mt-6 mb-4">Projets Persos</h2>
                            <div className="mb-6">
                                <div className="flex justify-between flex-wrap gap-2 w-full">
                                    <span className="text-gray-700 font-bold">Pride Score</span>
                                    <p>
                                        <span className="text-gray-700 mr-2">Started</span>
                                        <span className="text-gray-700">Oct. 2023</span>
                                    </p>
                                </div>
                                <p className='italic'>NextJS - TailwindCSS</p>
                                <p className="mt-2">
                                    Site web répertoriant différentes équipes, leur résultats en championnat, et les joueureuses qui les composent.
                                </p>
                            </div>

                            <div className="mb-6">
                                <div className="flex justify-between flex-wrap gap-2 w-full">
                                    <span className="text-gray-700 font-bold">Pride Score</span>
                                    <p>
                                        <span className="text-gray-700 mr-2">Started</span>
                                        <span className="text-gray-700">Oct. 2023</span>
                                    </p>
                                </div>
                                <p className='italic'>NextJS - TailwindCSS</p>
                                <p className="mt-2">
                                    Premiere exp boulot, eh bien vous savez, je ne crois pas u&apos;il y ait de bonnes ou de mauvaises situations. Si vous voulez J&apos;ai toujours eu cette appétance pour le travail, mais c&apos;était une passion, c&apos;est à dire profession passion.
                                </p>
                            </div>

                            <div className="mb-6">
                                <div className="flex justify-between flex-wrap gap-2 w-full">
                                    <span className="text-gray-700 font-bold">Pride Score</span>
                                    <p>
                                        <span className="text-gray-700 mr-2">Started</span>
                                        <span className="text-gray-700">Oct. 2023</span>
                                    </p>
                                </div>
                                <p className='italic'>NextJS - TailwindCSS</p>
                                <p className="mt-2">
                                    Premiere exp boulot, eh bien vous savez, je ne crois pas u&apos;il y ait de bonnes ou de mauvaises situations. Si vous voulez J&apos;ai toujours eu cette appétance pour le travail, mais c&apos;était une passion, c&apos;est à dire profession passion.
                                </p>
                            </div>

                            <hr className="my-6 border-t border-gray-300"></hr>

                            <h2 className="text-xl font-bold mt-6 mb-4">Expérience Professionelle</h2>
                            <div className="mb-6">
                                <div className="flex justify-between flex-wrap gap-2 w-full">
                                    <span className="text-gray-700 font-bold">Pride Score</span>
                                    <p>
                                        <span className="text-gray-700 mr-2">Started</span>
                                        <span className="text-gray-700">Oct. 2023</span>
                                    </p>
                                </div>
                                <p className='italic'>NextJS - TailwindCSS</p>
                                <p className="mt-2">
                                    Premiere exp boulot, eh bien vous savez, je ne crois pas u&apos;il y ait de bonnes ou de mauvaises situations. Si vous voulez J&apos;ai toujours eu cette appétance pour le travail, mais c&apos;était une passion, c&apos;est à dire profession passion.
                                </p>
                            </div>

                            <div className="mb-6">
                                <div className="flex justify-between flex-wrap gap-2 w-full">
                                    <span className="text-gray-700 font-bold">Pride Score</span>
                                    <p>
                                        <span className="text-gray-700 mr-2">Started</span>
                                        <span className="text-gray-700">Oct. 2023</span>
                                    </p>
                                </div>
                                <p className='italic'>NextJS - TailwindCSS</p>
                                <p className="mt-2">
                                    Premiere exp boulot, eh bien vous savez, je ne crois pas u&apos;il y ait de bonnes ou de mauvaises situations. Si vous voulez J&apos;ai toujours eu cette appétance pour le travail, mais c&apos;était une passion, c&apos;est à dire profession passion.
                                </p>
                            </div>

                            <div className="mb-6">
                                <div className="flex justify-between flex-wrap gap-2 w-full">
                                    <span className="text-gray-700 font-bold">Pride Score</span>
                                    <p>
                                        <span className="text-gray-700 mr-2">Started</span>
                                        <span className="text-gray-700">Oct. 2023</span>
                                    </p>
                                </div>
                                <p className='italic'>NextJS - TailwindCSS</p>
                                <p className="mt-2">
                                    Premiere exp boulot, eh bien vous savez, je ne crois pas u&apos;il y ait de bonnes ou de mauvaises situations. Si vous voulez J&apos;ai toujours eu cette appétance pour le travail, mais c&apos;était une passion, c&apos;est à dire profession passion.
                                </p>
                            </div>

                            <hr className="my-6 border-t border-gray-300"></hr>

                            <h2 className="text-xl font-bold mt-6 mb-4">Diplômes et Formations</h2>
                            <div className="mb-6">
                                <div className="flex justify-between flex-wrap gap-2 w-full">
                                    <span className="text-gray-700 font-bold">Pride Score</span>
                                    <p>
                                        <span className="text-gray-700 mr-2">Started</span>
                                        <span className="text-gray-700">Oct. 2023</span>
                                    </p>
                                </div>
                                <p className='italic'>NextJS - TailwindCSS</p>
                                <p className="mt-2">
                                    Premiere exp boulot, eh bien vous savez, je ne crois pas u&apos;il y ait de bonnes ou de mauvaises situations. Si vous voulez J&apos;ai toujours eu cette appétance pour le travail, mais c&apos;était une passion, c&apos;est à dire profession passion.
                                </p>
                            </div>

                            <div className="mb-6">
                                <div className="flex justify-between flex-wrap gap-2 w-full">
                                    <span className="text-gray-700 font-bold">Pride Score</span>
                                    <p>
                                        <span className="text-gray-700 mr-2">Started</span>
                                        <span className="text-gray-700">Oct. 2023</span>
                                    </p>
                                </div>
                                <p className='italic'>NextJS - TailwindCSS</p>
                                <p className="mt-2">
                                    Premiere exp boulot, eh bien vous savez, je ne crois pas u&apos;il y ait de bonnes ou de mauvaises situations. Si vous voulez J&apos;ai toujours eu cette appétance pour le travail, mais c&apos;était une passion, c&apos;est à dire profession passion.
                                </p>
                            </div>

                            <div className="mb-6">
                                <div className="flex justify-between flex-wrap gap-2 w-full">
                                    <span className="text-gray-700 font-bold">Pride Score</span>
                                    <p>
                                        <span className="text-gray-700 mr-2">Started</span>
                                        <span className="text-gray-700">Oct. 2023</span>
                                    </p>
                                </div>
                                <p className='italic'>NextJS - TailwindCSS</p>
                                <p className="mt-2">
                                    Premiere exp boulot, eh bien vous savez, je ne crois pas quil y ait de bonnes ou de mauvaises situations. Si vous voulez J&apos;ai toujours eu cette appétance pour le travail, mais c&apos;était une passion, c&apos;est à dire profession passion.
                                </p>
                            </div>

                            <hr className="my-6 border-t border-gray-300"></hr>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CV;