import { FETCH_ITEMS, DETAIL_ITEM } from "./actionType";
import Swal from "sweetalert2";
import axios from "axios";

export const fetchSuccess = (payload) => {
  return {
    type: FETCH_ITEMS,
    payload,
  };
};

export const detailSuccess = (payload) => {
  return {
    type: DETAIL_ITEM,
    payload,
  };
};

export function fetchItems() {
  return (dispatch) => {
    axios
      .get("http://localhost:3001/items")
      .then((data) => {
        dispatch(fetchSuccess(data.data.items));
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

export const detailItem = (id) => {
  return (dispatch) => {
    fetch(`http://localhost:3000/items/${id}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        if (data.statusCode !== 200) {
          throw data.error.message;
        }
        dispatch(detailSuccess(data.company));
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

export const createItem = (data) => {
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

export const updateItem = (id, data) => {
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

export const deleteItem = (id) => {
  return (dispatch) => {
    axios
      .delete(`http://localhost:3001/items/${id}`)
      .then((data) => {
        dispatch(fetchItems());
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
