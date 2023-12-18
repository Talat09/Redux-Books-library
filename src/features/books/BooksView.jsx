import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteBook } from "./BooksSlice";

const BooksView = () => {
  const books = useSelector((state) => state.booksReducer.books);
  console.log(books);
  const dispatch = useDispatch();
  const handleDelete = (id) => {
    dispatch(deleteBook(id));
  };
  return (
    <div className="py-16 my-16">
      <h2 className="text-4xl md:text-5xl text-center font-semibold uppercase text-[#054A75]">
        ALL Books
      </h2>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center items-center gap-5 my-16 mx-8">
        {books &&
          books.map((book, i) => {
            const { id, title, image, author } = book;
            return (
              <div
                key={i}
                className="w-80 h-[500px] border border-gray-400 flex flex-col md:flex-col p-6 justify-center items-center  rounded-md "
              >
                <img
                  className="w-full h-[250px] mt-4 rounded-md"
                  src={image}
                  alt="book-image"
                />
                <div className="p-2">
                  <h3 className="text-2xl font-semibold mt-4">{title}</h3>
                  <p className="text-xl">
                    Author: <span className="font-semibold">{author}</span>
                  </p>
                  <div className="flex justify-between">
                    <Link to="/edit" state={{ id, title, image, author }}>
                      <button className=" bg-sky-800 px-6 py-2  text-white rounded-md mt-4">
                        Edit
                      </button>
                    </Link>

                    <button
                      className=" bg-sky-800 px-6 py-2  text-white rounded-md mt-4"
                      onClick={() => handleDelete(id)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
      </section>
    </div>
  );
};

export default BooksView;
