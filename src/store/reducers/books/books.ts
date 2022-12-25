import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { loadBooks } from '../../../api/api';
import { TBook, TApiAnswer } from '../../../types';


type TBooksSlice = TApiAnswer & {
    items: Array<TBook>
};

const initialTags: TBooksSlice = {
    isLoading: false,
    isLoaded: false,
    isError: false,
    items: []
};

const getBooks = createAsyncThunk(
    'books',
    async (thunkAPI) => {
        const res = await loadBooks().then(
            (data) => data.json()
        )
        return res
    });

const booksSlice = createSlice({
    name: "books",
    initialState: initialTags,
    reducers: {},
    extraReducers: {
        [getBooks.pending.toString()]: (state: TBooksSlice) => {
            state.isLoading = true;
            state.isError = false;
            state.isLoaded = false;
        },
        [getBooks.rejected.toString()]: (state: TBooksSlice) => {
            state.isLoading = false;
            state.isError = true;
            state.isLoaded = false;

        },
        [getBooks.fulfilled.toString()]: (state: TBooksSlice, action: PayloadAction<Array<TBook>>) => {
            state.isLoading = false;
            state.isLoaded = true;
            state.items = action.payload;
        }
    }
});


// const getBooks: AppThunk<Promise<TBook[]>> = () => {
//     return function (dispatch: AppDispatch) {
//         dispatch(loading());
//         return loadBooks()
//             .then(res => dispatch(success(res)))
//             .catch(err => dispatch(error()))
//     }
// }






const { reducer, actions } = booksSlice;
export {
    booksSlice,
    reducer as booksReducer,
    getBooks,
}