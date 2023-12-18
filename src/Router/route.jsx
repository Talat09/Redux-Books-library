import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../Components/Home/Home";
import NotFound from "../NotFound/NotFound";
import AddBook from "../features/books/AddBook";
import BooksView from "../features/books/BooksView";
import EditBook from "../features/books/EditBook";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/books",
        element: <BooksView />,
      },
      {
        path: "/add-book",
        element: <AddBook />,
      },
      {
        path: "/edit",
        element: <EditBook />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);
