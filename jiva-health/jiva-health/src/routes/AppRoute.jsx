import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import DoctorProfile from "../pages/DoctorProfile";
import Doctors from "../pages/Doctors";
import Layout from "../components/Layout";
const AppRoute = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/doctors" element={<Doctors />} />
        <Route path="/doctor/:id" element={<DoctorProfile />} />
      </Routes>
    </Layout>
  );
};

export default AppRoute;
