import Image from 'next/image';
import TextGrid from './TextGrid';
import delivery from '../../../public/images/delivery_3d.jpg'
import bandera from '../../../public/images/bandera.jpg'
import burguer from '../../../public/images/hamburguesa.jpg'

function GridHomeLayout () {
    return (
        <div>
        <TextGrid />
        <main className='container flex flex-nowrap gap-1 p-1 rounded-t-md'>
            <div className='text-center w-36 h-36 bg-red-400 rounded-lg'>
                <Image src={delivery} width={560} height={560} alt="ilustración 3D sobre Delivery" className='w-full h-full rounded-lg'/>
            </div>
            <div className='text-center w-36 h-36 bg-red-400 rounded-lg'>
                <Image src={burguer} width={550} height={550} alt="ilustración 3D sobre Delivery" className='w-full h-full bg-cover rounded-lg'/>
            </div>
            <div className='text-center w-36 h-36 bg-red-400 rounded-lg'>
                <Image src={bandera} width={550} height={550} alt="ilustración 3D sobre Delivery" className='w-full h-full bg-cover rounded-lg'/>
            </div>
        </main>
        </div>  
    )
}

export default GridHomeLayout;