import React, {useContext} from 'react'
import { CountContext } from '../context/CountContextProvider'
import PropTypes from 'prop-types'


const MarkerMine = ({el}) => {
    const {showDetailedInfo} = useContext(CountContext);

    return (
        <div className="marker" onClick={() => showDetailedInfo(el)}>
            {/* <img src={el.flag} alt=""/> */}
            <i className="fas fa-map-pin" style={{color: 'yellow', padding: '10px'}}></i>
        </div>
    )
}

MarkerMine.propTypes = {
    el: PropTypes.object.isRequired
}


export default MarkerMine;
