import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { FcAbout } from "react-icons/fc";
import { Link } from "react-router-dom";

export default function Cards({ books }) {
  return (
    <div className="cards mx-5 flex items-center justify-center gap-4 flex-wrap">
      {books.map((book) => {
        return (
          <div
            className="card border-2 border-orange-400 rounded p-4 min-w-80"
            key={book._id}
          >
            <div className="flex items-center justify-between">
              <div className="font-light text-lg">{book._id}</div>
              <div className="text-lg bg-orange-200 p-2 rounded">
                {book.publishYear}
              </div>
            </div>
            <div className="flex flex-col my-10">
              <div className="text-2xl font-semibold">{book.title}</div>
              <div className="text-xl mt-2">{book.author}</div>
            </div>
            <div className="flex items-center justify-between">
              <FcAbout className="size-6" />
              <Link to={`/edit/${book._id}`}>
                <FaRegEdit className="size-6 text-green-400" />
              </Link>
              <Link to={`/delete/${book._id}`}>
                <MdDelete className="size-6 text-red-500" />
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
}
