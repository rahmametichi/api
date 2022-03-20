import React ,{useState,useEffect} from 'react'
import axios from 'axios'
import {Card} from 'react-bootstrap'
import './UserList.css'
const UserList =()=>{

    const [user,SetUser] = useState([])
    useEffect(() => {
        const getUsers = async () => {
            const res = await axios('https://jsonplaceholder.typicode.com/users');
            console.log(res.data);
            SetUser(res.data);
        };

        getUsers();
    }, []);

     { return (
        <div className='divcard'>
            {user.map(user=>
            <Card style={{ width: '18rem' }}>
             <Card.Body>
              <Card.Title>{user.name}</Card.Title>
              <Card.Text>
            Username:  {user.username} <br/>
            Emai :  {user.email}    <br/>
             Address : {user.address.street + user.address.suite}/{user.address.city}-{user.address.zipcode} <br/>
             </Card.Text>
             </Card.Body>
            </Card>
            )}
        </div>
    ) }
}

export default UserList
