import React from 'react';
import Bookmark from '../Bookmark/Bookmark'
import PropTypes from 'prop-types';

const Bookmarks = ({bookmarks, readingTime}) => {
    return (
        <div className='md:w-1/3 ml-4'>
            <div>
                <h3 className='text-4xl'>Reading time: {readingTime}</h3>
            </div>
            <h2>Bookmarks: {bookmarks.length}</h2>

            {
                bookmarks.map( (bookmark, idx) => <Bookmark 
                    key={idx}
                    bookmark={bookmark}
                ></Bookmark>)
            }
        </div>
    );
};

Bookmarks.propTypes = {
    bookmarks: PropTypes.array,
    readingTime: PropTypes.number,
};

export default Bookmarks;