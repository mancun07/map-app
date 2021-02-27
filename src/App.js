import React, {useContext, useEffect} from 'react'
import { CountContext } from './context/CountContextProvider'
import CountContextProvider from './context/CountContextProvider';
import Map from './components/Map';
import Loader from './components/Loader';


function App() {
  // const [loading] = useContext(CountContext);
 


  return (
    <CountContextProvider>
    <div>
     <Map/>
    </div>
    </CountContextProvider>
  );
}

export default App;
