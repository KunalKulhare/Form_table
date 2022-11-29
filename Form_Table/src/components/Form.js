import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import { Link } from "react-router-dom";

function Form() {
  const [form, setForm] = useState([]);

  useEffect(() => {
    getForms();
  }, []);

  const getForms = async () => {
    let result = await fetch("https://retoolapi.dev/PJiRf5/data");
    result = await result.json();
    setForm(result);
  };
  const deleteItem = async (id) => {
    console.log(id);
    let result = await fetch(`https://retoolapi.dev/PJiRf5/data/${id}`, {
      method: "Delete",
    });
    result = await result.json();
  };

  return (
    <>
      <div className="m-auto position-absolute top-0 start-50 translate-middle-x w-75 mt-5 ms-5 p-5">
        <h1>Products</h1>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>S.No</th>
              <th>Age</th>
              <th>Email</th>
              <th>Address</th>
              <th>Full Name</th>
              <th>Operation</th>
            </tr>
          </thead>
          <tbody>
            {form.map((item, index) => (
              <tr key={item.id}>
                <td>{index + 1}</td>
                <td>{item.age}</td>
                <td>{item.email}</td>
                <td>{item.address}</td>
                <td>{item.fullName}</td>
                <td>
                  <button
                    className="btn btn-secondary me-md-2"
                    onClick={() => {
                      const confirmBox = window.confirm(
                        "Do you really want to Delete"
                      );
                      if (confirmBox === true) {
                        deleteItem(item.id);
                        window.location.reload();
                      }
                    }}
                  >
                    Delete
                  </button>
                  <Link
                    to={"/update/" + item.id}
                    className="btn btn-secondary gap-2"
                  >
                    Update
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </>
  );
}

export default Form;
