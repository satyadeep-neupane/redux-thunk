import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    color: 'black'
}

const getColor = () =>
{
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('pink')
        }, 3000)
    })
}

const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        changeColor: (state, action) => {
            state.color = getColor();
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(asyncChangeColor.fulfilled, (state, action) => {
                console.log('action.payload', action.payload);
                state.color = action.payload.color;
            })
            .addCase(asyncChangeColor.pending, (state, action) => {
                state.color = 'pending...'
            })
    }
});

export const asyncChangeColor = createAsyncThunk(
    'theme/changeColor',
    async () => {
        const response = await getColor();
        return { color: response };
    }
);

export const { changeColor } = themeSlice.actions;

export default themeSlice.reducer;