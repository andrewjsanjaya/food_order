import ReportTable from "../components/ReportTable";
import SideBar from "../components/SideBar";

export default function ReportPage() {
  return (
    <div className="flex">
      <div>
        <SideBar />
      </div>
      <div className="container px-10 overflow-x-auto shadow-md justify-center flex-col">
        <h1 className="mt-10 uppercase font-bold text-3xl">Report</h1>
        <div className="items-center mt-20">
          <ReportTable />
        </div>
      </div>
    </div>
  );
}
