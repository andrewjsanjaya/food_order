import { FETCH_TRANSACTIONS, DETAIL_TRANSACTION } from "./actionType";
import Swal from "sweetalert2";
import axios from "axios";

export const fetchSuccess = (payload) => {
  return {
    type: FETCH_TRANSACTIONS,
    payload,
  };
};

export const detailSuccess = (payload) => {
  return {
    type: DETAIL_TRANSACTION,
    payload,
  };
};

export function fetchTransactions() {
  return (dispatch) => {
    axios
      .get("http://localhost:3001/transactions", {
        headers: { access_token: localStorage.access_token },
      })
      .then((data) => {
        dispatch(fetchSuccess(data.data.transactions));
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

export const detailTransaction = (id) => {
  return (dispatch) => {
    axios
      .get(`http://localhost:3001/transactions/${id}`)
      .then((data) => {
        dispatch(detailSuccess(data.data.transactions));
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

export const createTransaction = (data) => {
  return (dispatch) => {
    fetch("http://localhost:3001/company", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        if (data.statusCode !== 201) {
          throw data.error.message;
        }
        Swal.fire({
          icon: "success",
          title: "Add Company Success",
        });
        dispatch(fetchCompanies());
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

export const updateTransaction = (id, data) => {
  return (dispatch) => {
    fetch(`http://localhost:3001/companies/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        if (data.statusCode !== 201) {
          throw data.error.message;
        }
        Swal.fire({
          icon: "success",
          title: "Company Updated",
        });
        dispatch(fetchCompanies());
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

export const deleteTransaction = (id) => {
  return (dispatch) => {
    axios
      .delete(`http://localhost:3001/transactions/${id}`, {
        headers: { access_token: localStorage.access_token },
      })
      .then((data) => {
        dispatch(fetchTransactions());
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
