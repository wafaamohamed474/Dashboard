import { InformationCircleIcon } from "@heroicons/react/24/outline";
import SupportForm from "../../components/supportForm/SupportForm";

const Support = () => {
  return (
    <div className=" ">
      <div className="w-full relative">
        <div className="flex items-center">
          <InformationCircleIcon className="w-8 text-lg text-yellow-800 ml-2" />
          <h1 className="font-bold text-xl">التواصل و الدعم</h1>
        </div>
        <div className="bg-orange-200 w-full h-0.5 mt-3"></div>
      </div>
      <div className="my-4">
        <h1 className="text-yellow-800 text-xl mb-1 font-medium">
          نحن في انتظاركم
        </h1>
        <p className="text-gray-500">
          لا تتردد في ترك رسالة لنا بخصوص مشكلتك او اقتراحك و سوف يقوم فريق
          الدعم بالرد عليك
        </p>
      </div>
      <div className="px-4 py-6 rounded-3xl shadow-lg ">
        <SupportForm />
      </div>
    </div>
  );
};

export default Support;
