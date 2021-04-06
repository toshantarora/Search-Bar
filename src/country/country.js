import React,{useState, useEffect} from 'react'
import CountryDetail from './countryDetail';
const axios = require('axios');
const Country = () => {
  const [countries, setCountry] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [search, setSearch] = useState("");
    useEffect(() => {
       axios
       .get("https://restcountries.eu/rest/v2/all")
       .then((res) => {setCountry(res.data)})
       .catch((err) => {
        console.log(err);
      });
        return () => {
           
        }
    }, [])


    useEffect(() => {
              setFilteredCountries(countries.filter((country) => 
              country.name.toLowerCase().includes(search.toLowerCase())))
        return () => {
           
        }
    }, [search, countries])

    return (
        <div>
        <div>
            <input type='text' placeholder='search' onChange={(e) => setSearch(e.target.value)}/>
        </div>
             {/* <input type="text" placeholder="Search Countries" onChange={(e) => setSearch(e.target.value)}/> */}
       {filteredCountries.map((country, idx) => (
        <CountryDetail key={idx} {...country} />
      ))}
        </div>
    )
}

export default Country;
