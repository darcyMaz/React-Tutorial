import {useState, useEffect} from 'react'
import BlogList from './BlogList';
import useFetch from './useFetch';

const Home = () => {

    const { data: blogs, setData: setBlogs, isPending, error} = useFetch('http://localhost:8000/blogs')

    
    const handleHide = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id)
        setBlogs(newBlogs)
    }

    return (
        <div className="home">
            {error && <div> {error} </div>}
            {isPending && <div> Loading ... </div>}
            
            {
                blogs && 
                <BlogList blogs={blogs} title="All Blogs" 
                  handleHide={handleHide} 
                  handleShowAll={() => window.location.reload()}
                />
            }
        </div>
    )
}

export default Home;