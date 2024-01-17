import React from 'react'
import BannerCard from '../home/BannerCard'

const Banner = () => {
    return (
        <div className='px-4 lg:px-24 bg-teal-100  top-0 left-0 right-0 '>
            <div className='flex w-full flex-col md:flex-row justify-between items-center gap-12 py-40'>
                <div className='md:w-1/2 space-y-8 h-full'>
                    <h2 className='text-5xl font-bold leading-snug text-black'>Buy and sell your books <span className='text-blue-700'>for the best prices</span></h2>
                    <br></br>
                    <span className='md:w-4/5'>“If you only read the books that everyone else is reading, you can only think what everyone else is thinking.” ― Haruki Murakami, Norwegian Wood
                    </span>
                    {/* <div>
                        <input type='search' name='search' id='search' placeholder='search a book' className='py-2 px-2 rounded-s-sm outline none' />
                        <button className='bg-blue-700 px-6 py-2 text-white font-medium hover:bg-black transition-all-ease-in duration-200'>Search</button>
                    </div> */}
                </div>
                <div>
                    <BannerCard />
                </div>
            </div>
        </div>
    )
}

export default Banner