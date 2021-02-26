import CountriesContextProvider from './context/CountContextProvider';
import Map from './components/Map';


function App() {
  return (
    <CountriesContextProvider>
    <div>
      <Map/>
    </div>
    </CountriesContextProvider>
  );
}

export default App;
