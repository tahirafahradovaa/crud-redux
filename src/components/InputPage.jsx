import axios from "axios";
import toastr from "toastr";
import React, { useEffect, useState } from "react";

function InputPage() {
  const [newEntry, setNewEntry] = useState({
    companyName: "",
    contactName: "",
    contactTitle: "",
    something: "",
  });

  const handleClick = () => {
    axios
      .post("https://northwind.vercel.app/api/customers", { ...newEntry })
      .then((data) => console.log(data))
      .then(toastr.success("NEW CUSTOMER ADDED"));
  };

  return (
    <div className="inputCont">
      <input
        onChange={(e) =>
          setNewEntry({
            ...newEntry,
            companyName: e.target.value,
          })
        }
        type="text"
        placeholder="enter company name"
      />
      <input
        onChange={(e) =>
          setNewEntry({
            ...newEntry,
            contactTitle: e.target.value,
          })
        }
        type="text"
        placeholder="enter contact Title"
      />
      <input
        onChange={(e) =>
          setNewEntry({
            ...newEntry,
            contactName: e.target.value,
          })
        }
        type="text"
        placeholder="enter contact name"
      />
      <input
        onChange={(e) =>
          setNewEntry({
            ...newEntry,
            something: e.target.value,
          })
        }
        type="text"
        placeholder="enter something"
      />
      <button onClick={handleClick} className="fav">
        Add New Customer
      </button>
    </div>
  );
}

export default InputPage;
