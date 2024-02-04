// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
import { Route, Routes,  Link, useRoutes } from "react-router-dom";
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Signin from "./Components/Signin/Signin";
import Signup from "./Components/Signup/Signup";
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import Canva from './Components/Canva/Canva';
import Card from './Components/Card/Card';
import Doctor from './Components/Doctor/Doctor';
import Greenman from './Components/Greenman/Greenman';
import Footer from './Components/Footer/Footer';
import EasyForm1 from './Components/EasyForm1/EasyForm1';
import EasyForm2 from './Components/EasyForm2/EasyForm2';
import Contact_Response from './Components/Contact_Response/Contact_Response';
import Last_page from "./Components/Last_page/Last_page";

const App = () => {
  return(
    <div className="App">
      <ul>
       <li><Link to='/' style={{textDecoration: 'none'}}>Navbar</Link></li>
       <li><Link to='/Signin' style={{textDecoration: 'none'}}>Signin</Link></li>
       <li><Link to='/Signup' style={{textDecoration: 'none'}}>Signup</Link></li>
       </ul>
       <Routes>
       <Route path = "/">
                    <Route index element = {   <Navbar/>  } />
                    <Route path = "/Signin" element = {   <Signin /> } />
                    <Route path = "/Signup" element = {   <Signup /> } />
                    </Route>
                    </Routes>
                
        


      <Signin />
       <Signup /> 
       <Navbar />
     
       <Home />
       <Canva />
       <Card />
       <Doctor />
       <Greenman />
       <Footer />
       <EasyForm1 />
       <EasyForm2 />
       <Contact_Response />
       <Last_page />
     

    </div>
  )
}
export default App;

