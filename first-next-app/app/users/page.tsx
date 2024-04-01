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
  console.log(data);
  

  const users = data.map((user) => {    
    return <li key={ user.id }>{user.name}</li>
  });
  /* console.log(users); */
  

  return (
    <main className='flex flex-col justify-between items-center text-center p-6'>
      <h1 className='m-5'>Users Page</h1>
      <ul className='mb-16'>
        { users }
      </ul>
    </main>
  )
}

export default UsersPage;