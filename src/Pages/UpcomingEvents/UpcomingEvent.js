import React from 'react';
import './UpcomingEvents.css'
import event1 from '../../assests/Rectangle 42.png'
import event2 from '../../assests/Rectangle 42 (1).png'

import { TbCalendarTime } from "react-icons/tb";
import { BiTime } from "react-icons/bi";
import { IoLocation } from "react-icons/io5";

const UpcomingEvent = () => {
    return (
        <div>
            <div className=' lg:px-36 lg:ml-9'>
                <div className='text-center mb-16 mt-16'>
                    <h2 className='text-4xl font-bold mb-4'>Upcoming Events</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec fermentum augue quis augue ornare, eget <br></br>faucibus felis pharetra. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

                </div>

                <div className='grid lg:grid-cols-2'>

                    <div className='lg:w-[590px] lg:h-[590px] ml-2'>
                        <div className='container'>
                            <img src={event1} alt="" />
                            <div class="top-right lg:mt-8 lg:mr-8 border p-6 bg-[#6E27E0] bg-opacity-75 border-none">
                                <h2 className='text-3xl font-bold text-white'>12</h2>
                                <p>DEC, 2022</p>
                            </div>
                        </div>
                    </div>

                    <div className='p-8 lg:w-[709px] lg:h-[551px] lg:-ml-48 border'>

                        <h2 className='text-3xl font-bold mb-4'>How to lead a good healthy life</h2>

                        <div className='grid lg:grid-cols-3 mb-4'>

                            <div className='flex mt-2 items-center'>
                                <div className='mr-2 '>
                                    <h3 className='text-xl text-[#FF8B42] mx-auto'> <TbCalendarTime></TbCalendarTime> </h3>


                                </div>
                                <div>
                                    <p>15 Oct, 2019</p>

                                </div>
                            </div>
                            <div className='flex mt-2 items-center'>
                                <div className='mr-2 '>
                                    <h3 className='text-xl text-[#FF8B42] mx-auto'> <BiTime></BiTime> </h3>


                                </div>
                                <div>
                                    <p>8:00 AM - 5:00 PM</p>

                                </div>
                            </div>
                            <div className='flex mt-2 items-center'>
                                <div className='mr- '>
                                    <h3 className='text-xl text-[#FF8B42] mx-auto'> <IoLocation></IoLocation> </h3>


                                </div>
                                <div>
                                    <p>Uttara, TX 70240</p>

                                </div>
                            </div>


                        </div>




                        <p>Early had add equal china quiet visit. Appear an manner as no limits either praise in. In in written on charmed justice is amiable farther besides. Law insensible middletons unsatiable for apartments boy delightful unreserved. Early had add equal china quiet visit. Appear an manner as no limits either praise in. In in written on charmed justice is amiable farther besides. Law insensible middletons unsatiable for apartments boy delightful unreserved.</p>
                        <div className='flex mt-8'>
                            <div className='mr-4 '>
                                <button className="btn bg-[#FF8B42] border-none">Book Now</button>

                            </div>
                            <div>
                                <button className="btn btn-outline  text-[#FF8B42]">10 Available</button>

                            </div>
                        </div>

                    </div>

                </div>

            </div>



            <div className=' lg:px-36 lg:ml-12 '>


                <div className='grid lg:grid-cols-2'>



                    <div className='p-8 lg:w-[709px] lg:h-[551px]  border'>

                        <h2 className='text-3xl font-bold mb-4'>How to lead a good healthy life</h2>

                        <div className='grid lg:grid-cols-3 mb-4'>

                            <div className='flex mt-2 items-center'>
                                <div className='mr-2 '>
                                    <h3 className='text-xl text-[#FF8B42] mx-auto'> <TbCalendarTime></TbCalendarTime> </h3>


                                </div>
                                <div>
                                    <p>15 Oct, 2019</p>

                                </div>
                            </div>
                            <div className='flex mt-2 items-center'>
                                <div className='mr-2 '>
                                    <h3 className='text-xl text-[#FF8B42] mx-auto'> <BiTime></BiTime> </h3>


                                </div>
                                <div>
                                    <p>8:00 AM - 5:00 PM</p>

                                </div>
                            </div>
                            <div className='flex mt-2 items-center'>
                                <div className='mr- '>
                                    <h3 className='text-xl text-[#FF8B42] mx-auto'> <IoLocation></IoLocation> </h3>


                                </div>
                                <div>
                                    <p>Uttara, TX 70240</p>

                                </div>
                            </div>


                        </div>




                        <p>Early had add equal china quiet visit. Appear an manner as no limits either praise in. In in written on charmed justice is amiable farther besides. Law insensible middletons unsatiable for apartments boy delightful unreserved. Early had add equal china quiet visit. Appear an manner as no limits either praise in. In in written on charmed justice is amiable farther besides. Law insensible middletons unsatiable for apartments boy delightful unreserved.</p>
                        <div className='flex mt-8'>
                            <div className='mr-4 '>
                                <button className="btn bg-[#FF8B42] border-none">Book Now</button>

                            </div>
                            <div>
                                <button className="btn btn-outline  text-[#FF8B42]">20 Available</button>

                            </div>
                        </div>

                    </div>

                    <div className='lg:w-[590px] lg:h-[590px] lg:-ml-[78px] dateimage'>
                        <div className='container'>
                            <img src={event2} alt="" />
                            <div class="top-right lg:mt-8 lg:mr-8 border p-6 bg-[#6E27E0] bg-opacity-75 border-none">
                                <h2 className='text-3xl font-bold text-white'>12</h2>
                                <p>DEC, 2022</p>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default UpcomingEvent;