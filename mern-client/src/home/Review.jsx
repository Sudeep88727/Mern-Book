import React from 'react';
// Import Swiper React components
import { Avatar } from 'flowbite-react';
import { FaStar } from 'react-icons/fa6';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { Pagination } from 'swiper/modules';
import proPic from '../assets/220453.jpg';
const Review = () => {
    return (
        <div className='my-12 px-4 lg:px-24'>
            <h2 className='text-5xl font-bold text-center mb-10 leading-snug'>our customers</h2>
            <div>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={30}
                    pagination={{
                        clickable: true,
                    }}
                    breakpoints={{
                        640: {
                            slidesPerView: 1,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 40,
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 50,
                        },
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide className='mb-10 shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border'>
                        <div className='space-y-6'>
                            <div className='text-amber-500 flex gap-2'>
                                <FaStar />
                                <FaStar />
                                <FaStar />
                            </div>
                            <div>
                                <p className='mb-5 mt-2'>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
                                </p>
                                <Avatar img={proPic} alt="avatar of Jese" rounded className='w-10 mb-3' />
                                <h5 className='text-lg font-medium'>Mark ping</h5>
                                <p className='text-base'>CEO, ABC Company</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='mb-10 shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border'>
                        <div className='space-y-6'>
                            <div className='text-amber-500 flex gap-2'>
                                <FaStar />
                                <FaStar />
                                <FaStar />
                            </div>
                            <div>
                                <p className='mb-5 mt-2'>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
                                </p>
                                <Avatar img={proPic} alt="avatar of Jese" rounded className='w-10 mb-3' />
                                <h5 className='text-lg font-medium'>Mark ping</h5>
                                <p className='text-base'>CEO, ABC Company</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='mb-10 shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border'>
                        <div className='space-y-6'>
                            <div className='text-amber-500 flex gap-2'>
                                <FaStar />
                                <FaStar />
                                <FaStar />
                            </div>
                            <div>
                                <p className='mb-5 mt-2'>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
                                </p>
                                <Avatar img={proPic} alt="avatar of Jese" rounded className='w-10 mb-3' />
                                <h5 className='text-lg font-medium'>Mark ping</h5>
                                <p className='text-base'>CEO, ABC Company</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='mb-10 shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border'>
                        <div className='space-y-6'>
                            <div className='text-amber-500 flex gap-2'>
                                <FaStar />
                                <FaStar />
                                <FaStar />
                            </div>
                            <div>
                                <p className='mb-5 mt-2'>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
                                </p>
                                <Avatar img={proPic} alt="avatar of Jese" rounded className='w-10 mb-3' />
                                <h5 className='text-lg font-medium'>Mark ping</h5>
                                <p className='text-base'>CEO, ABC Company</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='mb-10 shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border'>
                        <div className='space-y-6'>
                            <div className='text-amber-500 flex gap-2'>
                                <FaStar />
                                <FaStar />
                                <FaStar />
                            </div>
                            <div>
                                <p className='mb-5 mt-2'>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
                                </p>
                                <Avatar img={proPic} alt="avatar of Jese" rounded className='w-10 mb-3' />
                                <h5 className='text-lg font-medium'>Mark ping</h5>
                                <p className='text-base'>CEO, ABC Company</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='mb-10 shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border'>
                        <div className='space-y-6'>
                            <div className='text-amber-500 flex gap-2'>
                                <FaStar />
                                <FaStar />
                                <FaStar />
                            </div>
                            <div>
                                <p className='mb-5 mt-2'>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
                                </p>
                                <Avatar img={proPic} alt="avatar of Jese" rounded className='w-10 mb-3' />
                                <h5 className='text-lg font-medium'>Mark ping</h5>
                                <p className='text-base'>CEO, ABC Company</p>
                            </div>
                        </div>
                    </SwiperSlide>

                </Swiper>
            </div>
        </div>
    )
}

export default Review