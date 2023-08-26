import Image from 'next/image';
import TextGrid from './TextGrid';

function IconsAssets () {
    return (
        <Image
            alt=''
            src={image}
            placeholder=''
            width="42px"
            height="16px"
        ></Image>
    )
}

function GridHomeLayout () {
    return (
        <>
        <TextGrid />
        <main className='container grid mx-auto'>
            <div className=''></div>
            <div className=''></div>
            <div className=''></div>
        </main>
        <TextGrid />
        </>
        
    )
}

export default GridHomeLayout;