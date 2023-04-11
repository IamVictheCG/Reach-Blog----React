import './App.css';
import Navbar from "./Navbar"
import Home from "./home"

function App() {
  // const title = "ruhhaaaa"
  // const num = 44
  // const link = "https://what-says-the-time-victorcg.netlify.app/"
  
  return (
    <div className="App">
      <Navbar/>
      <Home />
       {/* <h1>{title}</h1>
       <h4>{num}</h4>
       <a href={link}>What says the time?!</a> */}
    </div>
  );
}

export default App;
