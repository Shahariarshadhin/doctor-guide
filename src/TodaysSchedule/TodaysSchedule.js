import React from 'react';
import './TodaysSchedule.css'

import todayDoc from '../assests/5a3a791648b006 1.png'

const TodaysSchedule = () => {
    return (
        <div className='grid lg:grid-cols-2 lg:px-24 mb-24'>
            <div className='lg:ml-48'>

                <h2 className='text-3xl font-bold mb-20'>Doctor’s Schedule Today</h2>
                <div className='flex'>

                    <div>
                        <p className='text-2xl mr-8 text-[#EA5262] font-medium'>08:00</p>
                    </div>
                    <div className=" justify-end">
                        <p className='text-xl font-medium'>General Practitioner</p>
                        <p>Dr. Robbert Algazali</p>
                    </div>

                </div>

                <div className="divider w-64"></div>
                <div className='flex'>

                    <div>
                        <p className='text-2xl mr-8 text-[#EA5262] font-medium'>06:00</p>
                    </div>
                    <div className=" justify-end">
                        <p className='text-xl font-medium'>Dentist Specialist</p>
                        <p>Dr. Robbert Algazali</p>
                    </div>

                </div>

                <div className="divider w-64"></div>
                <div className='flex'>

                    <div>
                        <p className='text-2xl mr-8 text-[#EA5262] font-medium'>09:00</p>
                    </div>
                    <div className=" justify-end">
                        <p className='text-xl font-medium'>General Practitioner</p>
                        <p>Dr. Robbert Algazali</p>
                    </div>

                </div>

                <div className="divider w-64"></div>
                <div className='flex'>

                    <div>
                        <p className='text-2xl mr-8 text-[#EA5262] font-medium'>10:00</p>
                    </div>
                    <div className=" justify-end">
                        <p className='text-xl font-medium'>Pediatric</p>
                        <p>Dr. Robbert Algazali</p>
                    </div>

                </div>

                <div className="divider w-64"></div>
                <div className='flex'>

                    <div>
                        <p className='text-2xl mr-8 text-[#EA5262] font-medium'>07:00</p>
                    </div>
                    <div className=" justify-end">
                        <p className='text-xl font-medium'>General Practitioner</p>
                        <p>Dr. Robbert Algazali</p>
                    </div>

                </div>

                <div className="divider w-64"></div>

            </div>
            <div className='docback'>

                <img className='lg:-mt-36 lg:-ml-20' src={todayDoc} alt="" />



            </div>
        </div>
    );
};

export default TodaysSchedule;