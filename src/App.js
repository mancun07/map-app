import React from 'react'
import CountContextProvider from './context/CountContextProvider';
import Map from './components/Map';
import Navbar from './components/Navbar';
import Header from './components/Header';


function App() {
 
  return (
    <CountContextProvider>

    <div>
      <Header/>
      <Navbar/>
      <Map/>
    </div>
    </CountContextProvider>
  );
}

export default App;
