/* eslint-disable no-unused-vars */
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { updateBook } from "./BooksSlice";

const EditBook = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  console.log(location);
  const [id, setId] = useState(location.state.id);
  const [title, setTitle] = useState(location.state.title);
  const [image, setImage] = useState(location.state.image);
  const [author, setAuthor] = useState(location.state.author);
  const handleUpdateBook = (e) => {
    e.preventDefault();
    const book = { id, title, image, author };
    dispatch(updateBook(book));
    navigate("/books", { replace: true });
  };
  return (
    <div className="py-16 my-16">
      <h1 className="text-4xl md:text-5xl text-center">Edit Book</h1>

      <form
        onSubmit={handleUpdateBook}
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
          Update Book
        </button>
      </form>
    </div>
  );
};

export default EditBook;
