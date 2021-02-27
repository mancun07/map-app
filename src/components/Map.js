import {useContext, useState, useEffect} from 'react'
import GoogleMapReact from 'google-map-react';
import { CountContext } from '../context/CountContextProvider';
import Marker from './Marker';
import ExtraInfo from './ExtraInfo';
import Header from './Header';



const Map = ({center, zoom}) => {
  const {fetchData, countries, current} = useContext(CountContext);
  useEffect(() => {
    fetchData();
    console.log(countries)
  }, [])

    return (
        <div className="map-container">
        <GoogleMapReact
          bootstrapURLKeys={{ key: '' }}
          defaultCenter={center}
          defaultZoom={zoom}
        >
        <Header/>
        {countries && countries.map((el,i) => {
            return <Marker key={i} lat={el.latlng[0]} lng={el.latlng[1]} el={el}/>
        })}
        {current !==null ? <ExtraInfo current={current}/> : ''}
        </GoogleMapReact>
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
