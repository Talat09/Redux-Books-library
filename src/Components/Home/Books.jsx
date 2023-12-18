import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Books = () => {
  const books = useSelector((state) => state.booksReducer.books);
  console.log(books);
  return (
    <div className="py-16 my-16 ">
      <h2 className="text-4xl md:text-5xl text-center font-semibold uppercase text-[#054A75]">
        Books
      </h2>
      <section className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center items-center gap-12 my-16  ">
          {books &&
            books.map((book, i) => {
              const { title, image, author } = book;
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
                    <div className="card-actions justify-end ">
                      <Link to="/books">
                        <button className="btn bg-sky-800 text-white hover:bg-black px-8">
                          Details
                        </button>
                      </Link>
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

export default Books;
