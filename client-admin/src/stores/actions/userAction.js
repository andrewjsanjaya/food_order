import { CREATE_USER, LOGIN_USER } from "./actionType";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const createSuccess = (payload) => {
  return {
    type: CREATE_USER,
    payload,
  };
};

export const loginSuccess = (payload) => {
  return {
    type: LOGIN_USER,
    payload,
  };
};

export const createUser = (data) => {
  // const navigate = useNavigate();
  return (dispatch) => {
    axios
      .post("http://localhost:3001/users/register", data)
      .then((data) => {
        if (data.statusCode !== 201) {
          throw data.error.message[0];
        }
        // navigate("/login");
        dispatch(createSuccess(data.data));
        Swal.fire({
          icon: "success",
          title: "Register Success",
        });
      })
      .catch((err) => {
        Swal.fire({
          icon: "warning",
          title: "Error",
          text: err,
        });
      });
  };
};

export const loginUser = (data) => {
  console.log(data, "<<<");
  return (dispatch) => {
    axios
      .post("http://localhost:3001/users/login", data)
      .then((data) => {
        localStorage.id = data.data.id;
        localStorage.access_token = data.data.access_token;
        localStorage.username = data.data.name;
        localStorage.email = data.data.email;
        dispatch(loginSuccess(data.data));
        Swal.fire({
          icon: "success",
          title: "Login Success",
        });
      })
      .catch((err) => {
        Swal.fire({
          icon: "warning",
          title: "Error",
          text: err,
        });
      });
  };
};
