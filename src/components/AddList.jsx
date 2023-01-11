import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import favoriteReducer from "../redux/reducers/favoritereducer";
import { listActions } from "../redux/actions/actions";
import { clear, favorite } from "../redux/actions/favoritesAction";
import listItems from "../redux/reducers/favoritereducer";
import toastr from "toastr";

function AddList() {
  const favs = useSelector((state) => state.favoriteReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    console.log(favs);
  }, []);
  const handleClick = () => {
    dispatch(clear());
    toastr.success("deleted");
  };
  return (
    <>
      <button
        style={{
          margin: "20px",
        }}
        className="delete"
        onClick={handleClick}
      >
        CLEAR
      </button>
      <div className="container-table">
        <table>
          <thead>
            <tr>
              <th>id</th>
              <th>Company Name</th>
              <th>Contact Name</th>
              <th>Contact Title</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {favs &&
              favs.map((item) => {
                return (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.companyName}</td>
                    <td>{item.contactName}</td>
                    <td>{item.contactTitle}</td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default AddList;
