import React from 'react';
import './KidSick.css'
import kidsDoc from '../../assests/kisspng-physician-nursing-medicine-health-care-foreign-doctor-5a6b98c3c69386 1.png'

import { MdMedicalServices } from "react-icons/md";

const KidSick = () => {
    return (
        <div className='grid lg:grid-cols-2 lg:px-24 mt-24 mb-24'>

            <div className='kidsdoc'>
                <div >

                    <img className='lg:-mt-48 bg-none lg:ml-20 ' src={kidsDoc} alt="" />



                </div>

            </div>

            <div>

                <h2 className='text-3xl font-bold mb-12'>Sick Kid? How to Deal with a <br></br> Child’s Fever: 4 Steps</h2>

                <div className='flex'>

                    <div>
                        <p className='text-2xl mr-8 mb-4 text-[#FF8B42] font-medium'><MdMedicalServices></MdMedicalServices></p>
                    </div>
                    <div className=" justify-end">

                        <p>Cras sit sed nec a nunc</p>
                    </div>

                </div>
                <div className='flex'>

                    <div>
                        <p className='text-2xl mr-8 mb-4 text-[#FF8B42] font-medium'><MdMedicalServices></MdMedicalServices></p>
                    </div>
                    <div className=" justify-end">

                        <p>Tempor mauris mauris in</p>
                    </div>

                </div>
                <div className='flex'>

                    <div>
                        <p className='text-2xl mr-8 mb-4 text-[#FF8B42] font-medium'><MdMedicalServices></MdMedicalServices></p>
                    </div>
                    <div className=" justify-end">

                        <p>Nibh turpis praesent pretium</p>
                    </div>

                </div>
                <div className='flex'>

                    <div>
                        <p className='text-2xl mr-8 mb-4 text-[#FF8B42] font-medium'><MdMedicalServices></MdMedicalServices></p>
                    </div>
                    <div className=" justify-end">

                        <p>Cras sit sed nec a nunc</p>
                    </div>

                </div>

            </div>

        </div>
    );
};

export default KidSick;