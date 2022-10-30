import React from 'react';
import navvector from '../../assests/Vector.png'
import { FaTwitterSquare, FaLinkedin, FaFacebookSquare } from "react-icons/fa";
import { IoLocation } from "react-icons/io5";
import { BsFillTelephoneFill } from "react-icons/bs";
import { AiFillMail } from "react-icons/ai";

const Footer = () => {
    return (
        <div>

            <footer className="footer p-10 bg-[#273240] text-white">
                <div className='w-60 '>
                    <div class="flex items-center">
                        <img className='h-8 mr-2' src={navvector} alt="" />
                        <div>
                            <p className='lg:text-[24px] text-[#FF8B42]'>Doctor Guide</p>
                        </div>
                    </div>


                    <p >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ut cras velit senectus id tellus aliquam enim felis. Sed commodo cursus tellus sapien, viverra imperdiet morbi dignissim. Consequat in metus arcu eget.</p>
                    <div className="md:place-self-center md:justify-self-start ">
                        <div className="grid grid-flow-col gap-4 ">
                            <h3 className='text-3xl mx-auto  text-[#FF8B42] '><FaTwitterSquare /> </h3>
                            <h3 className='text-3xl mx-auto  text-[#FF8B42] '><FaLinkedin /> </h3>
                            <h3 className='text-3xl mx-auto   text-[#FF8B42] '><FaFacebookSquare /> </h3>

                        </div>
                    </div>
                </div>
                <div>
                    <span className="footer-title ">Our Services</span>
                    <a className="link underline-offset-[10px] ">Bills & Insurance</a>
                    <a className="link  mt-2 underline-offset-[10px] ">Cancer Screening</a>
                    <a className="link  mt-2 underline-offset-[10px] ">Cardic Surgery</a>
                    <a className="link  mt-2 underline-offset-[10px] ">Neurology</a>
                    <a className="link  mt-2 underline-offset-[10px] ">Covid-19 Vaccine</a>
                </div>
                <div>
                    <span className="footer-title">Contact Us</span>
                    <div className="flex items-center p-2 ">
                        <IoLocation className='text-xl text-[#FF8B42] -mt-8'></IoLocation>
                        <div className='px-4 '>

                            <p>1234 Uttara Khal Pahr,<br></br> Image Osman Center,<br></br>
                                Sonargao, Janapath</p>
                        </div>
                    </div>
                    <div className="flex items-center p-2">
                        <BsFillTelephoneFill className='text-xl text-[#FF8B42]'></BsFillTelephoneFill>
                        <div className='px-4 '>

                            <p>+09876543211</p>
                        </div>
                    </div>
                    <div className="flex items-center p-2">
                        <AiFillMail className='text-xl text-[#FF8B42]'></AiFillMail>
                        <div className='px-4 '>

                            <p>doctorguide@example.com</p>
                        </div>
                    </div>

                </div>
                <div className='w-48'>
                    <span className="footer-title">Doctor Schedule</span>
                    <p>At vero eos et accusam et justou dolores et ea rebum tet clita kasd gubergren no sea takimata.</p>
                    <button className="btn border-none w-36 h-12  btn-sm bg-[#FF8B42] rounded mt-9   text-[12px]">View Schedule</button>
                </div>
            </footer>
            <hr></hr>
            <footer className="footer px-10 py-4 border-t bg-[#273240] text-white border-base-300">
                <div className="items-center grid-flow-col py-7">



                    <p>Copyright © 2022. All Rights Reserved. Made with  by Solutya.</p>
                    <p className='lg:ml-96'><span className='mr-4'>Latest news</span>      <span className='mr-4'>Privacy Policy</span>      <span className='mr-4'>Terms & Conditions</span></p>

                </div>

            </footer>

        </div>
    );
};

export default Footer;



// <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current bg-red"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg></a>
// <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg></a>
// <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></a>