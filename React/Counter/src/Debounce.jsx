import React, { useEffect, useState } from 'react'

function Debounce() {

    const [users,setUsers]=useState([]);
    const [loading,setLoading]=useState(true);
    const [error,setError]=useState(null);
    const [filtered,setFiltered]=useState([]);
    const [search,setSearch]=useState("");

    useEffect(()=>{
        const fetchdata=async ()=>{
            try{
                setLoading(true);
                const res=await fetch(`https://jsonplaceholder.typicode.com/users`);
                const data=await res.json();
                setUsers(data);
                setFiltered(data);
                setLoading(false);
            }
            catch(e){
                setLoading(false);
                setError(e.message);
            }
            finally
            {
                setLoading(false);
            }
        };
        fetchdata();
    },[])

    useEffect(()=>{
        const timer=setTimeout(()=>{
            console.log("filtered");
            if(search.trim()==="") {setFiltered(users);return} ;
            const res=users.filter(item=>item.name.toLowerCase().includes(search.toLowerCase()));
            setFiltered(res)
        },500);

        return ()=>clearTimeout(timer);
    },[search,users])

    if(loading) return <h1>Loading...</h1>
    if(error) return <h1>{error}</h1>
  return (
    <div>
        <input value={search} onChange={e=>setSearch(e.target.value)}></input>
        {
            filtered.map(item=><h1 key={item.id}>{item.name}</h1>)
        }
    </div>
  )
}

export default Debounce