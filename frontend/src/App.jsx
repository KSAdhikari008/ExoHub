import { useEffect, useState} from "react";
import axios from 'axios'

function App() {
 
  const [users, setUsers] = useState([]);

  useEffect(()=>{
  
    axios.get('/api/users')
    .then(res => setUsers(res.data))
    .catch(err => console.log(err));
  
  },[]);
 
  return (
    <>
      <ul>{
        users.map((user) => {
          return (
            <li key={user.id}>Name: {user.name} | Email: {user.email}</li>
          )
        })
        }</ul>
    </>
  );
}

export default App;