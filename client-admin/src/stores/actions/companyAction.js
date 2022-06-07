import { FETCH_COMPANIES, DETAIL_COMPANY } from "./actionType";
import Swal from "sweetalert2";
import axios from "axios";

export const fetchSuccess = (payload) => {
  return {
    type: FETCH_COMPANIES,
    payload,
  };
};

export const detailSuccess = (payload) => {
  return {
    type: DETAIL_COMPANY,
    payload,
  };
};

export function fetchCompanies() {
  return (dispatch) => {
    axios
      .get("http://localhost:3001/companies")
      .then((data) => {
        dispatch(fetchSuccess(data.data.companies));
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

export const detailCompany = (id) => {
  return (dispatch) => {
    fetch(`http://localhost:3000/companies/${id}`)
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

export const createCompany = (data) => {
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

export const updateCompany = (id, data) => {
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

export const deleteCompany = (id) => {
  return (dispatch) => {
    fetch(`http://localhost:3000/companies/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        if (data.statusCode !== 200) {
          throw data.error.message;
        }
        Swal.fire({
          icon: "success",
          title: "Company Deleted",
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
