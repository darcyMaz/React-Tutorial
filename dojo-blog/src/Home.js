import {useState, useEffect} from 'react'
import BlogList from './BlogList';

const Home = () => {

    // Initial value is an array of blogs.
    const [blogs, setBlogs] = useState([
        {title: 'We have made a website!', body: 'lorem ipsum...', author: 'Darcy Mazloum', id:1},
        {title: 'The second author on our new website!', body: 'lorem ipsum...', author: 'Andrzej Fedorowicz', id:2},
        {title: 'An update about my life.', body: 'lorem ipsum...', author: 'Merill Bobotis', id:3},
    ])

    const [name, setName] = useState('mario')

    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id)
        setBlogs(newBlogs)
    }

    // This runs on first load and every time the data changes.
    useEffect( () => {
        console.log("useEffect has run.")
        // useEffect can access the state too
        console.log(blogs)
        console.log(name)
        // You should not change the state with useEffect because it will rerender, change the state, rerender, loop!
    }, [name])

    // Dependency array will allow us to have funcs that dont run every change.
    // So the dependency array has all the values that when changed, make useEffect run.

    return (
        <div className="home">
            <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete} />
            
            <button onClick={() => setName('Luigi')}> Change Name </button>

            <BlogList blogs={blogs.filter( (blog) => blog.author === 'Andrzej Fedorowicz')} title="Mario's Blogs" handleDelete={handleDelete} />
        </div>
    )
}

export default Home;

// State of the page and its components can be accessed.
//   useState hook!
//   We must change the state to change things on the page.
// Props: They let us pass data from a parent component to a child component.