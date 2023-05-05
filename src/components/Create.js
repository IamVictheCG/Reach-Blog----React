import {useState} from 'react'
import { useHistory } from 'react-router-dom';

const Create = () => {
    const [title, setTitle] = useState(``);
    const [body, setBody] = useState(``);
    const [author, setAuthor] = useState('');
    const [isPending, SetIsPending] = useState(false)
    //-+-+-+-+-+
    const history = useHistory()

    
    const titleVal = (e) => {
        const titleInp = document.querySelector(".title")
        setTitle(titleInp.value)
        // console.log(`Title: ${title}`)
    }
    const bodyVal = (e) => {
        setBody(e.target.value)
        // console.log(`Body: ${body}`)
    }
    const authorVal = (e) => {
        setAuthor(e.target.value)
        // console.log(`Author: ${author}`)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const blog = { title, body, author }
        console.log(blog)
        SetIsPending(true)

        fetch("https://reach-blog-victorcg.netlify.app/blog", {
            method: 'POST',
            headers: {"Content-Type":"application/json"},
            body: JSON.stringify(blog)
        }).then(() => {
            console.log("New blog added");
            SetIsPending(false)
            // history.go(-1)
            // history.go(1)
            history.push("/")
        })
    }
    


    return (
        <div className="create">
            <h2>Add a new Blog</h2>
            <form onSubmit={handleSubmit}>
            <label>Blog Title:</label>
            <input
                type="text"
                className='title' 
                required
                value={title}
                onChange={titleVal}
                />
            <label>Blog Body:</label>
            <textarea 
                type="text" 
                className="body"
                onChange={bodyVal}
                required
            />
            <label>Blog Author:</label>
            <input 
                className='author'
                type="text" 
                required
                onChange={authorVal}
            />
            {!isPending && <button type="submit">Add Blog</button>}
            {isPending && <button type="submit" disabled>Add Blog...</button>}

            </form>
            {/* <p>{title}</p>
            <p>{body}</p>
            <p>{author}</p> */}
        </div>
    );
}
 
export default Create;