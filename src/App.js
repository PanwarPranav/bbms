import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PublicRoute from "./components/Routes/PublicRoute";
// import PublicRoute from "./components/Routes/PublicRoute";
import Donar from "./pages/Dashboard/Donar";
import Hospitals from "./pages/Dashboard/Hospitals";
import OrganisationPage from "./pages/Dashboard/OrganisationPage";
import Consumer from "./pages/Dashboard/Consumer";
import Donation from "./pages/Donation";
import Analytics from "./pages/Dashboard/Analytics";
import DonarList from "./pages/Admin/DonarList";
import HospitalList from "./pages/Admin/HospitalList";
import OrgList from "./pages/Admin/OrgList";
import AdminHome from "./pages/Admin/AdminHome";
function App() {
  return (
    <>
      <ToastContainer />
      <Routes>
        <Route
          path="/admin"
          element={
            <PublicRoute>
              <AdminHome />
            </PublicRoute>
          }
        />
        <Route
          path="/donar-list"
          element={
            <PublicRoute>
              <DonarList />
            </PublicRoute>
          }
        />
        <Route
          path="/hospital-list"
          element={
            <PublicRoute>
              <HospitalList />
            </PublicRoute>
          }
        />
        <Route
          path="/org-list"
          element={
            <PublicRoute>
              <OrgList />
            </PublicRoute>
          }
        />

        <Route
          path="/hospital"
          element={
            <PublicRoute>
              <Hospitals />
            </PublicRoute>
          }
        />
        <Route
          path="/analytics"
          element={
            <PublicRoute>
              <Analytics />
            </PublicRoute>
          }
        />
        <Route
          path="/consumer"
          element={
            <PublicRoute>
              <Consumer />
            </PublicRoute>
          }
        />
        <Route
          path="/donation"
          element={
            <PublicRoute>
              <Donation />
            </PublicRoute>
          }
        />
        <Route
          path="/orgnaisation"
          element={
            <PublicRoute>
              <OrganisationPage />
            </PublicRoute>
          }
        />
        <Route
          path="/donar"
          element={
            <PublicRoute>
              <Donar />
            </PublicRoute>
          }
        />
        <Route
          path="/"
          element={
            <PublicRoute>
              <HomePage />
            </PublicRoute>
          }
        />
        <Route
          path="/login"
          element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          }
        />
        <Route
          path="/register"
          element={
            <PublicRoute>
              <Register />
            </PublicRoute>
          }
        />
      </Routes>
    </>
  );
}

export default App;
