import axios from "axios";
import { useEffect, useState } from "react";

const API = () => {

  const [users, setUsers] = useState([])
  const [userDetail, setUserDetail] = useState({})

  const getUser = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        console.log(res?.data);
        const response = res?.data;
        setUsers(response);
      })
      .catch((err) => console.log(`ini err = ${err}`));
  };

  const getUserDetail = () => {
    axios
      .get("https://reqres.in/api/users/2")
      .then((res) => {
        console.log(res?.data?.data);
        const response = res?.data?.data;
        setUserDetail(response);
      })
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    getUser();
    getUserDetail();
  }, []);

  return (
    <div>
      <div>
        <img src={userDetail?.avatar} alt="avatar" />
        <h4>{userDetail?.first_name}</h4>
      </div>
      {users.map((item) => (
        <div>
          <h4>{item?.email}</h4>
          <h4>{item?.name}</h4>
        </div>
      ))}
    </div>
  )
}

export default API;