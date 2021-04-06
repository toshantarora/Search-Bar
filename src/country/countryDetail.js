import React from 'react'

const CountryDetail = (props) => {
    const {name, flag} = props;
    return (
        <div>
             <p>
        <img src={flag} alt={name} style={{ width: "20px", height: "20px" }} />
      </p>
      <p>{name}</p>
        </div>
    )
}

export default CountryDetail;
