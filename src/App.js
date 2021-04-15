
import './App.css';
import AddUser from './components/AddUser/adduser';
import Counter from './components/Counter/counter';

// import Country from './country/country';
import Searchbar from './userDetails/searchbar';
// import First from './first/first'

function App() {
  return (
    <div className="App">
    {/* <First/> */}
    {/* <Country/> */}
    <Searchbar/>
     <AddUser/>
     <Counter/>
    </div>
  );
}

export default App;
