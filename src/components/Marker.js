import React, {useContext} from 'react'
import { CountContext } from '../context/CountContextProvider'

const Marker = ({el}) => {
    const {showDetailedInfo, countries} = useContext(CountContext);
    return (
        <div className="marker" onClick={() => showDetailedInfo(el)}>
            {/* <img src={el.flag} alt=""/> */}
            <i className="fas fa-map-marker" style={{color: 'yellow'}}></i>
        </div>
    )
}

export default Marker
