import React from 'react';
import Bookmark from '../Bookmark/Bookmark'
import PropTypes from 'prop-types';

const Bookmarks = ({bookmarks}) => {
    return (
        <div className='w-1/3'>
            <h2>Bookmarks: {bookmarks.length}</h2>

            {
                bookmarks.map( bookmark => <Bookmark 
                    key={bookmark.id}
                    bookmark={bookmark}
                ></Bookmark>)
            }
        </div>
    );
};

Bookmarks.propTypes = {
    bookmarks: PropTypes.array
};

export default Bookmarks;