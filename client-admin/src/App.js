import "./App.css";
import { Route, Routes } from "react-router-dom";

import CompanyPage from "./views/CompanyPage";
import ItemPage from "./views/ItemPage";
import LoginPage from "./views/LoginPage";
import DashboardPage from "./views/DashboardPage";
import ReportPage from "./views/ReportPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<DashboardPage />} />
        <Route path="/companies" element={<CompanyPage />} />
        <Route path="/items" element={<ItemPage />} />
        <Route path="/reports" element={<ReportPage />} />
      </Routes>
    </div>
  );
}

export default App;
