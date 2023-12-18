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
    <div className="py-16 my-16 bg-base-200">
      <h2 className="text-4xl md:text-5xl text-center font-semibold uppercase text-[#054A75]">
        ALL Books
      </h2>
      <section className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center items-center gap-12 my-16  ">
          {books &&
            books.map((book, i) => {
              const { id, title, image, author } = book;
              return (
                <div
                  className="w-full h-[470px] bg-white shadow-xl  rounded-md p-4 mx-2"
                  key={i}
                >
                  <figure>
                    <img
                      className="w-full h-[250px] rounded-md"
                      src={image}
                      alt="Shoes"
                    />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p>Authur:{author}</p>
                    <div className="card-actions justify-between ">
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
        </div>
      </section>
    </div>
  );
};

export default BooksView;
