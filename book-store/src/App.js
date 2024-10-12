import Create from "./components/Create";
import Delete from "./components/Delete";
import Edit from "./components/Edit";
import Home from "./components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/create" element={<Create />} />
          <Route exact path="/edit/:id" element={<Edit />} />
          <Route exact path="/delete/:id" element={<Delete />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
