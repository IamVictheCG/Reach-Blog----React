//import { useState, useEffect } from 'react'; // no longer neede at 10)
import useFetch from './useFetch';
import BlogList from './BlogList';
const Home = () => {
    //1) =======================================
    // let clickMe = (name) => {
    //     console.log("Hey!!!, " + name)
    //     // document.querySelector(".navbar").style.cssText= `
    //     // backgroundColor: black;
    //     // `
    // }
    
    //2)==============================================
    // const [name, setName] = useState('Victor');
    // const [age, setAge] = useState(20);
    // let clickMe = () => {
    //     setName("Victor Chukwubuikem Okechukwu")
    //     setAge(21)
    // }
    // return (
    //     <>
    //     <h2>Home page</h2>
    //     <p>Welcome { name }, you are { age } years old. </p>
    //     <button onClick={() => {clickMe('Victor!')}} className="yuhu">Click me</button>
    //     </>
    // );

    //3)===============================================
    // const [blogs, setBlogs] = useState([
    //         { title: 'My new website', body: 'lorem ipsum...', author: 'Victor', id: 1 },
    //         { title: 'Welcome party!', body: 'lorem ipsum...', author: 'David', id: 2 },
    //         { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'Victor', id: 3 }
    // ]);
    // return (
        //     <div className='homePage'>
    //     <h1>Home page</h1>
    //     {blogs.map((blog) => (
    //         <div className="blog-preview" key={blog.id}>
    //             <h2>{ blog.title }</h2>
    //             <p>Written by { blog.author }</p>
    //         </div>
    //     ))}
    //     </div >
    // );

    //4)=======================================================
    // const [blogs, setBlogs] = useState([
    //         { title: 'My new website', body: 'lorem ipsum...', author: 'Victor', id: 1 },
    //         { title: 'Welcome party!', body: 'lorem ipsum...', author: 'David', id: 2 },
    //         { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'Victor', id: 3 }
    // ]);
    // return (
    //     <div className='homePage'>
    //         <h1>Home page</h1>
    //         <BlogList blogslist={blogs} title="All Blogs"/>
    //         <BlogList blogslist={blogs.filter((blog) => blog.author === "Victor")} title="Victor's Blog"/>
    //     </div >
    // );

    //5)===================================================================
    // const [blogs, setBlogs] = useState([
    //     { title: 'My new website', body: 'lorem ipsum...', author: 'Victor', id: 1 },
    //     { title: 'Welcome party!', body: 'lorem ipsum...', author: 'David', id: 2 },
    //     { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'Victor', id: 3 }
    // ]);

    // const handleDelete = ((id) => {
    //     console.log(id) 
    
    //     const newblogs = blogs.filter(blog => blog.id !== id)
    //     setBlogs(newblogs)
    // })
    // return (
    //     <div className='homePage'>
    //         <h1>Home page</h1>
    //         <BlogList blogslist={blogs} title="All Blogs" handleDelete={handleDelete}/>
    //         <BlogList blogslist={blogs} title="Victor's Blog" handleDelete={handleDelete}/>
    //     </div >
    // );

    //6)===========================================================================
    // const [blogs, setBlogs] = useState([
    //     { title: 'My new website', body: 'lorem ipsum...', author: 'Victor', id: 1 },
    //     { title: 'Welcome party!', body: 'lorem ipsum...', author: 'David', id: 2 },
    //     { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'Victor', id: 3 }
    // ]);

    // const [name, setName] = useState("Tony Stark");

    // useEffect(() => {
    //     console.log("Victor was here")
    // }, [name])

    // const handleDelete = ((id) => {
    //     console.log(id)
    //     const newblogs = blogs.filter(blog => blog.id !== id)
    //     setBlogs(newblogs)
    // })
    // return (
    //     <div className='homePage'>
    //         <h1>Home page</h1>
    //         <BlogList blogslist={blogs} title="All Blogs" handleDelete={handleDelete}/>
    //         <BlogList blogslist={blogs} title="Victor's Blog" handleDelete={handleDelete}/>
    //         <button onClick={() => setName("Iron man")} type="button">Suit Up</button>
    //         <button onClick={() => {
    //             if (name === "Tony Stark") {
    //                 console.log(name)
    //                 return
    //             }else {
    //                 setName("Tony Stark")
    //             }
    //             }} type="button">Take off your suit</button>
    //         <p>{ name }</p>
    //     </div >
    // );

    //7)====================================================================================
    // const [blogs, setBlogs] = useState([
        //     { title: 'My new website', body: 'lorem ipsum...', author: 'Victor', id: 1 },
        //     { title: 'Welcome party!', body: 'lorem ipsum...', author: 'David', id: 2 },
        //     { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'Victor', id: 3 }
    // ]);
    
    // useEffect(() => {
    //     console.log("Victor was here")
    // }, [])

    // const handleDelete = ((id) => {
    //     console.log(id)
    //     const newblogs = blogs.filter(blog => blog.id !== id)
    //     setBlogs(newblogs)
    // })
    // return (
    //     <div className='homePage'>
    //         <h1>Home page</h1>
    //         <BlogList blogslist={blogs} title="All Blogs" handleDelete={handleDelete}/>
    //         <BlogList blogslist={blogs} title="Victor's Blog" handleDelete={handleDelete}/>
    //     </div >
    // );
    
    //8)Loading Conditional Messages=================================================================
    // const [blogs, setBlogs] = useState(null)
    // const [isPending, SetIsPending] = useState(true)
    // useEffect(() => {
    //     console.log("Victor was here")
    //     fetch("http://localhost:5000/blogs")
    //         .then(res => {
    //             console.log(res)
    //             return res.json()
    //         })
    //         .then(data => {
    //             console.log(data);
    //             setBlogs(data);
    //             SetIsPending(false);;
    //         })
    //         .catch(e => {
    //             console.log(e.message)
    //         });
    // }, [])

    // return (
    //     <div className='homePage'>
    //         <h1>Home page</h1>
    //         { isPending && <div><h2>LOADING...</h2></div> }
    //         {blogs && <BlogList blogslist={blogs} title="All Blogs" />}
    //         {/* <BlogList blogslist={blogs} title="Victor's Blog" handleDelete={handleDelete}/> */}
    //     </div >
    // );
    
    //9)Handling fetch errors======================================================================
    // const [blogs, setBlogs] = useState(null)
    // const [isPending, SetIsPending] = useState(true)
    // const [error, setError] = useState(null);

    // useEffect(() => {
    //     console.log("Victor was here")
    //     fetch("http://localhost:5000/blogs")
    //         .then(res => {
    //             console.log(res)
    //             if(!res.ok) {
    //                 throw Error('Opps seems like something went wrong')
    //             }
    //             return res.json()
    //         })
    //         .then(data => {
    //             console.log(data);
    //             setBlogs(data);
    //             SetIsPending(false);
    //             setError(null)
    //         })
    //         .catch(err => {
    //             console.log(err.message);
    //             SetIsPending(false);
    //             setError(err.message)
    //         });
    // }, [])

    // return (
    //     <div className='homePage'>
    //         <h1>Home page</h1>
    //         {error && <h2>{error}</h2>}
    //         { isPending && <div><h2>LOADING...</h2></div> }
    //         {blogs && <BlogList blogslist={blogs} title="All Blogs" />}
    //         {/* <BlogList blogslist={blogs} title="Victor's Blog" handleDelete={handleDelete}/> */}
    //     </div >
    // );
    
    //10)Making a custom hook===========================================
    // const {data: blogs, isPending, error} = useFetch("http://localhost:5000/blogs")
    // return (
    //     <div className='homePage'>
    //         <h1>Home page</h1>
    //         {error && <h2>{error}</h2>}
    //         { isPending && <div><h2>LOADING...</h2></div> }
    //         {blogs && <BlogList blogslist={blogs} title="All Blogs" />}
    //         {/* <BlogList blogslist={blogs} title="Victor's Blog" handleDelete={handleDelete}/> */}
    //     </div >
    // );
    
    //11)React Router=====================================================================
    // const {data: blogs, isPending, error} = useFetch("http://localhost:5000/blogs")
    const {data: blogs, isPending, error} = useFetch("https://reach-blog-victorcg.netlify.app/blog")
    return (
        <div className='homePage'>
            {/* <h1>Home page</h1> */}
            {error && <h2>{error}</h2>}
            { isPending && <div><h2>LOADING...</h2></div> }
            {blogs && <BlogList blogslist={blogs} title="All Blogs" />}
            {/* <BlogList blogslist={blogs} title="Victor's Blog" handleDelete={handleDelete}/> */}
        </div >
    );

}
    
export default Home;