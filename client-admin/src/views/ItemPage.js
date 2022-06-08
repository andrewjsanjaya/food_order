import ItemTable from "../components/ItemTable";
import SideBar from "../components/SideBar";

export default function ItemPage() {
  return (
    <div className="flex">
      <div>
        <SideBar />
      </div>
      <div className="container px-10 overflow-x-auto shadow-md justify-center flex-col">
        <h1 className="mt-10 uppercase font-bold text-3xl">Item Table</h1>
        <div className="items-center mt-20">
          <div className="flex justify-start mb-2">
            <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
              Add Item
            </button>
          </div>
          <ItemTable />
        </div>
      </div>
    </div>
  );
}
