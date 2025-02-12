const Progressbar = ({ percent, name, color }) => {
  return (
    <div className="flex justify-between items-center">
      <div className="flex justify-between items-center">
        <div className={`w-3 h-3 rounded-full ${color}`}></div>
        <span className="text-black text-sm mr-1 dark:text-darkText">{name}</span>
      </div>
      <div className="flex justify-between  items-center w-1/2">
        <div className="bg-gray-200 h-1 w-full rounded-md relative overflow-hidden">
          <div className={`${color} h-full  absolute left-0 top-0`} style={{ width: `${percent}%` }}></div>
        </div>
        <span className="text-sm mr-1">{percent}%</span>
      </div>
    </div>
  );
};

export default Progressbar;
