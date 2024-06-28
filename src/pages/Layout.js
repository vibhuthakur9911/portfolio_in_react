import { Outlet, Link } from "react-router-dom";
import SideBar from "../utils/SideBar";
// import MainContent from "../utils/MainContent";

const Layout = () => {
  return (
    <>
      <SideBar />
      {/* <MainContent /> */}
      <Outlet />
    </>
  );
};

export default Layout;
