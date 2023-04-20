import { Link } from "react-router-dom";
const NotFound = () => {
    return (
        <div className="not-found">
            <h3>Opps!! looks like you're searchin for a ghost</h3>
            <p>Safely go back <strong><Link to="/">Home</Link></strong></p>
        </div>
    )
        
}
 
export default NotFound;