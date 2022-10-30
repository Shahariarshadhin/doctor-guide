import React from 'react';
import './Achivement.css'

import vector from '../../assests/Vector (2).png'


import { ImOffice } from "react-icons/im";
import { IoTrophyOutline } from "react-icons/io5";
import { MdOutlineEmojiEmotions } from "react-icons/md";
import { TbBed } from "react-icons/tb";

const Achivement = () => {
    return (
        <div className='achivement  lg:h-[410px] lg:w-[1500px] mb-10'>


            <div className="grid grid-cols-1 lg:grid-cols-4 ">




                <div class="lg:mt-28 lg:w-50 bg-none lg:ml-36">
                    <div class=" ">
                        <img className='lg:w-24  lg:h-28' src={vector} alt="" />
                        <p className='text-3xl text-white  ml-8 font-bold'>50</p>
                        <div >
                            <hr className='w-16 ml-4 border'></hr>
                        </div>
                        <p className='text-2xl text-white lg:-ml-8 font-bold'>Medical Experts</p>

                    </div>
                </div>
                <div class="w-50 bg-none lg:mt-32 lg:ml-24">
                    <div class="">
                        <h3 className='text-8xl text-white mx-auto'>  <TbBed /> </h3>
                        <p className='text-3xl text-white  ml-4 font-bold'>500</p>
                        <div >
                            <hr className='w-16 ml-4 border'></hr>
                        </div>
                        <p className='text-2xl text-white lg:-ml-8 font-bold'>Hospital Rooms</p>

                    </div>
                </div>
                <div class=" w-50 bg-none lg:mt-32 lg:ml-16">
                    <div class="">
                        <h3 className='text-8xl text-white mx-auto'> <IoTrophyOutline /> </h3>
                        <p className='text-3xl text-white  ml-8 font-bold'>20</p>
                        <div >
                            <hr className='w-16 ml-4 border'></hr>
                        </div>
                        <p className=' text-2xl text-white lg:-ml-8 font-bold'>Happy Clients</p>

                    </div>
                </div>
                <div class=" w-50 bg-none lg:mt-32">
                    <div class="">

                        <h3 className='text-8xl text-white mx-auto'> <MdOutlineEmojiEmotions /> </h3>
                        <p className='text-3xl text-white  ml-4 font-bold'>5000</p>
                        <div >
                            <hr className='w-16 ml-4 border'></hr>
                        </div>
                        <p className=' text-2xl text-white lg:-ml-3 font-bold'> Feedbacks</p>

                    </div>
                </div>


            </div>



        </div>
    );
};

export default Achivement;