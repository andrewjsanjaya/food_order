import ItemTable from "../components/ItemTable";
// import NavigationBar from "../components/NavigationBar";

export default function ItemPage() {
  return (
    <div className="mb-10">
      {/* <NavigationBar /> */}
      <div className="container flex overflow-x-auto shadow-md justify-center mx-auto">
        <ItemTable />
      </div>
    </div>
  );
}
