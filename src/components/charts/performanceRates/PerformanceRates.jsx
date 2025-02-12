import {
  CheckBadgeIcon,
  ExclamationTriangleIcon,
  HomeIcon,
  ListBulletIcon,
} from "@heroicons/react/24/solid";
import PerformanceCard from "../performanceCard/PerformanceCard";

const PerformanceRates = () => {
  return (
    <div>
      <h1>مؤشرات الاداء</h1>
      <div className="flex w-full justify-between align-middle py-4 ">
        <PerformanceCard
          name="مخيمات"
          number="140"
          icon={<HomeIcon className="w-6 text-yellow-500" />}
          color="text-yellow-500"
        />
        <PerformanceCard
          name="اجمالي المهام"
          number="100"
          icon={<ListBulletIcon className="w-6" />}
        />
        <PerformanceCard
          name="مهام منتهيه"
          number="40"
          icon={<CheckBadgeIcon className="w-6 text-green-600" />}
          color="text-green-600"
        />
        <PerformanceCard
          name="مهام متكاثره"
          number="40"
          icon={<ExclamationTriangleIcon className="w-6 text-red-600" />}
          color="text-red-600"
        />
      </div>
    </div>
  );
};

export default PerformanceRates;
