import {useContext, useRef, useEffect} from 'react'
import { CountContext } from '../context/CountContextProvider'
import {motion} from 'framer-motion'

const ExtraInfo = ({current}) => {
    const {clearCurrent} = useContext(CountContext);
    

    function numberWithSpaces(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    }

    return (

       <motion.div className="extra-info"
        initial={{y: '-50vh'}}
        animate={{y: 0}}
        transition={{duration: 0.5, type: 'spring', stiffness: 150}}
        >
            <h3 style={{textAlign: 'center'}}>Extra info about chosen country:</h3>
            <img style={{width: '100px', display: 'block', margin: 'auto'}} src={current.flag} alt="Flag of the country"/>
            <ul>
                <li><strong>Название страны: {current.name}</strong></li>
                <li><strong>Население: {numberWithSpaces(current.population)} </strong></li>
                <li><strong>Столица: {current.capital}</strong></li>
                <li><strong>Основной язык: {current.languages[0].name}</strong></li>
                <li><strong>Валюта: {current.currencies[0].name}</strong></li>
            </ul>
            <button className="btn" onClick={() => clearCurrent()}
            style={{boxShadow: "0px 0px 8px rgb(255,255,255)", background: 'rgb(0,0,0)',
            width: '200px'}}
            >Скрыть</button>
        </motion.div> 
    
    )
}

export default ExtraInfo
