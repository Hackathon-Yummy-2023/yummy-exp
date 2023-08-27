import Image from 'next/image';
import TextGrid from './TextGrid';

function GridHomeLayout () {
    return (
        <div>
        <TextGrid />
        <main className='container flex flex-nowrap gap-1 p-1 rounded-t-md'>
            <div className='text-center w-36 h-36 bg-red-400 rounded-lg'>
                <h1>Hola</h1>
            </div>
            <div className='text-center w-36 h-36 bg-red-400 rounded-lg'>
                <h1>Hola</h1>
            </div>
            <div className='text-center w-36 h-36 bg-red-400 rounded-lg'>
                <h1>Hola</h1>
            </div>
        </main>
        </div>  
    )
}

export default GridHomeLayout;