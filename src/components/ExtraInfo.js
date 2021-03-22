import {useContext} from 'react'
import { CountContext } from '../context/CountContextProvider'
import {motion} from 'framer-motion'
import PropTypes from 'prop-types'

const ExtraInfo = ({current}) => {
    const {clearCurrent} = useContext(CountContext);
    

//ф-я для добавления пробелов между разрядами цифр
    function numberWithSpaces(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    }

    return (

       <motion.div className="extra-info"
        initial={{y: '-50vh'}}
        animate={{y: 0}}
        transition={{duration: 0.5, type: 'spring', stiffness: 150}}
        >
            <h3 style={{textAlign: 'center'}}>Основная информация:</h3>
            <img style={{width: '100px', display: 'block', margin: 'auto'}} src={current.flag} alt="Flag of the country"/>
            <ul>
                <li><strong>Наименование страны: {current.name}</strong></li>
                <li><strong>Население: {numberWithSpaces(current.population)} </strong></li>
                <li><strong>Столица: {current.capital}</strong></li>
                <li><strong style={{color:'yellow'}}>Официальные языки страны:</strong><br/> {current.languages.map((lang, i) => {
                    return <span key={i}>{lang.name}{i === (current.languages.length - 1) ? '' : ', '}</span>
                }) 
                }</li>
                <li><strong style={{color:'yellow'}} >Валюта:</strong> {current.currencies.map((currency,i) => {
                    return <div key={i}>{currency.name}{' '}{currency.symbol ? `(${currency.symbol})` : false}</div>
                })}</li>
                <li><strong style={{color:'yellow'}}>Входит в экономические блоки:</strong> {current.regionalBlocs.length ? current.regionalBlocs.map((bloc,i) => {
                    return <span key={i}>{bloc.name}{i === (current.regionalBlocs.length - 1) ? '' : ', '}</span>
                }) : '---'}
                </li>
                <li><strong>Местное время:</strong> {current.timezones.map((time, i) => {
                    return <span key={i}>{time}{i === (current.timezones.length - 1) ? '' : ', '}</span>
                })}</li>
            </ul>
            <button className="btn" onClick={() => clearCurrent()}
            style={{boxShadow: "0px 0px 8px rgb(255,255,255)", background: 'rgb(0,0,0)',
            width: '200px'}}
            >Скрыть</button>
        </motion.div> 
    
    )
}

ExtraInfo.propTypes = {
    current: PropTypes.object.isRequired
}

export default ExtraInfo
