import { useState } from "react";
import { useDispatch } from "react-redux";
import { addBook } from "./BooksSlice";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
const AddBook = () => {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [author, setAuthor] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const numberOfBooks = useSelector((state) => state.booksReducer.books.length);
  // console.log(numberOfBooks);
  const handleSubmit = (e) => {
    e.preventDefault();
    const book = { id: uuidv4, title, image, author };
    dispatch(addBook(book));
    navigate("/books", { replace: true });
  };
  return (
    <div className="py-16 my-16">
      <h2 className="text-4xl md:text-5xl text-center uppercase text-sky-800">
        Add Book
      </h2>
      <form
        onSubmit={handleSubmit}
        className="w-96 md:w-1/2 flex flex-col justify-center items-center mx-auto border border-gray-400 my-16 py-8 rounded-md"
      >
        <div className="md:w-1/2 flex flex-col">
          <label htmlFor="title" className="text-xl md:text-2xl">
            Title:
          </label>
          <input
            className=" border border-sky-800 rounded-md p-2 my-2"
            type="text"
            name="title"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Book Title"
            required
          />
        </div>
        <div className="md:w-1/2 flex flex-col">
          <label htmlFor="image" className="text-xl md:text-2xl">
            Image URL:
          </label>
          <input
            className=" border border-sky-800 rounded-md p-2 my-2"
            type="text"
            name="image"
            id="image"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            placeholder="Book Image URL"
            required
          />
        </div>
        <div className="md:w-1/2 flex flex-col">
          <label htmlFor="author" className="text-xl md:text-2xl">
            Author:
          </label>
          <input
            className=" border border-sky-800 rounded-md p-2 my-2"
            type="text"
            name="author"
            id="author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            placeholder="Author Name"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-sky-800 text-white px-12 py-3 my-4 rounded-md text-xl"
        >
          Add Book
        </button>
      </form>
    </div>
  );
};

export default AddBook;
