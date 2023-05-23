import React from 'react';

const Review = ({ review }) => {
    const { name, email, body } = review;
    return (
        <div className='flex flex-col items-center p-7 border border-2 border-black-500 rounded shadow-md '>
            <h1 className='text-2xl my-3 font-bold	'>{name}</h1>
            <h1 className='mb-9 mt-4 t-bold font-bold	'>{email}</h1>
            <h1>{body}</h1>
        </div>
    );
};

export default Review;