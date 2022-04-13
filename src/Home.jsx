import './App.css';
import { Link } from "react-router-dom";
import './utils/firebase';


function Home() {

  



  return (
    <div className="Home">
      <div className="topnav">
        <div className="dropdown">
          <button className="dropbtn">Menu</button>
          <div className="dropdown-content">
            <a href="#">My account</a>
            <a href="#">Get QR Code</a>
            <a href="#">Help</a>
            <nav>
              <Link to="/login">Login</Link> 
            </nav>
          </div>
        </div>
        <h1 className="header-text">Welcome (Insert Uername Here)</h1>
        <div className="spacing" />
      </div>
      <div className='center'>
        <div className='center'>
        <h1>Message A Car</h1>
        <div>Permit ID</div>
        <input type="number" placeholder="Enter Permit ID" />
        <div>Message</div>
        <textarea type="text" className="glowing-border input" placeholder="Message..."/> 
        <div>
        <button className="">Send</button>
        <button>Clear</button>
        </div>
      </div>
      </div>

    </div>
  );
}

export default Home;
