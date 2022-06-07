import ReportTable from "../components/ReportTable";
// import NavigationBar from "../components/NavigationBar";

export default function ReportPage() {
  return (
    <div className="mb-10">
      {/* <NavigationBar /> */}
      <div className="container flex overflow-x-auto shadow-md justify-center mx-auto">
        <ReportTable />
      </div>
    </div>
  );
}
