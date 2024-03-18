import Link from 'next/link';
import { FaGithub } from "react-icons/fa";

const Skills = () => {
    return (
        <div className='flex justify-between p-4'>
            <div>
                <p className='text-center'>Mes stacks</p>
                <div className='grid grid-cols-4 p-2 w-full'>
                    <img className='w-12 m-2' src='/javascript.svg' alt='Javascript' />
                    <img className='w-12 m-2' src='/html5.svg' alt='HTML' />
                    <img className='w-12 m-2' src='/css3.svg' alt='CSS' />
                    <img className='w-12 m-2' src='/tailwindcss.svg' alt='TailwindCSS' />
                    <img className='w-12 m-2' src='/react.svg' alt='React' />
                    <img className='w-12 m-2' src='/nextjs.svg' alt='Nextjs' />
                    <img className='w-12 m-2' src='/sql.svg' alt='SQL' />
                    <img className='w-12 m-2' src='/php.svg' alt='PHP' />
                </div>
            </div>
            <div>
                <p className='text-center'>Mes outils</p>
                <div className='grid grid-cols-4 p-2 w-full'>
                    <img className='w-12 m-2' src='/vscode.svg' alt='VS Code' />
                    <img className='w-12 m-2' src='/github.svg' alt='GitHub' />
                    <img className='w-12 m-2' src='/notion.svg' alt='Notion' />
                    <img className='w-12 m-2' src='/discord.svg' alt='Discord' />
                    <img className='w-12 m-2' src='/postman.svg' alt='PostMan' />
                </div>
            </div>
        </div>
    );
};

export default Skills;