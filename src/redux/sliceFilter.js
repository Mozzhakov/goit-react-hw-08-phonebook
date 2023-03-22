import { createSlice } from '@reduxjs/toolkit';

const filterInitState = {
  query: '',
};

const filterSlice = createSlice({
  name: 'filter',
  initialState: filterInitState,
  reducers: {
    changeFilter(state, action) {
      state.query = action.payload;
    },
  },
});

export const { changeFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;

// import { createSlice } from '@reduxjs/toolkit';

// const initialState = {
//   filter: '',
// };

// export const filterSlice = createSlice({
//   name: 'filter',
//   initialState,
//   reducers: {
//     setFilter: (state, { payload }) => {
//       state.filter = payload;
//     },
//   },
// });

// export const { setFilter } = filterSlice.actions;

// export default filterSlice.reducer;

// //Selectors
// export const getFilter = state => state.filter.filter;
