"use client"
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import PostTemplate from '@/app/types';

const Posts = () => {

  const [posts, setPosts] = useState<PostTemplate[]>([]); 

  useEffect(() => {
    async function getPosts(){
      const response = await axios.get('/api/posts');
      console.log(response.data);
      setPosts(response.data);
    }
    getPosts();
  }, []);
 
  return (
    <main className='main'>
      <section className='posts'>
        { 
        posts.map((obj, index) => {
          return <li key={index}>{obj.title}</li>
        }) 
        }
      </section>
    </main>
  )
}

export default Posts;