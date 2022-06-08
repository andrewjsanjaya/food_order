import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Auth, AuthLogin } from "./components/RequireAuth";

import CompanyPage from "./views/CompanyPage";
import ItemPage from "./views/ItemPage";
import LoginPage from "./views/LoginPage";
import DashboardPage from "./views/DashboardPage";
import ReportPage from "./views/ReportPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          path="/login"
          element={
            <AuthLogin>
              <LoginPage />
            </AuthLogin>
          }
        />
        <Route
          path="/"
          element={
            <Auth>
              <DashboardPage />
            </Auth>
          }
        />
        <Route
          path="/companies"
          element={
            <Auth>
              <CompanyPage />
            </Auth>
          }
        />
        <Route
          path="/items"
          element={
            <Auth>
              <ItemPage />
            </Auth>
          }
        />
        <Route
          path="/reports"
          element={
            <Auth>
              <ReportPage />
            </Auth>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
