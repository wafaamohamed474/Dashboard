 

import { InformationCircleIcon } from "@heroicons/react/24/outline";
import { PaperClipIcon } from "@heroicons/react/24/solid";
import { useForm } from "react-hook-form";

const Support = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,  
  } = useForm();

 

  const handleFileChange = (event) => {
    const file = event.target.files[0];  
    if (file) {
      setValue("file", file);  
    }
  };

  const triggerFileInput = () => {
    document.getElementById("fileInput").click();  
  };

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
        <h1 className="text-yellow-800 text-xl mb-1 font-medium">نحن في انتظاركم</h1>
        <p className="text-gray-500">
          لا تتردد في ترك رسالة لنا بخصوص مشكلتك او اقتراحك و سوف يقوم فريق
          الدعم بالرد عليك
        </p>
      </div>
      <div className="px-4 py-6 rounded-3xl shadow-lg ">
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block font-semibold mb-1 text-gray-500">الاسم</label>
            <input
              type="text"
              {...register("name", { required: "هذا الحقل مطلوب" })}
              className="w-full p-2 border-2 rounded focus:border-yellow-800 "
            />
            {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
          </div>

          <div className="mb-4">
            <label className="block font-semibold mb-1 text-gray-500">الايميل</label>
            <input
              type="email"
              {...register("email", {
                required: "هذا الحقل مطلوب",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Invalid email format",
                },
              })}
              className="w-full p-2 border-2 rounded focus:border-yellow-800"
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
          </div>

          <div className="mb-4">
            <label className="block font-semibold mb-1 text-gray-500">الرسالة</label>
            <textarea
              {...register("message", { required: "هذا الحقل مطلوب" })}
              className="w-full p-2 border-2 rounded outline-none focus:border-yellow-800 h-40"
              placeholder="اكتب نص"
            ></textarea>
            {errors.message && <p className="text-red-500 text-sm">{errors.message.message}</p>}
          </div>

          
          <input
            type="file"
            id="fileInput"
            className="hidden"
            onChange={handleFileChange}
          />

          <div className="flex justify-between">
            <button
              type="button"
              onClick={triggerFileInput}
              className="flex items-center bg-green-400 text-white py-1 px-8 rounded-lg hover:bg-green-600"
            >
              <PaperClipIcon className="w-5 mr-2" />
              <span>تحميل ملف</span>
            </button>
            <button
              type="submit"
              className="bg-yellow-500 text-white py-1 px-14 rounded-lg hover:bg-yellow-600"
            >
              ارسال
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Support;

