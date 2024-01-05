import './app.css';


import MainPage from '../main-page/main-page'
import Footer from '../footer/footer'
import Best_prod from '../best_product/best_product'
import About_us from '../about_us/about_us'

import { Component } from 'react';

function App() {
  const data = [
      {
          src: '##',
          alt: 'Solimo Coffee',
          title: 'Solimo Coffee Beans 2 kg',
          price: 10.73
      },
      {
          src: '',
          alt: 'Presto Coffee',
          title: 'Presto Coffee Beans 1 kg',
          price: 15.99
      },
      {
          src: 'ThirdCoffee',
          alt: 'AROMISTICO Coffee',
          title: 'AROMISTICO Coffee 1 kg',
          price: 6.99
      },
      {
          src: 'ThirdCoffee',
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
