// import React from 'react';

import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

const Users = () => {
  const loadedUsers = useLoaderData();
  const [users,setUser] = useState(loadedUsers)
  
  const handleDelete = (_id) => {
    console.log("DELETE", _id);
    fetch(`http://localhost:5000/users/${_id}`, {
      method: "DELETE"
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount > 0) {
         alert("Successfully deleted one document.");
        }
        const remaining = users.filter(user => user._id !== _id)
        setUser(remaining)
        //  else {
        //   console.log("No documents matched the query. Deleted 0 documents.");
        // }
      });
  };

  return (
    <div>
      <h1>Data: {users.length}</h1>
      <div>
        {users.map((user) => (
          <p key={user._id}>
            {user.name} : {user.email}{" "}
            <Link to={`/update/${user._id}`}><button>Update</button></Link>
            <button onClick={() => handleDelete(user._id)}>X</button>
          </p>
        ))}
      </div>
    </div>
  );
};

export default Users;
