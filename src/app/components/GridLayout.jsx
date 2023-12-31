import Image from 'next/image';
import TextGrid from './TextGrid';
import delivery from '../../../public/images/delivery_3d.webp'
import bandera from '../../../public/images/bandera.webp'
import burguer from '../../../public/images/hamburguesa.webp'

function GridHomeLayout () {
    return (
        <div>
        <TextGrid />
        <main className='container flex flex-nowrap gap-1 rounded-t-md'>
            <button className='text-center w-36 h-36 bg-red-400 rounded-lg'>
                <Image src={delivery} width={560} height={560} alt="ilustración 3D sobre Delivery" className='w-full h-full rounded-lg'/>
            </button>
            <button className='text-center w-36 h-36 bg-red-400 rounded-lg'>
                <Image src={burguer} width={550} height={550} alt="ilustración 3D sobre Delivery" className='w-full h-full bg-cover rounded-lg'/>
            </button>
            <button className='text-center w-36 h-36 bg-red-400 rounded-lg'>
                <Image src={bandera} width={550} height={550} alt="ilustración 3D sobre Delivery" className='w-full h-full bg-cover rounded-lg'/>
            </button>
        </main>
        </div>  
    )
}

export default GridHomeLayout;