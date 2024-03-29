import React from 'react'

//define the user object
interface User {
  id: number;
  name: string;
}

const UsersPage  = async () => {

  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  //set the type of data inside the "data" variable to reasebmle User interface
  const data: User[] = await response.json();

  const users = data.map((user) => {    
    return <li key={ user.id }>{user.name}</li>
  });
  console.log(users);
  

  return (
    <>
      <div>Users Page</div>
      <br />
      <ul>
        { users }
      </ul>
    </>
    
  )
}

export default UsersPage;