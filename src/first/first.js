import React, {useState, useEffect } from 'react';

const First = () => {
    const [userData, setUserData] = useState([]);
    const [search, setSearchState] = useState('');
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(res => res.json())
        .then(data => setUserData(data))
        .catch(error => console.error(error))
    }, []);
    
 
    
    const handleChange = (event) => {
        event.preventDefault();
        setSearchState(event.target.value);
    
    }


    // const handleValue = (event) => {
    //     event.preventDefault();
      
    // }

  

    // const filterdNames = userData.name.filter(names => {
    //     return names.name.toLowerCase().includes(search.toLocaleLowerCase())
    // })
  
    return(<div>
               <div>
               {/* {search} */}
                 <input type='text' onChange={handleChange}  placeholder='search'/>
              </div>
                    {
                        userData.map((value,index) => { 
                                        return(
                                            <ul key={index}>
                                                <li>{value.name}</li>
                                            </ul>)
                                       })
                    }
            </div>)
}
export default First;