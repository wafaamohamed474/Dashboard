const PerformanceCard = ({ name, number, icon, color }) => {
  return (
    <div
      className="flex mx-2 p-4 bg-white border-none
     shadow-lg rounded-2xl border border-gray-200 w-1/4 dark:bg-darkCard
     "
    >
      <div className="p-2 rounded-full h-fit">{icon}</div>

      <div className="mr-5">
        <h6 className="ml-3 text-base dark:text-darkText font-semibold text-gray-700">{name}</h6>
        <p className={color}>
          <span className="font-bold">{number}</span>مهمة
        </p>
      </div>
    </div>
  );
};

export default PerformanceCard;
