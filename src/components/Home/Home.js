import React from 'react';
import './Home.css'

const Home = () => {
    return (
        <div className='container grid grid-cols-1 md:grid-cols-2 p-16'>
            <div className='flex flex-col align-center justify-center'>
                <div className="parent px-10 text-9xl">World Best Player<div id="border"></div></div>
                <div className="parent px-10">Your Favourite Player<div id="border"></div></div>
                <p className='px-10 pt-10'>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi cumque praesentium, ipsum, esse aspernatur eos magnam earum laboriosam magni dolore dolorum obcaecati pariatur atque eaque explicabo soluta deserunt rerum consequuntur?
                </p>
                <button className='w-32 ms-10 mt-10 bg-cyan-400	m-5 rounded-md p-3'>Live Demo</button>
            </div>
            <div>
                <img className=' md:w-3/5 flex justify-center mx-auto my-10' src="https://img.staticdj.com/3ef44b40d670688db083adf04414d2be_750x_nw.jpg" alt="" />
            </div>
        </div>
    );
};

export default Home;