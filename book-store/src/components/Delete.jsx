import axios from "axios";
import { IoReturnDownBackOutline } from "react-icons/io5";

import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Delete() {
  const { id } = useParams();
  const navigate = useNavigate();

  const handleDelete = () => {
    axios
      .delete(`http://localhost:5000/books/${id}`)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <div className="flex items-center justify-between mt-5 mx-10">
        <div className="text-2xl font-bold bg-sky-300 p-2 rounded">
          Delete Book
        </div>
        <Link to="/">
          <IoReturnDownBackOutline className="size-8 bg-sky-300 p-2 rounded" />
        </Link>
      </div>
      <div className="flex items-center justify-center m-10">
        <button
          onClick={handleDelete}
          className="text-2xl bg-red-500 px-4 py-2 rounded"
        >
          Confirm Delete!
        </button>
      </div>
    </div>
  );
}
