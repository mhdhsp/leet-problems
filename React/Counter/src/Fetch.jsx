import React, { useEffect, useState } from 'react'
import Child from './Child';

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
                    <Child key ={post.id} item={post}></Child>
                )
            }
        </ul>
    </div>
    
  )
}

export default Fetch