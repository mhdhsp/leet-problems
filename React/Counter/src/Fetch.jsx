import React, { useEffect, useState } from 'react'

function Fetch() {

    const [posts,setPosts]=useState([]);
    const [loading,setLoading]=useState(true);
    const [error, setError]=useState(null);

    useEffect(()=>{
        const fetchData=async()=>{
            try{
                const res=await fetch("https://jsonplaceholder.typicode.com/posts");
                if(!res.ok) throw new Error("failed");
                const data=await res.json();

                setPosts(data);
                setLoading(false);
            }
            catch(err){
                setError(err.message)
            }
            finally{
                setLoading(false);
            }
        };
        fetchData();
    },[])

    if(loading) return <h2>"loading"</h2>
        if (error) return <h2>Error :  {error}</h2>
  return (
    <div>
        <h1>post list</h1>
        <ul>
            {
                posts.map(post=>
                    <li key={post.id}>{post.title}</li>
                )
            }
        </ul>
    </div>
    
  )
}

export default Fetch