import React from 'react'

const Loader = () => {

    // let digits = [1,2,1,2,3,4,5]
    // let updatedDigits = [...new Set(digits)]
    // console.log(updatedDigits)

    return (
        <div className="loader-wrapper">
            <div className="lds-dual-ring"></div>
            <h1>Подождите, идет загрузка...</h1>
        </div>
    )
}

export default Loader
