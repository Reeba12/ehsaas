import React from 'react'
import "./App.css";
import Services from './components/Services';
import Appbar from './components/Appbar'
import Slider from './components/Slider';
import Footer from './components/Footer';
import Mission from './components/Mission';
import 'bootstrap/dist/css/bootstrap.min.css';
const App = () => {
  return (
    <>
    <div to='/'>
    <Appbar />
    <Slider />
    <Services />
    <Mission />
    <Footer />
    </div>
    </>
  )
}

export default App

