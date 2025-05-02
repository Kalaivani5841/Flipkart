// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// // import './App.css'
// import Flip from './assets/Components/Common/Flip'
// import CategoryMenu from './assets/Components/Common/pages/CategoryMenu'
// import Slider from "./assets/Components/Common/pages/Slider"
// import Orders from "./assets/Components/Common/pages/Orders"
// import Section from "./assets/Components/Common/pages/Section"
// import ProductSection from './assets/Components/Common/pages/ProductSection'
// import HomeSection from './assets/Components/Common/pages/HomeSection'
// import Appliances from './assets/Components/Common/pages/Appliances'
// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import LoginPage from './assets/Components/Common/pages/LoginPage';







// function App() {
//   // const [count, setCount] = useState(0)

//   return (

   
//     // <>
//     //   <div>
//     //     <a href="https://vite.dev" target="_blank">
//     //       <img src={viteLogo} className="logo" alt="Vite logo" />
//     //     </a>
//     //     <a href="https://react.dev" target="_blank">
//     //       <img src={reactLogo} className="logo react" alt="React logo" />
//     //     </a>
//     //   </div>
//     //   <h1>Vite + React</h1>
//     //   <div className="card">
//     //     <button onClick={() => setCount((count) => count + 1)}>
//     //       count is {count}
//     //     </button>
//     //     <p>
//     //       Edit <code>src/App.jsx</code> and save to test HMR
//     //     </p>
//     //   </div>
//     //   <p className="read-the-docs">
//     //     Click on the Vite and React logos to learn more
//     //   </p>
      
//     // </>
//     <>
//     <Flip/>
//     <CategoryMenu/>
//    <Slider/>
//    <Orders/>
//  <Section/>
//  <ProductSection/>
//  <HomeSection/>
//  <Appliances/>


 
//  </>

  
//   )
// }

// export default App


import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';  
import Flip from './assets/Components/Common/Flip';
import CategoryMenu from './assets/Components/Common/pages/CategoryMenu';
import Slider from './assets/Components/Common/pages/Slider';
import Orders from './assets/Components/Common/pages/Orders';
import Section from './assets/Components/Common/pages/Section';
import ProductSection from './assets/Components/Common/pages/ProductSection';
import HomeSection from './assets/Components/Common/pages/HomeSection';
import Appliances from './assets/Components/Common/pages/Appliances';
import LoginPage from './assets/Components/Common/pages/LoginPage';  

function App() {
  return (
    <Router>  
      <Routes>
       
        <Route path="/" element={
          <>
            <Flip />
            <CategoryMenu />
            <Slider />
            <Orders />
            <Section />
            <ProductSection />
            <HomeSection />
            <Appliances />
          </>
        } />

       
        <Route path="/login" element={<LoginPage />} />  
      </Routes>
    </Router>
  );
}

export default App;
