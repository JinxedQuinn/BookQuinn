import Link from 'next/link';

const Presentation = () => {
    return (
        <div className='p-3 bg-gradient-to-r from-fuchsia-500 to-cyan-500 h-screen'>
            <h1 className='text-center p-3 text-4xl font-bold'>
                Chloé Nicolini, développeuse full stack
            </h1>

            <p className='text-center p-2 border border-indigo-800 rounded-lg shadow-lg'>
                Junior en code, J&apos;ai pour ambition de monter en compétences afin de développer un projet personnel que J&apos;aimerais voir aboutir. Pour cela, J&apos;ai décidé d&apos;entamer une formation chez Ada Tech School pour devenir développeuse web.
            </p>

            <div className='grid grid-cols-3'>
                <div className="max-w-sm rounded overflow-hidden shadow-lg m-3">
                    <img className="w-full" src="/ada.png" alt="Logo Ada" />
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">Ada Tech School : Casser les codes</div>
                        <p className="text-gray-700 text-base">
                        J&apos;ai entamé une reconversion professionnelle à Ada Tech School pour devenir développeuse web. J&apos;ai choisi cette école pour sa pédagogie inclusive et bienveillante. c&apos;est une formation Full Stack
                        </p>
                    </div>
                </div>

                <div className="max-w-sm rounded overflow-hidden shadow-lg m-3">
                    <img className="w-full" src="/AdaBegin.png" alt="Calendrier" />
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">Début de l&apos;aventure ?</div>
                        <p className="text-gray-700 text-base">
                            23 Octobre 2023
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Presentation;