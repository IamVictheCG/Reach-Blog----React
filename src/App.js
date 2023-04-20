import './App.css';
import Navbar from "./components/Navbar"
import Home from "./components/home"
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom' //added at 11) in Home.js
import Create from './components/Create';
import BlogDetails from './components/BlogDetails';
import NotFound from './components/NotFound';


function App() {
  // const title = "ruhhaaaa"
  // const num = 44
  // const link = "https://what-says-the-time-victorcg.netlify.app/"
  
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <div className="content">
          <Switch>
            <Route exact path = "/"><Home /></Route>
            <Route path = "/create"><Create /></Route>
            <Route path = "/blogs/:id"><BlogDetails /></Route>
            {/* <Route path = "/"><Home /></Route> */}
            {/* <Route path = "/"><Home /></Route> */}
            {/* <Route path = "/"><Home /></Route> */}
            <Route path = "*"><NotFound /></Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
