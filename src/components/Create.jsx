import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { createUser } from '../features/userDetailsSlice';
import { useNavigate } from 'react-router-dom';

const Create = () => {

      const [users, setUsers] = useState({}); 

      const navigate = useNavigate();
      
      const dispatch = useDispatch();

      const getUserData = (e)=>{
            setUsers({...users, [e.target.name]: e.target.value}) 
      }

      const handleSubmit = (e)=>{
            e.preventDefault();
            console.log(users); 
            dispatch(createUser(users));
            navigate("/read")
      }
      
  
return (
    <div>
      <h2 className='my-2 text-center'>Fill the data</h2>
      <form className='w-50 mx-auto' onSubmit={handleSubmit}> 
      <div className="mb-3 my-4">
      <label htmlFor="name" className="form-label">Name</label>
      <input type="text" className="form-control" id="name" name='name' aria-describedby="emailHelp" onChange={getUserData} />
      </div>
      <div className="mb-3">
      <label htmlFor="email" className="form-label">Email address</label>
      <input type="email" className="form-control" id="email" name='email' aria-describedby="emailHelp" onChange={getUserData} />
      </div>
      <div className="mb-3">
      <label htmlFor="description" className="form-label">Description</label>
      <input type="text" className="form-control" id="description" name='description' aria-describedby="emailHelp" onChange={getUserData} />
      </div>
      
      <button type="submit" className="btn btn-primary">Create</button>
      </form>
    </div>
  )
}

export default Create
