import CampsMap from "../../components/charts/campsMap/CampsMap";
import PerformanceRates from "../../components/charts/performanceRates/PerformanceRates";
import ResponseRate from "../../components/charts/responseRate/ResponseRate";
import StatusOfCamps from "../../components/charts/statusOfCamps/StatusOfCamps";
import CampaniesOfServices from "../../components/tables/companiesOfServieces/CampaniesOfServices";
import Reports from "../../components/tables/reports/Reports";

const Dashboard = () => {
  return (
    <>
      <PerformanceRates />
      <div className="grid grid-cols-12 gap-4 my-5">
        <div className="col-span-8">
          <CampsMap />
        </div>
        <div className="col-span-4">
          <StatusOfCamps />
        </div>
      </div>
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-4 h-full">
          <Reports />
        </div>
        <div className="col-span-4 h-full">
          <CampaniesOfServices />
        </div>
        <div className="col-span-4 h-full">
          <ResponseRate />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
