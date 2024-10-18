import { useState, useEffect } from "react";
import axios from "axios";

const UseDetailUsers = (id) => {
  const [users, setUsers] = useState({});

  const getDetailUsers = () => {
    axios
      .get(`https://reqres.in/api/users/${id}`)
      .then((res) => {
        setUsers(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getDetailUsers();
  }, []);

  return {
    users,
    getDetailUsers,
  };
};

export default UseDetailUsers;
