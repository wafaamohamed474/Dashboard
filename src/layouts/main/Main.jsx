import { Outlet } from "react-router";
import Sidebar from "../../components/sidebar/Sidebar";

const Main = () => {
  return (
    <div className=" p-5">
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-3 ">
          <Sidebar />
        </div>
        <div className="col-span-9 ">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Main;
