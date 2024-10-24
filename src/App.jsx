import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'

function App() {
  const [bookmarks, setBookmarks] = useState([]);

  const handleAddToBookmark = blog => {
    const newBookMarks = [...bookmarks, blog];
   setBookmarks(newBookMarks);
  }

  return (
    <>
      <Header></Header>
      <div className="container mx-auto">
        <div className="md:flex my-5">
          <Blogs
          handleAddToBookmark={handleAddToBookmark}
          ></Blogs>
          <Bookmarks
            bookmarks={bookmarks}
          ></Bookmarks>
        </div>
      </div>
    </>
  )
}

export default App
