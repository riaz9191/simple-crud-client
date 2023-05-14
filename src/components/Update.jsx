// import React from 'react';

import { useLoaderData } from "react-router-dom";

const Update = () => {
  const loadedUsers = useLoaderData();
  console.log(loadedUsers);
  const handleUpdate = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const updatedUser = { name, email };
    console.log(name, email);
    fetch(`http://localhost:5000/users/${loadedUsers._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedUser),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if(data.modifiedCount >0) {
            alert('Modified successfully')
        }
      });
  };
  return (
    <div>
      <h3>info of {loadedUsers.name}</h3>

      <form action="" onSubmit={handleUpdate}>
        <input type="text" name="name" id="" defaultValue={loadedUsers?.name} />{" "}
        <br />
        <input
          type="text"
          name="email"
          id=""
          defaultValue={loadedUsers?.email}
        />{" "}
        <br />
        <input type="submit" name="" id="" />
      </form>
    </div>
  );
};

export default Update;
