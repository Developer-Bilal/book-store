import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { FcAbout } from "react-icons/fc";
import { Link } from "react-router-dom";

export default function Table({ books }) {
  return (
    <table className="w-full bg-white text-center mx-4 border-separate border-spacing-2">
      <thead>
        <tr className="bg-gray-200 text-gray-600 uppercase text-sm">
          <th className="py-3 px-4 border-2 border-gray-300">Title</th>
          <th className="py-3 px-4 border-2 border-gray-300">Author</th>
          <th className="py-3 px-4 border-2 border-gray-300">Publish Year</th>
          <th className="py-3 px-4 border-2 border-gray-300">Operations</th>
        </tr>
      </thead>
      <tbody className="text-gray-700">
        {books.map((book) => {
          return (
            <tr className="hover:bg-gray-100" key={book._id}>
              <td className="py-3 px-4 border-2 border-gray-300">
                {book.title}
              </td>
              <td className="py-3 px-4 border-2 border-gray-300">
                {book.author}
              </td>
              <td className="py-3 px-4 border-2 border-gray-300">
                {book.publishYear}
              </td>
              <td className="py-3 px-4 border-2 border-gray-300">
                <div className="flex items-center justify-center gap-2">
                  {/* <FcAbout className="size-6" /> */}
                  <Link to={`/edit/${book._id}`}>
                    <FaRegEdit className="size-6 text-green-400" />
                  </Link>
                  <Link to={`/delete/${book._id}`}>
                    <MdDelete className="size-6 text-red-500" />
                  </Link>
                </div>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
