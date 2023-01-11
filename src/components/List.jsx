import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listActions } from "../redux/actions/actions";
import { favorite } from "../redux/actions/favoritesAction";
import listItems from "../redux/reducers/favoritereducer";
import toastr from "toastr";

function List() {
  const dispatch = useDispatch();
  const favs = useSelector((state) => state.favoriteReducer);
  //   const [datas, setdatas] = useState([]);
  const datas = useSelector((state) => state.listItems);

  const handleClick = (id) => {
    fetch(`https://northwind.vercel.app/api/customers/${id}`, {
      method: "DELETE",
    }).then((res) => dispatch(listActions.getAll()));
  };
  const handleFavorite = (item) => {
    toastr.success("added to favorites");
    dispatch(favorite(item));
  };
  return (
    <>
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
            {datas &&
              datas.map((item) => {
                return (
                  <tr>
                    <td>{item.id}</td>
                    <td>{item.companyName}</td>
                    <td>{item.contactName}</td>
                    <td>{item.contactTitle}</td>
                    <td>
                      <button onClick={() => handleClick(item.id)}>
                        Delete
                      </button>
                    </td>
                    <td>
                      <button
                        className="fav"
                        onClick={() => handleFavorite(item)}
                      >
                        Add to Favorite
                      </button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default List;
