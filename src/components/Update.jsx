import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { updateUser } from '../features/userDetailsSlice';

const Update = () => {
      const {id} = useParams();
      // console.log("add" + id)

      const dispatch = useDispatch()

      const navigate = useNavigate()

      const [updateData, setUpdateData] = useState();

      const {users, loading} = useSelector((state)=>state.app);

      // console.log("abv"+ users)

     
      useEffect(()=>{
            if(id){
                  const singleUser = users.filter((ele)=> ele.id === id)
                  setUpdateData(singleUser[0]);
            }
      },[])

      const newData = (e)=>{
            setUpdateData({...updateData, [e.target.name]: e.target.value})
            // console.log("abc "+ updateData)
      }

      // console.log(" updated data" + updateData)

      const handleUpdate = (e)=>{
            e.preventDefault()
            dispatch(updateUser(updateData));
            navigate("/read")
      }


  return (
    <div>
      <h2 className="my-2 text-center">Edit the data</h2>
      <form className="w-50 mx-auto" onSubmit={handleUpdate}>
        <div className="mb-3 my-4">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            aria-describedby="emailHelp"
            value={updateData && updateData.name}
            onChange={newData}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            aria-describedby="emailHelp"
            value={updateData && updateData.email}
            onChange={newData}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <input
            type="text"
            className="form-control"
            id="description"
            name="description"
            aria-describedby="emailHelp"
            value={updateData && updateData.description}
            onChange={newData}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Update
        </button>
      </form>
    </div>
  );
};

export default Update;
