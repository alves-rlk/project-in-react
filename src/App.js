import './App.css';
import CreateImg from './img';
import RoutesApp from './routes';
import { FaFacebook ,FaInstagram, FaLinkedin  } from "react-icons/fa";

function App() {
  return (
    <body className='body-full'>
    <div className="App">
        <header>
        <div id='div_footer'>
              <nav>
              <a href="#"><FaFacebook className="icons-footer"/></a>
              <a href="#"><FaInstagram  className="icons-footer"/></a>
              <a href="#"><FaLinkedin  className="icons-footer"/></a>
              </nav>
         </div>
          <CreateImg/>
          <nav>
          <ul className='ul-header'>
            <li  className='li-header'><a href='/'>Home</a></li>
            <li className='li-header'><a href='/contact'>Contact</a></li>
            <li className='li-header'><a href='/company'>Company</a></li>
            <li className='li-header'><a href='/projectcreatesuss'>My projects</a></li>
          </ul>
          </nav>
        </header>
        <main className='main'>
          <RoutesApp/> 
        </main>
    </div>
    </body>
  );
}

export default App;
