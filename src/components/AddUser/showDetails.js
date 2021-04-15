import React,{useState,useEffect} from 'react'

const ShowDetails = (props) => {
    const {name} = props;
    const [userValue, setUserValue] = useState([]);

    useEffect(() => {
        setUserValue(JSON.parse(localStorage.getItem("allProducts"))) ;
    },)

    const handleDelete = (id) => {
        let dataList = JSON.parse(localStorage.getItem('allProducts'));
        dataList.splice(id, 1);
        localStorage.setItem('allProducts', JSON.stringify(dataList));
        // setUserValue(JSON.parse(localStorage.removeItem("allProducts"))) ;
    }
    return (
        <div>
            <p>{name}</p>
            {
              userValue.map((user,index) => {
                    return(
                        <li key={index}>{user.name}
                        <button onClick={handleDelete}>Delete</button>
                        </li>
                    )
                })
            }
        </div>
    )
}

export default ShowDetails;
