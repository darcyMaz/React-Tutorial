import {useState} from 'react'
import BlogList from './BlogList';

const Home = () => {

    // Initial value is an array of blogs.
    const [blogs, setBlogs] = useState([
        {title: 'We have made a website!', body: 'lorem ipsum...', author: 'Darcy Mazloum', id:1},
        {title: 'The second author on our new website!', body: 'lorem ipsum...', author: 'Andrzej Fedorowicz', id:2},
        {title: 'An update about my life.', body: 'lorem ipsum...', author: 'Merill Bobotis', id:3},
    ])

    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id)
        setBlogs(newBlogs)
    }

    return (
        <div className="home">
            <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete} />
            <BlogList blogs={blogs.filter( (blog) => blog.author === 'Andrzej Fedorowicz')} title="Mario's Blogs" handleDelete={handleDelete} />
            
        </div>
    )
}

export default Home;

// State of the page and its components can be accessed.
//   useState hook!
//   We must change the state to change things on the page.
// Props: They let us pass data from a parent component to a child component.