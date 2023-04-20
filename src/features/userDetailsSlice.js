import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


// Create action

export const createUser = createAsyncThunk("createUser", async(data, {rejectWithValue})=>{

      const response = await fetch("https://6426f3e2d24d7e0de47c5d1e.mockapi.io/Crud",{
            method: 'POST',
            headers: {
                  'Content-Type': 'application/json',
            },
            body: JSON.stringify(data) 
      });

      try {
           const result = await response.json();
           return result ;
      } catch (error) {
            return rejectWithValue(error);
      }
})

// read action
export const showUser = createAsyncThunk("showUser", async(args, {rejectWithValue})=>{

      const response = await fetch("https://6426f3e2d24d7e0de47c5d1e.mockapi.io/Crud");

      try {
            const result = await response.json();
            console.log(result)
            return result
      } catch (error) {
            return rejectWithValue(error)
      }
})

// delete action
export const deleteUser = createAsyncThunk("deleteUser", async(id, {rejectWithValue})=>{

      const response = await fetch(`https://6426f3e2d24d7e0de47c5d1e.mockapi.io/Crud/${id}`, {
            method: "DELETE"
      });

      try {
            const result = await response.json();
            console.log(result)
            return result
      } catch (error) {
            return rejectWithValue(error)
      }
})

// Update action

export const updateUser = createAsyncThunk("updateUser", async(data, {rejectWithValue})=>{

      const response = await fetch(`https://6426f3e2d24d7e0de47c5d1e.mockapi.io/Crud/${data.id}`,{
            method: 'PUT',
            headers: {
                  'Content-Type': 'application/json',
            },
            body: JSON.stringify(data) 
      });

      try {
           const result = await response.json();
           return result ;
      } catch (error) {
            return rejectWithValue(error);
      }
})

export const userDetail = createSlice({
      name: "userDetail",
      initialState: {
            users: [],
            loading: false,
            error: null,
            
      },
      extraReducers : {
            [createUser.pending] : (state)=>{
                  state.loading = true;
            },
            [createUser.fulfilled] : (state, action)=>{
                  state.loading = false;
                  state.users.push(action.payload);
            },
            [createUser.rejected] : (state, action)=>{
                  state.loading = false;
                  state.users = action.payload;
            },
            [showUser.pending] : (state)=>{
                  state.loading = true;
            },
            [showUser.fulfilled] : (state, action)=>{
                  state.loading = false;
                  state.users = action.payload;
            },
            [showUser.rejected] : (state, action)=>{
                  state.loading = false;
                  state.users = action.payload;
            },
            [deleteUser.pending] : (state)=>{
                  state.loading = true;
            },
            [deleteUser.fulfilled] : (state, action)=>{
                  state.loading = false;
                  const {id} = action.payload;
                  if(id){
                        state.users = state.users.filter((ele)=> ele.id !== id);
                  }
            },
            [deleteUser.rejected] : (state, action)=>{
                  state.loading = false;
                  state.users = action.payload;
            },
            [updateUser.pending] : (state)=>{
                  state.loading = true;
            },
            [updateUser.fulfilled] : (state, action)=>{
                  state.loading = false;
                  state.users = state.users.map((ele) =>
                   ele.id === action.payload.id ? action.payload : ele);
            },
            [updateUser.rejected] : (state, action)=>{
                  state.loading = false;
                  state.users = action.payload;
            },
      }
      
});



export default userDetail.reducer;