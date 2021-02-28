import React, {useContext} from 'react'
import { CountContext } from '../context/CountContextProvider';

const Navbar = () => {
    const {filterByBiggest, fetchData, countries, fetchDataReduced, langlist, fetchLangData} = useContext(CountContext);

    // console.log(langlist)

    // const languages = countries.map(el => {
    //     return {iso639_1: el.languages[0].iso639_1, name:el.languages[0].name}
    // })


    // const uniqueLanguages = languages.filter((v, i, a) => a.indexOf(v) === i);

    // console.log(languages)
 

    return (
        <ul className="navbar">
            <li>
            <label>Крупнейшие страны мира:  </label>
            <select onChange={e => filterByBiggest(e.target.value)} style={{padding: '5px'}}>
                    <option value={0}>Все страны</option>
                    <option value={10000000}>Более 10млн человек</option>
                    <option value={30000000}>Более 30млн человек</option>
                    <option value={50000000}>Более 50млн человек</option>
                    <option value={100000000}>Более 100млн человек</option>
            </select>
            </li>
            <li>
                <label htmlFor="lang">Какие страны говорят на этом языке  </label>
                <select onChange={e => fetchLangData(e.target.value)} style={{padding: '5px'}} name="lang" id="">
                    {langlist.map(el => {
                        return <option value={el.languages[0].iso639_1}>{el.languages[0].name}</option>
                    })}
                </select>
            </li>
        </ul>
    )
}

export default Navbar
