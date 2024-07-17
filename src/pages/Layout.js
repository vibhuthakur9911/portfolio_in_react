import { Outlet, Link } from "react-router-dom";
import SideBar from "../utils/SideBar";
import Footer from '../utils/Footer'
// import MainContent from "../utils/MainContent";

const Layout = () => {
  return (
    <>
      <SideBar />
      {/* <MainContent /> */}
      <div className="mainContent">
        <Outlet />
        <Footer />
      </div>
    </>
  );
};

export default Layout;
