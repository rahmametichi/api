import logo from './logo.svg';
import './App.css';
import UserList from './UserList';
import NavBar from './NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Switch } from 'react-router-dom';
import Home from './Home';


function App() {
  return (
    <div className="App">
     <NavBar/>

        <UserList/>
        
       


    </div>
  );
}

export default App;
