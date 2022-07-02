import React from 'react'
import { useState, useEffect } from 'react'

const Articles = () => {

    const [posts, setPosts] = useState([]); // Dizi tipinde boş bir state oluştu.

    const fetchData = () => {
        fetch('https://jsonplaceholder.typicode.com/posts').then((response) => {
            return response.json();
        }).then((data) => {
            setPosts(data)
            console.log(data)
        })
    }

    useEffect(()=>{
        fetchData();
        
    },[])
  return (
    <div>
      {posts.length > 0 &&
        posts.map((post) => (
          <>
            <h2 key={post.id}>{post.title}</h2>
            <div>{post.body}</div>
          </>
        ))}
    </div>
  )
}

export default Articles