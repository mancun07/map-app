import {useContext, useEffect} from 'react'
import GoogleMapReact from 'google-map-react';
import { CountContext } from '../context/CountContextProvider';
import MarkerMine from './MarkerMine';
import ExtraInfo from './ExtraInfo';
import Loader from './Loader';




const Map = ({center, zoom}) => {
  const {fetchData, countries, current, loading, filtered} = useContext(CountContext);
  useEffect(() => {
    fetchData();
   // eslint-disable-next-line
  }, [])


let val1 = countries && countries.map((el,i) => {
    return <MarkerMine key={i} lat={el.latlng[0]} lng={el.latlng[1]} el={el}/>
})

let val2 = filtered && filtered.map((el,i) => {
  return <MarkerMine key={i} lat={el.latlng[0]} lng={el.latlng[1]} el={el}/>
})

// let val3 = chosen && chosen.map((el,i) => {
//   return <MarkerMine key={i} lat={el.latlng[0]} lng={el.latlng[1]} el={el}/>
// })


    return (
        <div className="map-container">
        {loading ? <Loader/> : (
          <GoogleMapReact
          bootstrapURLKeys={{ key: '' }}
          defaultCenter={center}
          defaultZoom={zoom}
        >
        {!filtered ? val1 : val2 }
        {!current ? <ExtraInfo current={current}/> : ''}
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
