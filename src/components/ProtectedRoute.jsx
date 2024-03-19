import React, { useState, useEffect } from "react";
import AxiosService from "../utils/AxiosService";
import ApiRoutes from "../utils/ApiRoutes";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { SetUser } from "../redux/userSlice";

function ProtectedRoute({ children }) {
    const {user}=useSelector(state=>state.user)
  const navigate = useNavigate();
  const [render, setRender] = useState(false);
  const dispatch=useDispatch()
  const getUserData = async () => {
    try {
      let res = await AxiosService.post(
        ApiRoutes.GET_USER.path,
        {},
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      if (res.data.success) {
        dispatch(SetUser(res.data.data))
      } else {
        alert(res.data.message);
      }
      setRender(true);
    } catch (error) {
      localStorage.removeItem("token");
      setRender(true);
      console.log(error);
      navigate("/login");
    }
  };
  useEffect(() => {
    if (user === null) {
      getUserData();
    }
  });
  return <div>{render ? children : <div>Loading...</div>}</div>;
}

export default ProtectedRoute;
