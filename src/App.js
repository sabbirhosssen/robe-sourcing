import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Components/Home/Footer/Footer';
import { Home } from './Components/Home/Home';
import About from './Components/pages/About/About';
import Service from './Components/pages/Service/Service';

function App() {
  return (
    <div className="App">
      <nav>
        <ul className='flex justify-center align-baseline space-x-5'>
          <li>
            <Link to='/'> Home</Link>
          </li>
          <li><Link to='about'> about</Link></li>
          <li><Link to='service'> Service</Link></li>
          
        </ul>
        
      </nav>

      <Routes>
        <Route path='/' element={ <Home/>} />
        <Route path='about' element={ <About/> } />
        <Route path='service' element={ <Service/>} />

       

      </Routes>
     
      <Footer />
      
    
    </div>
  );
}

export default App;
