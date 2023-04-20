import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>Reach Blog</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/create" className="new">Create New Blog</Link>
            </div>
        </nav>
    );
}

// var creatStyle = {
//     color:"red",
//     backgroundColor: "#f1356d"
// }
export default Navbar;