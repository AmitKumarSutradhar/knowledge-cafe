import React from 'react';
import PropTypes from 'prop-types';
import { FaBookmark } from "react-icons/fa";

const Blog = ({blog, handleAddToBookmark, handleMarkAsRead}) => {
    const {id, title, cover, author, posted_date, author_img, reading_time, hashtags} = blog;
    return (
        <div className='mb-10 space-y-4'>
            <img src={cover} alt="" className='w-full mb-5' />
            <div className='flex justify-between'>
                <div className='flex'>
                    <img className='mr-5 rounded-full' src={author_img} alt="" />
                    <div>
                        <h3 className='text-2xl'>{author}</h3>
                        <p>{ posted_date }</p>
                    </div>
                </div>
                <div>
                    <span>{ reading_time } min read</span>
                    <button onClick={() =>handleAddToBookmark(blog)} className='ml-3'><FaBookmark></FaBookmark></button>
                </div>
            </div>
            <h2 className='text-4xl my-5'>{title}</h2>
            <p>
                {
                    hashtags.map( (hastag, idx) => <span key={idx} className='mr-3'><a href="">{hastag}</a></span>)
                }
            </p>
            <button onClick={() => handleMarkAsRead(id, reading_time)} className='text-purple-600 underline'>Mark as read</button>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object,
    handleAddToBookmark: PropTypes.func,
    handleMarkAsRead: PropTypes.func
}

export default Blog;