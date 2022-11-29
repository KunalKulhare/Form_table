import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddForm() {
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [fullname, setFullName] = useState("");
  const navigate = useNavigate();

  const addForm = async () => {
    console.log(age, fullname, address, email);
    let result = await fetch("https://retoolapi.dev/PJiRf5/data", {
      method: "Post",
      body: JSON.stringify({
        age,
        email,
        address,
        fullname,
      }),
      headers: {
        "content-type": "Application/json",
      },
    });
    result = await result.json();
    console.log(result);
    navigate("/")
  };

  return (
    <>
      <div className="m-auto position-absolute top-0 start-50 translate-middle-x w-75 mt-5 ms-5 p-5">
      <h1 className="mb-3">Add Item Product </h1>
        <div className="mb-3">
          <label htmlFor="age" className="col-form-label-lg fw-bold">
            Age
          </label>
          <div className="input-group input-group-lg ">
            <input
              type="text"
              className="form-control"
              id="age"
              aria-label="Text input"
              placeholder="Enter  Age"
              value={age}
              onChange={(e) => {
                setAge(e.target.value);
              }}
            />
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="col-form-label-lg fw-bold">
            Email
          </label>
          <div className="input-group input-group-lg ">
            <input
              type="text"
              className="form-control"
              id="email"
              aria-label="Text input"
              placeholder="Enter  Email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="address" className="col-form-label-lg fw-bold">
            Address
          </label>
          <div className="input-group input-group-lg ">
            <input
              type="text"
              className="form-control"
              id="address"
              aria-label="Text input"
              placeholder="Enter  Address"
              value={address}
              onChange={(e) => {
                setAddress(e.target.value);
              }}
            />
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="fullname" className="col-form-label-lg fw-bold">
            Fullname
          </label>
          <div className="input-group input-group-lg ">
            <input
              type="text"
              className="form-control"
              id="fullname"
              aria-label="Text input"
              placeholder="Enter  Fullname"
              value={fullname}
              onChange={(e) => {
                setFullName(e.target.value);
              }}
            />
          </div>
        </div>
        <button type="button" className="btn btn-dark" onClick={addForm}>
          Add Item
        </button>
      </div>
    </>
  );
}

export default AddForm;
