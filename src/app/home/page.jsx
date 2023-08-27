import GridHomeLayout from '../components/GridLayout';

export default function Home() {
    return (
        <>
         
          <header className='container first-line:h-20 bg-[#06926e]'>

            <nav className='flex flex-wrap flex-row justify-between'>
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>

              <div className='flex flex-ro p-1 justify-between w-1/2 h-auto'>
              <p className='text-white'>Ubicación Actual</p> 
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
              </svg>

              
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
              </svg>

              </div>
              
            </nav>

            <h2 className='text-white text-xl font-bold font-sans'>Hola, Codicon</h2>

            <form className='flex w-full justify-center items-end m-2'>
              <div className='w-2/4 p-2'>
                <input type="text" id="hero-field" name="hero-field" class="w-full rounded-md border bg-opacity-40 border-zinc-100 focus:ring-2 focus:bg-transparent focus:border-zinc-200 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
              </div>
            </form>

          </header>

            <div className='w-auto mb-[16px] mx-[16px]'>
              <div className='container h-[120px] mt-[16px] rounded-lg bg-red-500'></div>
            </div>
          
            <GridHomeLayout/> 
            <GridHomeLayout/> 
            <GridHomeLayout/> 
         
        </>
    )
}