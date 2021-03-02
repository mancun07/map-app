import {useContext, useEffect} from 'react'
import GoogleMapReact from 'google-map-react';
import { CountContext } from '../context/CountContextProvider';
import MarkerMine from './MarkerMine';
import ExtraInfo from './ExtraInfo';
import Loader from './Loader';




const Map = ({center, zoom}) => {
  const {fetchData, countries, current, loading, chosen, filtered} = useContext(CountContext);
  useEffect(() => {
    fetchData();
  }, [])


let val1 = countries && countries.map((el,i) => {
    return <MarkerMine key={i} lat={el.latlng[0]} lng={el.latlng[1]} el={el}/>
})

let val2 = filtered && filtered.map((el,i) => {
  return <MarkerMine key={i} lat={el.latlng[0]} lng={el.latlng[1]} el={el}/>
})

let val3 = chosen && chosen.map((el,i) => {
  return <MarkerMine key={i} lat={el.latlng[0]} lng={el.latlng[1]} el={el}/>
})



    return (
        <div className="map-container">
        {loading ? <Loader/> : (
          <GoogleMapReact
          bootstrapURLKeys={{ key: '' }}
          defaultCenter={center}
          defaultZoom={zoom}
        >

        {/* Идея: если filter = null, то выводим countries, если нет, то выводим filtered */}
        {/* {!filtered && !chosen ? val1 : (!chosen && filtered ? val2 : val3)} */}
        {!filtered && !chosen && val1 }
        {filtered && !chosen && val2 }
        {val3}
        {current !==null ? <ExtraInfo current={current}/> : ''}
        </GoogleMapReact>
        ) }
      </div>
    )

}

Map.defaultProps = {
    center: {
        lat: 40.95,
        lng: 20.33
    },
    zoom: 1
}


export default Map
