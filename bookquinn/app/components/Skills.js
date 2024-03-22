import Link from 'next/link';

const Skills = () => {
    return (
        <>
            <div className='justify-between p-4 h-screen bg-gradient-to-r from-fuchsia-500 to-cyan-500'>
                <div className='m-3'>
                    <p className='text-center'>Mes stacks</p>
                    <div class="flex justify-center flex-wrap gap-2 lg:grid-cols-4 xl:grid-cols-5 p-6 bg-cyan-200 border border-red-600 rounded-lg">
                        <div class="bg-white rounded-lg shadow w-14 h-14 flex justify-center items-center">
                            <img className='w-12 m-2' src='/javascript.svg' alt='Javascript' />
                        </div>
                        <div class="bg-white rounded-lg shadow w-14 h-14 flex justify-center items-center">
                            <img className='w-12 m-2' src='/html5.svg' alt='HTML' />

                        </div>
                        <div class="bg-white rounded-lg shadow w-14 h-14 flex justify-center items-center">
                            <img className='w-12 m-2' src='/css3.svg' alt='CSS' />

                        </div>
                        <div class="bg-white rounded-lg shadow w-14 h-14 flex justify-center items-center">
                            <img className='w-12 m-2' src='/tailwindcss.svg' alt='TailwindCSS' />

                        </div>
                        <div class="xl:col-start-2 bg-white rounded-lg shadow w-14 h-14 flex justify-center items-center">
                            <img className='w-12 m-2' src='/react.svg' alt='React' />

                        </div>
                        <div class="bg-white rounded-lg shadow w-14 h-14 flex justify-center items-center">
                            <img className='w-12 m-2' src='/nextjs.svg' alt='Nextjs' />

                        </div>
                        <div class="bg-white rounded-lg shadow w-14 h-14 flex justify-center items-center">
                            <img className='w-12 m-2' src='/sql.svg' alt='SQL' />

                        </div>
                        <div class="bg-white rounded-lg shadow w-14 h-14 flex justify-center items-center">
                            <img className='w-12 m-2' src='/php.svg' alt='PHP' />

                        </div>
                    </div>
                </div>

                <div className='m-3'>
                    <p className='text-center'>Mes Outils</p>
                    <div class="flex justify-center flex-wrap gap-2 lg:grid-cols-4 xl:grid-cols-5 p-6 bg-red-200 border border-cyan-600 rounded-lg">
                        <div class="bg-white rounded-lg shadow w-14 h-14 flex justify-center items-center">
                            <img className='w-12 m-2' src='/vscode.svg' alt='VS Code' />
                        </div>
                        <div class="bg-white rounded-lg shadow w-14 h-14 flex justify-center items-center">
                            <img className='w-12 m-2' src='/github.svg' alt='GitHub' />

                        </div>
                        <div class="bg-white rounded-lg shadow w-14 h-14 flex justify-center items-center">
                            <img className='w-12 m-2' src='/notion.svg' alt='Notion' />

                        </div>
                        <div class="bg-white rounded-lg shadow w-14 h-14 flex justify-center items-center">
                            <img className='w-12 m-2' src='/discord.svg' alt='Discord' />

                        </div>
                        <div class="xl:col-start-2 bg-white rounded-lg shadow w-14 h-14 flex justify-center items-center">
                            <img className='w-12 m-2' src='/postman.svg' alt='PostMan' />

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Skills;