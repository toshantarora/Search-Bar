import React, {useState} from 'react'
// import UserDetail from '../../userDetails/userdetail';
import ShowDetails from './showDetails';
const AddUser = () => {
  
    const [addUser, setUserAdd] = useState('');
  
    const saveData = () =>{
      let array = [];
      let products = JSON.parse(localStorage.getItem("allProducts"));
        if(products == null){
        let obj = {};
          obj["name"] = addUser;
          array.push(obj)
          localStorage.setItem("allProducts", JSON.stringify(array));
        }else{
        //condition to check if already exists
          products = JSON.parse(localStorage.getItem("allProducts"));  // [{name : "products"}]
          let obj = {};
          obj["name"] = addUser;
          products.push(obj);
          localStorage.setItem("allProducts", JSON.stringify(products));
       }
       
       }

       
    return (
        <div>
            {/* <h1>Add User in Local storage </h1> */}
               
                   <input type="text" placeholder="add user" value={addUser} onChange={(e) => setUserAdd(e.target.value)}></input>
                   <button onClick={saveData}>Add</button>
           <ShowDetails />
        </div>
    )
}

export default AddUser;
