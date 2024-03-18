import Link from 'next/link';

const Presentation = () => {
    return (
        <div className='p-3 bg-gradient-to-r from-fuchsia-500 to-cyan-500 h-screen'>
            <h1 className='text-center p-3 text-4xl font-bold'>
                Chloé Nicolini, développeuse full stack
            </h1>

            <p className='text-center p-2 border border-indigo-800 rounded-lg shadow-lg'>
                Junior en code, j'ai pour ambition de monter en compétences afin de développer un projet personnel que j'aimerais voir aboutir. Pour cela, j'ai décidé d'entamer une formation chez Ada Tech School pour devenir développeuse web.
            </p>

            <p className='p-2 text-center'>
                Je suis à la recherche d'une alternance de <strong>12 mois</strong>, sur un rythme de <strong>4 jours/semaine en entreprise.</strong>
            </p>
            <div className='flex justify-between'>
                <button className='flex max-w-sm rounded-xl bg-gradient-to-tr from-pink-300 to-blue-300 p-0.5 shadow-lg'>
                    <button className="flex-1 font-bold text-xl bg-white px-6 py-3 rounded-xl">
                        Formée à Ada Tech School
                    </button>
                </button>

                <button className='flex max-w-sm rounded-xl bg-gradient-to-tr from-pink-300 to-blue-300 p-0.5 shadow-lg'>
                    <button className="flex-1 font-bold text-xl bg-white px-6 py-3 rounded-xl">
                        From Oct. 2023
                    </button>
                </button>
            </div>
        </div>
    );
};

export default Presentation;
