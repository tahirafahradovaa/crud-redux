import { useEffect, useState } from "react";
import "./App.css";
import { Link, Route, Routes } from "react-router-dom";
import List from "./components/List";
import AddList from "./components/AddList";
import { useDispatch, useSelector } from "react-redux";
import { listActions } from "./redux/actions/actions";
import InputPage from "./components/InputPage";

function App() {
  const [count, setCount] = useState(0);
  let datas = useSelector((state) => state);
  let dispatch = useDispatch();

  useEffect(() => {
    dispatch(listActions.getAll());
  }, []);
  return (
    <>
      <div className="linkCont">
        <Link
          style={{
            color: "white",
          }}
          to={"/"}
        >
          List
        </Link>
        <Link
          style={{
            color: "white",
          }}
          to={"/favorites"}
        >
          Favorites
        </Link>
        <Link
          style={{
            color: "white",
          }}
          to={"/add"}
        >
          Add New Customer
        </Link>
      </div>

      <Routes>
        <Route path="/" element={<List />}></Route>
        <Route path="/add" element={<InputPage />}></Route>
        <Route path="/favorites" element={<AddList />}></Route>
      </Routes>
    </>
  );
}

export default App;
