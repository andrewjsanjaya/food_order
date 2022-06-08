import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  fetchTransactions,
  deleteTransaction,
} from "../stores/actions/transactionAction";

export default function TransactionTable() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { transactions } = useSelector((state) => state.transaction);

  useEffect(() => {
    dispatch(fetchTransactions());
    // eslint-disable-next-line
  }, []);

  function addHandler(id) {}

  function deleteHandler(id) {
    dispatch(deleteTransaction(id));
  }

  function updateHandler(id) {}

  return (
    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
      <thead className="text-xs text-center text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr>
          <th scope="col" className="px-6 py-3">
            No
          </th>
          <th scope="col" className="px-6 py-3">
            Item
          </th>
          <th scope="col" className="px-6 py-3">
            Order Id
          </th>
          <th scope="col" className="px-6 py-3">
            Table Number
          </th>
          <th scope="col" className="px-6 py-3">
            Actions
          </th>
        </tr>
      </thead>
      <tbody>
        {transactions.map((transaction, index) => (
          <tr
            className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 text-center"
            key={transaction.id}
          >
            <td className="px-6 py-4">{index + 1}</td>
            <td className="px-6 py-4">{transaction.Item.name}</td>
            <td className="px-6 py-4">{transaction.OrderId}</td>
            <td className="px-6 py-4">{transaction.tableNumber}</td>
            <td className="px-6 py-4">
              <button
                className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow mr-5 w-15"
                onClick={() => updateHandler(transaction.id)}
              >
                Edit
              </button>
              <button
                className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
                onClick={() => deleteHandler(transaction.id)}
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
