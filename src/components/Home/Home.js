import React from 'react';
import './Home.css'
import { Link, useLoaderData } from 'react-router-dom';
import Review from '../Review/Review';

const Home = () => {
    const reviews = useLoaderData();
    const threeReviews = [];
    for (let index = 0; index < 3; index++) {
        threeReviews.push(reviews[index])
    }
    console.log(threeReviews);
    return (
        <div>
            <div className='container grid grid-cols-1 md:grid-cols-2 p-16'>
                <div className='flex flex-col align-center justify-center'>
                    <div className="parent px-10 text-9xl ">World Best Player<div id="border"></div></div>
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
            <div>
                <h1 className='text-5xl mx-auto w-1/3 align-center m-5'>Customer Rewiew </h1>
                <div className='card grid m-3 grid-cols-1 md:grid-cols-3 gap-4 my-14'>
                    {
                        threeReviews.map(review => <Review
                            key={review.id}
                            review={review}
                        ></Review>)
                    }
                </div>
                <Link to='/reviews'><button className="w-42 flex  mx-auto mt-10 mb-20 bg-cyan-400 rounded-md p-3">Show All Reviews</button></Link>
            </div>
        </div>
    );
};

export default Home;