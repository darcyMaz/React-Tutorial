const BlogList = (props) => {
const blogs = props.blogs 
const title = props.title
const handleHide = props.handleHide
const handleShowAll = props.handleShowAll



    return ( 


        <div className="blog-list">
            <h2> {title} </h2>
            <button className="visibility-button" onClick={() => handleShowAll()}>  Show all blogs.  </button>
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <h2> {blog.title} </h2>
                    <p> Written by: {blog.author} </p>
                    <button className="visibility-button" onClick={() => handleHide(blog.id)}> Hide Blog </button>
                </div>
            ))}
        </div>

     );
}
 
export default BlogList;