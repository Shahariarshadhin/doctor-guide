import React from 'react';

import { BsFillBookmarkFill, BsBookmark } from "react-icons/bs";

import expert1 from '../../assests/Rectangle 13.png'
import expert2 from '../../assests/Rectangle 108.png'

const MedicalExpert = () => {
    return (
        <div>

            <div className='text-center mb-16 '>
                <h2 className='text-4xl font-bold mb-4'>Our Medical Experts</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec fermentum augue quis augue ornare, eget <br></br>faucibus felis pharetra. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <button className='lg:-mr-[1200px]'>View All</button>
            </div>

            <div className='grid lg:grid-cols-3 lg:px-48'>

                <div className="card w-96  bg-base-100 shadow-xl">
                    <figure>
                        <img src={expert1} alt="Shoes" /></figure>
                    <div className="card-body">

                        <div className='flex'>

                            <div>
                                <h2 className="card-title mr-40">Dr. Emrul Kayes</h2>
                            </div>
                            <div className="card-actions items-center justify-end">
                                <BsFillBookmarkFill></BsFillBookmarkFill>

                            </div>

                        </div>




                        <p className='text-lg'>MBBS, FCFS, BCS, BSCBS</p>

                        <div className='flex'>

                            <div>
                                <p className='w-48 mr-8'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna.</p>
                            </div>
                            <div className="card-actions justify-end">
                                <button className="btn bg-[#0089BA] border-none">Buy Now</button>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="card w-96  bg-base-100 shadow-xl">
                    <figure><img src={expert2} alt="Shoes" /></figure>
                    <div className="card-body">

                        <div className='flex'>

                            <div>
                                <h2 className="card-title mr-40">Dr. Emrul Kayes</h2>
                            </div>
                            <div className="card-actions items-center justify-end">
                                <BsBookmark></BsBookmark>

                            </div>

                        </div>




                        <p className='text-lg'>MBBS, FCFS, BCS, BSCBS</p>

                        <div className='flex'>

                            <div>
                                <p className='w-48 mr-8'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna.</p>
                            </div>
                            <div className="card-actions justify-end">
                                <button className="btn bg-[#FF8B42] border-none">Buy Now</button>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="card w-96  bg-base-100 shadow-xl">
                    <figure><img className='w-96' src={expert1} alt="Shoes" /></figure>
                    <div className="card-body">

                        <div className='flex'>

                            <div>
                                <h2 className="card-title mr-40">Dr. Emrul Kayes</h2>
                            </div>
                            <div className="card-actions items-center justify-end">
                                <BsBookmark></BsBookmark>

                            </div>

                        </div>




                        <p className='text-lg'>MBBS, FCFS, BCS, BSCBS</p>

                        <div className='flex'>

                            <div>
                                <p className='w-48 mr-8'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna.</p>
                            </div>
                            <div className="card-actions justify-end">
                                <button className="btn bg-[#FF8B42] border-none">Buy Now</button>
                            </div>

                        </div>
                    </div>
                </div>




            </div>
            <div className='text-center mt-8'>
                <input type="radio" name="radio-1" className="radio mr-6" checked />
                <input type="radio" name="radio-1" className="radio mr-6" />
                <input type="radio" name="radio-1" className="radio" />
            </div>

        </div>
    );
};

export default MedicalExpert;