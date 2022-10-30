import React from 'react';
import './PatientFeedback.css'

import bdoctor from '../assests/Rectangle 40.png'
import roundPic from '../assests/Ellipse 7.png'

const PatientFeedback = () => {
    return (
        <div className='lg:px-48 mt-24'>
            <div className="carousel w-full ">

                <div id="slide1" className="carousel-item relative opacity-70 w-full feedback">
                    <img src={bdoctor} className="w-full " />

                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2 ">
                        <a href="#slide4" className="btn btn-circle">❮</a>

                        <div>
                            <h2 className='text-4xl font-bold text-center mb-8 lg:-mt-24 text-white'>Patient Feedback</h2>

                            <div className='flex '>
                                <div className='mr-4 '>
                                    <img src={roundPic} className="w-48 h-48" />

                                </div>
                                <div className='w-96'>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Accumsan duis posuere scelerisque curabitur lorem. Viverra at venenatis, arcu et. Elementum nunc eleifend ipsum mauris ut nunc aliquet nulla aliquet. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                    <p>TOM COOPPER <br></br>
                                        <span className='text-[#FF8B42]'>Managing Director Or Art</span></p>

                                </div>
                            </div>
                        </div>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default PatientFeedback;