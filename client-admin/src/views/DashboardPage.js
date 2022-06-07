import TransactionTable from "../components/TransactionTable";
// import NavigationBar from "../components/NavigationBar";

export default function DashboardPage() {
  return (
    <div className="mb-10">
      {/* <NavigationBar /> */}
      <div className="container flex overflow-x-auto shadow-md justify-center mx-auto">
        <TransactionTable />
      </div>
    </div>
  );
}
