import './App.css';

function App() {
  return (
    <div class="App">
      <div class="topnav">
        <div class="dropdown">
          <button class="dropbtn">Menu</button>
          <div class="dropdown-content">
            <a href="#">My account</a>
            <a href="#">Get QR Code</a>
            <a href="#">Help</a>
          </div>
        </div>
        <h1 className="header-text">Welcome (Insert Uername Here)</h1>
        <div class="spacing" />
      </div>
    </div>
  );
}

export default App;
