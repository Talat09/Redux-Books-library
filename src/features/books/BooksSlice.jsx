import { createSlice } from "@reduxjs/toolkit";

const initialBooks = {
  books: [
    {
      id: 1,
      title: "Interesting Facts For Curious Minds: 1572",
      image: "https://i.ibb.co/tLVb16n/71hw-UY5-Zmx-L-AC-UL210-SR195-210.jpg",
      author: "Jordan Moore",
    },
    {
      id: 2,
      title: "How to Catch a Dinosaur",
      image: "https://i.ibb.co/nPjKyWW/91jw-RAg09-EL-SY466.jpg",
      author: "Adam Wallace",
    },
    {
      id: 3,
      title: "Oath and Honor: A Memoir and a Warning",
      image: "https://i.ibb.co/km7yzzY/71-CX11n-Gh-WL-SY466.jpg",
      author: "Liz Cheney",
    },
  ],
};
//create slice
export const bookSlice = createSlice({
  name: "books",
  initialState: initialBooks,
  reducers: {
    showBooks: (state) => state,
    addBook: (state, action) => {
      state.books.push(action.payload);
    },
  },
});

export const { showBooks, addBook } = bookSlice.actions;
export default bookSlice.reducer;
