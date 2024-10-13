import axios from "axios";
import { useState } from "react";
import { IoReturnDownBackOutline } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";

export default function Create() {
  const [title, setTitle] = useState();
  const [author, setAuthor] = useState();
  const [publishYear, setPublishYear] = useState();

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submited");

    const data = {
      title,
      author,
      publishYear,
    };

    axios
      .post("/books/create", data)
      .then((res) => {
        console.log("book created!");
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
          Create Book
        </div>
        <Link to="/">
          <IoReturnDownBackOutline className="size-8 bg-sky-300 p-2 rounded" />
        </Link>
      </div>
      <div className="flex items-center justify-center">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-2 items-start justify-center border-2 border-sky-300 rounded mt-10 mx-10 p-8 w-2/5"
        >
          <div className="text-xl">Title</div>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border border-sky-200 p-2 rounded w-full"
          />
          <div className="text-xl mt-5">Author</div>
          <input
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            className="border border-sky-200 p-2 rounded w-full"
          />

          <div className="text-xl mt-10">Publish Year</div>
          <input
            type="text"
            value={publishYear}
            onChange={(e) => setPublishYear(e.target.value)}
            className="border border-sky-200 p-2 rounded w-full"
          />
          <button className="bg-sky-300 hover:bg-sky-500 p-2 rounded mt-10 w-full ">
            Save
          </button>
        </form>
      </div>
    </div>
  );
}
