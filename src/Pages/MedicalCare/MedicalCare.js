import React from 'react';
import medi1 from '../../assests/Rectangle 26.png'
import medi2 from '../../assests/Rectangle 26-1.png'
import medi3 from '../../assests/Rectangle 26-2.png'
import medi4 from '../../assests/Rectangle 26 (3).png'
import medi5 from '../../assests/Rectangle 26 (4).png'
import medi6 from '../../assests/Rectangle 26 (5).png'

const MedicalCare = () => {
    return (
        <div className='mb-16'>

            <div className='text-center mb-16'>
                <h2 className='text-4xl font-bold mb-4'>Our Medical Care</h2>
                <p>Services We Provide</p>
            </div>

            <div className='rounded-t-lg lg:px-24 lg:ml-10 grid lg:grid-cols-4 gap-6'>

                <div className=" card-compact w-72 h-64   ">
                    <figure><img className='' src={medi1} alt="Shoes" /></figure>
                    <div className=" bg-[#6E27E0]">
                        <p className="text-xl py-2 text-center text-white">Orthopedic Clinic</p>

                    </div>
                </div>
                <div className=" card-compact w-72 h-64   ">
                    <figure><img src={medi2} alt="Shoes" /></figure>
                    <div className=" bg-[#6E27E0]">
                        <p className="text-xl py-2 text-center text-white">Orthopedic Clinic</p>

                    </div>
                </div>
                <div className="card-compact w-72 h-64   ">
                    <figure><img src={medi3} alt="Shoes" /></figure>
                    <div className=" bg-[#6E27E0]">
                        <p className="text-xl py-2 text-center text-white">Orthopedic Clinic</p>

                    </div>
                </div>
                <div className="card-compact w-72 h-64   ">
                    <figure><img src={medi1} alt="Shoes" /></figure>
                    <div className=" bg-[#6E27E0]">
                        <p className="text-xl py-2 text-center text-white">Orthopedic Clinic</p>

                    </div>
                </div>
                <div className="card-compact w-72 h-64   ">
                    <figure><img src={medi4} alt="Shoes" /></figure>
                    <div className=" bg-[#6E27E0]">
                        <p className="text-xl py-2 text-center text-white">Orthopedic Clinic</p>

                    </div>
                </div>
                <div className=" card-compact w-72 h-64   ">
                    <figure><img src={medi5} alt="Shoes" /></figure>
                    <div className=" bg-[#6E27E0]">
                        <p className="text-xl py-2 text-center text-white">Orthopedic Clinic</p>

                    </div>
                </div>
                <div className=" card-compact w-72 h-64   ">
                    <figure><img src={medi6} alt="Shoes" /></figure>
                    <div className=" bg-[#6E27E0]">
                        <p className="text-xl py-2 text-center text-white">Orthopedic Clinic</p>

                    </div>
                </div>
                <div className=" card-compact w-72 h-64   ">
                    <figure><img src={medi1} alt="Shoes" /></figure>
                    <div className=" bg-[#6E27E0] h-10">
                        <p className="text-xl py-2 text-center text-white">Orthopedic Clinic</p>

                    </div>
                </div>

                <button className="btn border-none w-60 h-12 lg:ml-[650px]  btn-sm bg-[#FF8B42] rounded mt-9   text-[14px]">LOAD MORE DEPARTMENTS</button>

            </div>

        </div>
    );
};

export default MedicalCare;