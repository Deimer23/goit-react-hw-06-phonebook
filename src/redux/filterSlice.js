import { createSlice } from "@reduxjs/toolkit";

const initialState = {filter:""};

const filterSlice = createSlice({
    name:'filter',
    initialState,

    reducers:{

        filterContact(state, action){
            state.filter = action.payload;
            console.log(state.filter)
        }
    }
});

export const {filterContact} = filterSlice.actions;
export const filterReducer = filterSlice.reducer;