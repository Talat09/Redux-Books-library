import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
const initialBooks = {
  books: [
    {
      id: uuidv4(),
      title: "Interesting Facts For Curious Minds: 1572",
      image:
        "https://i.ibb.co/xmbvjvC/sincerely-media-CXYPfveiuis-unsplash.jpg",
      author: "Jordan Moore",
    },
    {
      id: uuidv4(),
      title: "How to Catch a Dinosaur",
      image: "https://i.ibb.co/nPjKyWW/91jw-RAg09-EL-SY466.jpg",
      author: "Adam Wallace",
    },
    {
      id: uuidv4(),
      title: "Oath and Honor: A Memoir and a Warn.",
      image: "https://i.ibb.co/km7yzzY/71-CX11n-Gh-WL-SY466.jpg",
      author: "Liz Cheney",
    },
    {
      id: uuidv4(),
      title: "How to Catch a Dinosaur",
      image: "https://i.ibb.co/nPjKyWW/91jw-RAg09-EL-SY466.jpg",
      author: "Adam Wallace",
    },
    {
      id: uuidv4(),
      title: "Interesting Facts For Curious Minds: 1572",
      image:
        "https://i.ibb.co/xmbvjvC/sincerely-media-CXYPfveiuis-unsplash.jpg",
      author: "Jordan Moore",
    },
    {
      id: uuidv4(),
      title: "Oath and Honor: A Memoir and a Warn.",
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
    updateBook: (state, action) => {
      const { id, title, image, author } = action.payload;
      const isBookExist = state.books.filter((book) => book.id === id);
      if (isBookExist) {
        isBookExist[0].title = title;
        isBookExist[0].image = image;
        isBookExist[0].author = author;
      }
    },
    deleteBook: (state, action) => {
      const id = action.payload;
      state.books = state.books.filter((book) => book.id !== id); //jsob book er id amrder id er sathe match hove nah oi book state.books a rekhe dicchi filter kore
    },
  },
});

export const { showBooks, addBook, deleteBook, updateBook } = bookSlice.actions;
export default bookSlice.reducer;
