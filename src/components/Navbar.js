import React, {useContext} from 'react'
import { CountContext } from '../context/CountContextProvider';

const Navbar = () => {

    const {filterByBiggest, countries, fetchLangData, isOpened, toggleMenu} = useContext(CountContext);

    // создаем новый массив
const updatedCountries = countries.map(el => {
    return {iso: el.languages[0].iso639_1, name: el.languages[0].name}
})

 // оставляем только уникальные значения iso
  const uniqueObjects = [...new Map(updatedCountries.map(item => [item.iso, item])).values()]


    return (
        <div className="navbar-wrapper">
            <div style={{padding: '5px'}} className="sidenav-trigger-wrapper" onClick={toggleMenu}>
                <div className="sidenav-trigger" >
                </div> 
            </div>
  
        <ul className={`navbar ${isOpened ? 'navbar-is-opened' : ''}`}>
            <li>
                <label>Показать на карте страны с численностью населения:  </label>
                <select onChange={e => filterByBiggest(e.target.value)} style={{padding: '5px'}}>
                        <option value="">Выбрать</option>
                        <option value={0}>Все страны</option>
                        <option value={10000000}>Более 10млн человек</option>
                        <option value={30000000}>Более 30млн человек</option>
                        <option value={50000000}>Более 50млн человек</option>
                        <option value={100000000}>Более 100млн человек</option>
                </select>
            </li>
            <li>
                <label htmlFor="lang">Показать на карте страны, в которых выбранный ниже язык, является официальным:  </label>
                <select onChange={e => fetchLangData(e.target.value)} style={{padding: '5px'}} name="lang">
                    <option value="">Выбрать</option>
                    {uniqueObjects.map((el, i) => {
                        return <option key={i} value={el.iso}>{el.name}</option>
                    })}
                </select>
            </li>
        </ul>
        </div>
       
    )
}

export default Navbar
