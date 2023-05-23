import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Review from '../Review/Review';

const Reviews = () => {
    const reviews = useLoaderData()
    console.log(reviews);
    return (
        <div>
            <h1 className='text-5xl mx-auto w-1/3 align-center m-5'>Customers Rewiew </h1>
            <div className='card m-3 grid grid-cols-1 md:grid-cols-3 gap-4 my-14'>
                {
                    reviews.map(review => <Review
                        key={review.id}
                        review={review}
                    ></Review>)
                }
            </div>
        </div>
    );
};

export default Reviews;