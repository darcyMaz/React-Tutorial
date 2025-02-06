import {useState} from 'react'
import {useHistory} from 'react-router-dom'

const Create = () => {

    // We will associate this value with that of the blog title.
    const [title, setTitle] = useState('Default Blog Title')
    const [body, setBody] = useState('Default Dance')
    const [author, setAuthor] = useState('Option 2')
    const [isPending, setIsPending] = useState(false)
    const history = useHistory()

    const handleSubmit = (e) => {
        // This prevents the page from being automatically refreshed.
        e.preventDefault()

        const blog = { title, body, author }
        
        setIsPending(true)

        // We have the blog, we want to submit a post request to the server.
        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: {'Content-Type': "application/json"},
            body: JSON.stringify(blog)
        }).then(() => {
            console.log('New blog added!')
            setIsPending(false)
            history.push('/')
        })
        
    }

    return ( 
        <div className="create">
            <h2> Add a new Blog. </h2>

            <form onSubmit={handleSubmit}>
                <label> Blog title: </label>
                <input
                    type="text" 
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <label> Blog body: </label>
                <textarea
                    required
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                ></textarea>
                <label> Blog author: </label>
                <select
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                >
                    <option value="Darcy Mazloum"> Darcy Mazloum</option>
                    <option value="Option 2"> Option 2 </option>
                </select>
                { !isPending && <button> Add Blog </button> }
                { isPending && <button disabled> Blog being added... </button>}
            </form>
        
        </div>
     );
}
 
export default Create