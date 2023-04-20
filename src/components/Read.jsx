import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { showUser } from '../features/userDetailsSlice';
import { deleteUser } from '../features/userDetailsSlice';

const Read = () => {
      const dispatch = useDispatch();

      const {users, loading} = useSelector((state)=>state.app)

      useEffect(()=>{
            dispatch(showUser())
      },[])

      if(loading){
            return <h2>Loading...</h2>
      }
  return (
    <div>
    
      <h1 className='text-center my-4'>All Todo's</h1>
      <div> 
            {users && 
            users.map((ele)=>(
                  <div key={ele.id} className="card w-50 mx-auto my-4">
      <div className="card-body text-center ">
      <h5 className="card-title">{ele.name}</h5>
      <p className="card-text">{ele.email}</p>
      <p className="card-text">{ele.description}</p>
      <Link to={`/edit/${ele.id}`} className='card-link'>Edit</Link>
      <Link onClick={()=> dispatch(deleteUser(ele.id))} className='card-link'>Delete</Link>
      </div>
      </div>
            ))}  
      
      </div>
    </div>
  )
}

export default Read
