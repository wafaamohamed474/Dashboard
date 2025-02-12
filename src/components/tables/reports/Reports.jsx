import {
  DocumentIcon,
  EllipsisHorizontalIcon,
} from "@heroicons/react/24/solid";
 

const Reports = () => {
  return (
    <div className="p-4 rounded-xl shadow-md h-full dark:bg-darkCard dark:text-darkText">
      <div className="flex align-middle mb-4">
        <DocumentIcon className="w-5 text-gray-400" />
        <h1>تقارير</h1>
      </div>
      <div>
        <ul className="flex flex-col h-36">
          <li className=" flex flex-1 justify-between items-center">
            <span>مشكة بكهرباء مخيم 012</span>
            <EllipsisHorizontalIcon className="w-5" />
          </li>
          <li className=" flex flex-1 justify-between items-center">
            <span>مشكة بكهرباء مخيم 012</span>
            <EllipsisHorizontalIcon className="w-5" />
          </li>
          <li className=" flex flex-1 justify-between items-center">
            <span>مشكة بكهرباء مخيم 012</span>
            <EllipsisHorizontalIcon className="w-5" />
          </li>
          
        </ul>
      </div>
    </div>
  );
};

export default Reports;
