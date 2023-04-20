import { Link } from "react-router-dom";

const BlogList = ({blogslist, title}) => {
    const blogs =  blogslist;
    // console.log(blogs)
    return ( 
        <div className='blog-list'>
            <h1 >{ title }</h1>
            {blogs.map((blog) => (
            <div className="blog-preview" key={blog.id}>
                <Link to={`/blogs/${blog.id}`}>
                    <h2>{ blog.title }</h2>
                    <p>Written by { blog.author }</p>
                    {/* <button onClick={() => handleDelete(blog.id)} type="button">delete blog</button> */}
                </Link>
            </div>
        ))}
        </div >
     );
}
 
export default BlogList;