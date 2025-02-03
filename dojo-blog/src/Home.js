import {useState, useEffect} from 'react'
import BlogList from './BlogList';

const Home = () => {

    const [blogs, setBlogs] = useState(null)

    const handleHide = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id)
        setBlogs(newBlogs)
    }
    const handleDelete = (id) => {
        
    }
    const handleShowAll = () => {
        const newBlogs = getAllBlogs()
        setBlogs(newBlogs)
    }
    const getAllBlogs = () => 
    {
        fetch('http://localhost:8000/blogs')
        .then(res => {
            return res.json() // Passes response object into JSON object
        })
        .then((data) => {
            // data is the returned data to be used!
            setBlogs(data)
            // console.log(data)
        })
    }
    



    useEffect( () => {
        getAllBlogs()
    }, [])

    return (
        <div className="home">
            {
                blogs && <BlogList blogs={blogs} title="All Blogs" handleHide={handleHide} handleShowAll={handleShowAll} />
            }
        </div>
    )
}

export default Home;