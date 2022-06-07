import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchItems } from "../stores/actions/itemAction";

export default function ItemTable() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { items } = useSelector((state) => state.item);

  useEffect(() => {
    dispatch(fetchItems());
    // eslint-disable-next-line
  }, []);

  function addHandler(id) {}

  function deleteHandler(id) {}

  function updateHandler(id) {}

  return (
    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
      <thead className="text-xs text-center text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr>
          <th scope="col" className="px-6 py-3">
            No
          </th>
          <th scope="col" className="px-6 py-3">
            Name
          </th>
          <th scope="col" className="px-6 py-3">
            Status
          </th>
          <th scope="col" className="px-6 py-3">
            Company
          </th>
          <th scope="col" className="px-6 py-3">
            Actions
          </th>
        </tr>
      </thead>
      <tbody>
        {items.map((item, index) => (
          <tr
            className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 text-center"
            key={item.id}
          >
            <td className="px-6 py-4">{index + 1}</td>
            <td className="px-6 py-4">{item.name}</td>
            <td className="px-6 py-4">{item.status}</td>
            <td className="px-6 py-4">{item.Company.name}</td>
            <td className="px-6 py-4">
              <button
                className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow mr-5 w-15"
                onClick={() => updateHandler(item.id)}
              >
                Edit
              </button>
              <button
                className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
                onClick={() => deleteHandler(item.id)}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
