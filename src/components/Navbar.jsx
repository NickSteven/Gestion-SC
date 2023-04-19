const Navbar = () => {
    return (
        <div>
            <div className='md:block  hidden fixed top-0 left-0 right-0 bg-gray-300 z-10 shadow-md'>

                <div className='float-right'>
                    <ul className='flex py-3'>
                        <li className='mr-12'>
                            <a href='#'>
                                <span className='text-2xl font-bold hover:border-b-[2px] hover:border-black transition-all'>Professeurs</span>
                            </a>
                        </li>
                        <li className='mr-12'>
                            <a href='#'>
                                <span className='text-2xl font-bold hover:border-b-[2px] hover:border-black transition-all'>Salle</span>

                            </a>
                        </li>
                        <li className='mr-[150px]'>
                            <a href='#'>
                                <span className='text-2xl font-bold hover:border-b-[2px] hover:border-black transition-all'>Occupper</span>
                            </a>
                        </li>
                    </ul>
                </div>

            </div>
        </div>
    )
}

export default Navbar