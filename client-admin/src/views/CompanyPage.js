import CompanyTable from "../components/CompanyTable";
// import NavigationBar from "../components/NavigationBar";

export default function CompanyPage() {
  return (
    <div className="mb-10">
      {/* <NavigationBar /> */}
      <div className="container flex overflow-x-auto shadow-md justify-center mx-auto">
        <CompanyTable />
      </div>
    </div>
  );
}
