import { DocumentIcon } from "@heroicons/react/24/solid";
import Progressbar from "../../charts/progressbar/Progressbar";

const CampaniesOfServices = () => {
  return (
    <div className="p-4 rounded-xl shadow-md h-full dark:bg-darkCard dark:text-darkText">
      <div className="flex align-middle mb-4">
        <DocumentIcon className="w-5 text-gray-400" />
        <h1> شركات الخدمات</h1>
      </div>
      
      <ul>
        <li className="my-1">
          <Progressbar name="العامورية" percent="50" color="bg-purple-400" />
        </li>
        <li className="my-1">
          <Progressbar name="ابداع وطن" percent="20" color="bg-blue-400" />
        </li>
        <li className="my-1">
          <Progressbar name="خيام الجزيره" percent="72" color="bg-orange-400" />
        </li>
        <li className="my-1">
          <Progressbar name="مكوك الدول" percent="37" color="bg-green-400" />
        </li>
        <li className="my-1">
          <Progressbar name="العامورية" percent="86" color="bg-red-400" />
        </li>
        <li className="my-1">
          <Progressbar name="ابداع وطن" percent="20" color="bg-blue-400" />
        </li>
        <li className="my-1">
          <Progressbar name="خيام الجزيره" percent="72" color="bg-orange-400" />
        </li>
        <li className="my-1">
          <Progressbar name="مكوك الدول" percent="37" color="bg-green-400" />
        </li>
      </ul>
      
    </div>
  );
};

export default CampaniesOfServices;
