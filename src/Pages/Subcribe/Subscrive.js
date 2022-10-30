import React from 'react';
import dotgrid from '../../assests/Dot Grid.png'

import doc from '../../assests/kisspng-physician-uniform-scrubs-white-coat-medicine-foreign-doctor-material-5a68c8b33322b6.png'

const Subscrive = () => {
    return (
        <div>
            <div className=" min-h-screen lg:px-52  mt-24 lg:-mb-96">
                <div className="hero-content flex-col lg:flex-row rounded-3xl bg-[#0089BA] ">
                    <img className="lg:-mr-48 lg:-mt-64" src={dotgrid} alt="" />

                    <img src={doc} className="max-w-sm rounded-lg lg:-mt-28 lg:-mb-4 lg:ml-24" />
                    <div>
                        <h1 className="text-2xl font-bold text-white">Subscribe Now</h1>
                        <p className="py-6 text-white">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>

                        <form>
                            <label for="search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300">Your Email</label>
                            <div class="relative">

                                <input type="search" id="search" class="block p-6 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search" required />
                                <button type="submit" class="text-white absolute right-6 bottom-4 bg-[#FF8B42] font-medium rounded-lg text-sm px-4 py-2 ">Search</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Subscrive;