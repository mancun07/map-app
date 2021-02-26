import {useContext, useRef, useEffect} from 'react'
import { CountContext } from '../context/CountContextProvider'
import {motion} from 'framer-motion'

const ExtraInfo = () => {
    const {current, clearCurrent} = useContext(CountContext);
    // const extraInfo = useRef(null);
    // useEffect(() => {
       
    // }, [extraInfo])

    function numberWithSpaces(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    }

    return (

       <motion.div className="extra-info"
        initial={{y: '-50vh'}}
        animate={{y: 0}}
        transition={{duration: 0.5, type: 'spring', stiffness:  150}}
        >
            <h3>Extra info about chosen country:</h3>
            <img style={{width: '100px', display: 'block', margin: 'auto'}} src={current ? current.flag : false} alt="Flag of the country"/>
            <ul>
                <li><strong>Name of the country: {current ? current.name : false}</strong></li>
                <li><strong>Capital city: {current ? current.capital : false}</strong></li>
                <li><strong>Population: {current ? numberWithSpaces(current.population) : false} </strong></li>
                <li><strong>Main language: {current ? current.languages[0].name : false}</strong></li>
                <li><strong>Main Currency: {current ? current.currencies[0].name : false}</strong></li>
            </ul>
            <button className="btn" onClick={clearCurrent}>Hide</button>
        </motion.div> 
    
    )
}

export default ExtraInfo
