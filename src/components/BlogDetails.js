import { useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {
    const { id } = useParams()
    const {data: blog, isPending, error}= useFetch("http://localhost:5000/blogs/" + id)

    return (
        <div className="blog-details">
            {/* <h2>BlogDetails - {id}</h2> */}
            {error && <h2>{error}</h2>}
            { isPending && <div><h2>LOADING...</h2></div> }
            {blog && (
                <article>
                    <h1>{ blog.title }</h1>
                    <p>Written by <strong>{ blog.author }</strong></p>
                    <div>
                        <p>{blog.body}</p>
                    </div>
                </article>)}
        </div>
    );
}
 
export default BlogDetails;