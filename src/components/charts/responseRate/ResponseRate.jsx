import { DocumentIcon } from "@heroicons/react/24/solid";
import {  Circle } from "rc-progress";
const ResponseRate = () => {
  return (
    <div className="p-4 rounded-xl shadow-md h-full dark:bg-darkCard dark:text-darkText">
      <div className="flex items-center mb-4">
        <DocumentIcon className="w-5 text-gray-400" />
        <h1>معدل الاستجابه</h1>
      </div>
      <ul>
        <li className="flex items-center mb-4">
          <div className="w-12 h-12 ml-2">
            <Circle
              percent={88}
              strokeWidth={12}
              strokeColor="#000"
              trailColor="#D3D3D3"
              trailWidth={12}
            />
          </div>
          <p>استجابة خلال 24 ساعة</p>
        </li>
        <li className="flex items-center mb-4">
          <div className="w-12 h-12 ml-2">
            <Circle
              percent={70}
              strokeWidth={12}
              strokeColor="#F87171"
              trailColor="#D3D3D3"
              trailWidth={12}
            />
          </div>
          <p>استجابة خلال 48 ساعة</p>
        </li>
        <li className="flex items-center mb-4">
          <div className="w-12 h-12 ml-2">
            <Circle
              percent={22}
              strokeWidth={12}
              strokeColor="#6EE7B7"
              trailColor="#D3D3D3"
              trailWidth={12}
            />
          </div>
          <p>استجابة خلال اكثر 40 ساعة</p>
        </li>
      </ul>
    </div>
  );
};

export default ResponseRate;
