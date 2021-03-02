import React, {useContext, useState} from 'react'
import { CountContext } from '../context/CountContextProvider';

const Navbar = () => {
    // const [isOpened, setIsOpened] = useState(false);
    const {filterByBiggest, langlist, fetchLangData, isOpened, toggleMenu} = useContext(CountContext);


         console.log(langlist)
    // Шаг 1
    // const ggg = langlist.map(el => {
    //     return el.languages.map((item, i) => {
    //         return item.iso639_1 
    //         console.log(ggg)
    //     })
    // })

    const ggg2 = langlist.map(el => {
        return {iso: el.languages.map(item => {
            return item.iso639_1 
        }), name:el.name} 
    })

    console.log(ggg2)


    // Шаг 2
const uniqueLanguages = ggg2.flat();
console.log(ggg2)
    console.log(uniqueLanguages)

    // Шаг 3
    var uniqueArray = [...new Set(uniqueLanguages)]
    console.log(uniqueArray)
    // const arr = langlist.length && langlist.map(el => {
    //     return el.languages.map(item => {
    //         return item.iso639_1
    //     })
    // })

    // const languages = countries.map(el => {
    //     return {iso639_1: el.languages[0].iso639_1, name:el.languages[0].name}
    // })

const bbb = langlist.map(el => {
    return {iso: el.languages[0].iso639_1, name: el.languages[0].name}
})

console.log(bbb)

function onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
  }

  const uniqueObjects = [...new Map(bbb.map(item => [item.iso, item])).values()]
console.log(uniqueObjects)


    return (
        <div className="navbar-wrapper">
            <div style={{padding: '5px'}} className="sidenav-trigger-wrapper" onClick={toggleMenu}>
                <div className="sidenav-trigger" >
                </div> 
            </div>
        {/* style={display: {!isOpened ? 'none' : 'block'}}  */}
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
