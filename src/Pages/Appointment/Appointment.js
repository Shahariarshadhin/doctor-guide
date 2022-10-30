import React from 'react';
import './Appointment.css'
import Ellipse12 from '../../assests/Ellipse 12.png'
import Ellipse9 from '../../assests/Ellipse 9.png'
import Ellipse10 from '../../assests/Ellipse 10.png'
import Ellipse11 from '../../assests/Ellipse 11.png'
import dotgrid from '../../assests/Dot Grid.png'
import doctor1 from '../../assests/kisspng-physician-uniform-scrubs-white-coat-medicine-foreign-doctor-material-5a68c8b33322b6.png'
import doctor2 from '../../assests/kisspng-physician-nursing-medicine-health-care-foreign-doctor-5a6b98c3c69386.png'


const Appointment = () => {
    return (
        <div>
            <div className="hero min-h-screen -mt-36">
                <div className="hero-content flex-col lg:flex-row-reverse">

                    <img src={doctor2} className=" max-w-sm w-96 lg:h-[600px]  rounded-lg  doctor2" />
                    <img src={doctor1} className="max-w-sm w-96 lg:h-[520px]  rounded-lg  doctor1" />
                    <img className="lg:-mr-32 lg:mt-[500px]" src={dotgrid} alt="" />
                    <div>
                        <div className='grid lg:gap-[-180] lg:grid-cols-4'>
                            <img className="-ml-52  h-36" src={Ellipse12} alt="" />
                            <img className="-ml-[400px] -mt-4 h-44" src={Ellipse9} alt="" />
                            <img className="-ml-[587px] -mt-8 h-52" src={Ellipse10} alt="" />
                            <img className="-ml-[774px] -mt-12 h-60" src={Ellipse11} alt="" />
                            <img className="lg:-mt-48 lg:ml-52" src={dotgrid} alt="" />
                        </div>
                        <div className="lg:ml-[180px]">
                            <h1 className="text-[40px] font-bold text-left">Find The Care <br></br> You Need</h1>
                            <p className="text-justify lg:mr-12">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                            <button className="btn border-none w-48 h-14 lg:mr-96  btn-sm bg-[#FF8B42] rounded mt-9   text-[14px]">Make Appointment</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Appointment;