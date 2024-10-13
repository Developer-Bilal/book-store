import { useEffect, useState } from "react";
import { CgAddR } from "react-icons/cg";
import Cards from "./Cards";
import Table from "./Table";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Home() {
  const [isActive, setIsActive] = useState(false);

  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get("/books")
      .then((res) => {
        // console.log(res.data.data);
        setBooks(res.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleTableActive = () => {
    setIsActive(true);
  };

  const handleCardActive = () => {
    setIsActive(false);
  };

  return (
    <div className="App">
      <div className="flex items-center justify-between mx-6 my-6">
        <div className="w-fit text-2xl font-bold bg-sky-400 px-4 py-2 rounded ">
          Books List
        </div>
        <Link to="/create">
          <CgAddR className="size-8" />
        </Link>
      </div>

      <div className="flex items-center justify-center gap-10 ">
        <button
          onClick={handleTableActive}
          className="my-5 font-semibold text-lg bg-sky-300 px-4 py-2 rounded"
        >
          Table
        </button>
        <button
          onClick={handleCardActive}
          className="my-5 font-semibold text-lg bg-orange-300 px-4 py-2 rounded"
        >
          Card
        </button>
      </div>

      {isActive ? (
        <div className="flex items-center justify-center m-auto">
          <Table books={books} />
        </div>
      ) : (
        <Cards books={books} />
      )}
    </div>
  );
}
