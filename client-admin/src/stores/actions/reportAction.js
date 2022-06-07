import { FETCH_REPORTS } from "./actionType";
import Swal from "sweetalert2";
import axios from "axios";

export const fetchSuccess = (payload) => {
  return {
    type: FETCH_REPORTS,
    payload,
  };
};

export function fetchReports() {
  return (dispatch) => {
    axios
      .get("http://localhost:3001/reports")
      .then((data) => {
        dispatch(fetchSuccess(data.data.reports));
      })
      .catch((err) => {
        Swal.fire({
          icon: "warning",
          title: "Error",
          text: err,
        });
      });
  };
}
