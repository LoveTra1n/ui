import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";

export const getSelectCard = createAsyncThunk(
    "getSelectCard",
    async function(id,{dispatch,rejectWithValue}){
        try {
            const response= await fetch(`https://fakestoreapi.com/products/${id}`)
            if (response.status===200){
                const data = await response.json()
                return data
            }
        }catch (error){
            return rejectWithValue("ошибка")
        }
    }
)

export const cardSlice=createSlice({
    name:"cardSlice",
    initialState:{
        selectCard:{}
    },reducers:{

    },extraReducers:builder => {
        builder.addCase(getSelectCard.fulfilled,(state,action)=>{
            state.selectCard=action.payload
            console.log(action.payload)
        })
    }
})

export default cardSlice.reducer