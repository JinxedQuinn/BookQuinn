import Link from 'next/link';

const Presentation = () => {
    return (
        <div>
            Présentation
            <div>
                Mes stacks
                <div className='grid-cols-4'>
                    <img src='/javascript.svg' alt='Javascript' />
                </div>
            </div>
            <div>
                Mes outils
            </div>
        </div>
    );
};

export default Presentation;