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
      <div>
        <button className="send-message">Send Message</button>
        <button className="register-car">Register Car</button>
      </div>
    </div>
  );
}

export default Home;
