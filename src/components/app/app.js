import './app.css';


import MainPage from '../main-page/main-page'
import Footer from '../footer/footer'
import Best_prod from '../best_product/best_product'
import About_us from '../about_us/about_us'

import img1 from '../../img/logo/71qBQnpQFYL.png'
import img2 from '../../img/logo/815O9ktyfUL.png'
import img3 from '../../img/logo/91Ryk2gKejL.png'
import img4 from '../../img/logo/71qBQnpQFYL.png'

import { Component } from 'react';

function App() {
  const data = [
      {
          src: img1,
          alt: 'Solimo Coffee',
          title: 'Solimo Coffee Beans 2 kg',
          price: 10.73
      },
      {
          src: img2,
          alt: 'Presto Coffee',
          title: 'Presto Coffee Beans 1 kg',
          price: 15.99
      },
      {
          src: img3,
          alt: 'AROMISTICO Coffee',
          title: 'AROMISTICO Coffee 1 kg',
          price: 6.99
      },
      {
          src: img4,
          alt: 'AROMISTICO Coffee',
          title: 'AROMISTICO Coffee 1 kg',
          price: 6.99
      }
  ]



        return (
          
          <div className="App">
            <MainPage/>
            <About_us></About_us>
            <Best_prod data={data} />
            <Footer/>
          </div>
        );
    }
  
  

export default App;
