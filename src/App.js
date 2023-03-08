
import './App.css';
import React from 'react';
import NavBar from './NavBar';
import Product from './product.js';
import photo from './imgHeader.jpg';
import { slide as Menu } from 'react-burger-menu';
import './navBar.css'



function App() {
  return (
    <div className="App" id='outer-container'>
      <div id="page-wrap">
        <NavBar pageWrapId={'page-wrap'} outerContainerId= {'outer-container'} />

      <div className='header-img'>
        <div className='new-product-container'>
          <p className='new-product'> NEW PRODUCT</p>
        </div>
        <div className='h1-container'>
          XX99 MARK II <br></br>
          HEADPHONES
        </div>
      </div>
        
        
        {/*<Product name="K12 Maximus"*/}

      <Product name="Mark K12 Pro" />
      <Product name="Numb K90"/>
      <Product name="Lelf G6"/>
      </div>

   
    
   
      
      
    </div>
  );
}

export default App;
