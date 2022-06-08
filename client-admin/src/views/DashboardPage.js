import SideBar from "../components/SideBar";
import TransactionTable from "../components/TransactionTable";

export default function DashboardPage() {
  return (
    <div className="flex">
      <div>
        <SideBar />
      </div>
      <div className="container px-10 overflow-x-auto shadow-md justify-center flex-col">
        <h1 className="mt-10 uppercase font-bold text-3xl">
          Transaction Table
        </h1>
        <div className="items-center mt-20">
          <div className="flex justify-start mb-2">
            <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
              Add Transaction
            </button>
          </div>
          <TransactionTable />
        </div>
      </div>
    </div>
  );
}
