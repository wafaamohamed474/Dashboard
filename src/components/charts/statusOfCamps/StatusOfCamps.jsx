import { Circle } from "rc-progress";

const StatusOfCamps = () => {
  return (
    <>
      <h1 className="mb-5">حالة المخيمات</h1>
      <div className="p-4 rounded-xl shadow-md h-[80%] dark:bg-darkCard dark:text-darkText">
        <div className="flex justify-center items-center relative h-36">
          <div className="w-32 h-32 my-4 absolute ">
            <Circle
              percent={70}
              strokeWidth={6}
              strokeColor="#F87171"
              trailColor="#D3D3D3"
              trailWidth={6}
            />
          </div>
          <div className="w-24 h-24 my-4 absolute  ">
            <Circle
              percent={60}
              strokeWidth={6}
              strokeColor="#4CAF50"
              trailColor="#D3D3D3"
              trailWidth={6}
            />
          </div>
          <div className="w-16 h-16 my-4 absolute ">
            <Circle
              percent={80}
              strokeWidth={8}
              strokeColor="#3B82F6"
              trailColor="#D3D3D3"
              trailWidth={8}
            />
          </div>
        </div>
        <ul>
          <li className="flex justify-around mb-2">
          <span>جاهز</span>
          <span>50</span>
          </li>
          <li className="flex justify-around mb-2">
          <span>قيد التجهيز</span>
          <span>70</span>
          </li>
          <li className="flex justify-around mb-2">
          <span>متاخر</span>
          <span>20</span>
          </li>
        </ul>

      </div>
    </>
  );
};

export default StatusOfCamps;
