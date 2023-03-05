import { QueryClient, QueryClientProvider } from 'react-query';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Components/Home/Footer/Footer';
import { Navbar } from './Components/Home/Header/Navbar';
import About from './Components/pages/About/About';
import Contact from './Components/pages/Contacts/Contact';
import Projects from './Components/pages/Projects/Projects';
import Service from './Components/pages/Service/Service';

function App() {
  const client = new QueryClient();
  
  return (
    <div className="App">


      <Navbar/>
      <Routes>
        <Route path='/'/>
        <Route path='about' element={ <About/> } />
        <Route path='service' element={ <Service/>} />
        <Route path='projects' element={
        
          <QueryClientProvider client={client}>
            <Projects />
          </QueryClientProvider>
          
        } />
        <Route path='contacts' element={ <Contact/>} />
      </Routes>
     
      <Footer />
      
    
    </div>
  );
}

export default App;
