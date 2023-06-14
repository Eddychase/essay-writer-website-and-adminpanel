import './App.css';
import { Route, Routes } from "react-router-dom"
import Home from './components/Home/Home';
import About from './components/About/About'
import Features from './components/Features/Features'
import Subscribe from './components/subscribe/Subscribe';
import Login from './components/login/Login';
import Signup from './components/signup/Signup';
import Orderpage from './components/orderPage/Orderpage';
import Checkout from './components/checkout/Checkout';
import Navbar from './components/navbar/Navbar';
import { BrowserRouter } from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
    <div className="app">
      <Navbar/>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/features" element={<Features />} />
          <Route path="/orderpage" element={<Orderpage/>} />
          <Route path="/subscribe" element={<Subscribe/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/signup" element={<Signup/>} />
          <Route path="/checkout" element={<Checkout/>} />
      </Routes>
    </div>
    </BrowserRouter>
    
  );
}

export default App;
