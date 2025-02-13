import { Outlet } from "react-router";
import Sidebar from "../../components/sidebar/Sidebar";

const Main = () => {
  return (
    <div className="px-10 py-5">
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
