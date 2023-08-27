import Image from 'next/image';
import TextGrid from './TextGrid';

function GridHomeLayout () {
    return (
        <>
        <TextGrid />
        <main className='container flex px-5 flex-wrap py-25 mx-auto'>
            <div className=''>
                <Image
                    alt=""
                    
                >

                </Image>
            </div>
            <div className=''>
                <Image alt="">

                </Image>
            </div>
            <div className=''>
                <Image alt='' width="42px" height="16px">

                </Image>
            </div>
        </main>
        <TextGrid />
        </>
        
    )
}

export default GridHomeLayout;