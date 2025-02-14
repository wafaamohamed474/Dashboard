import { PaperClipIcon } from "@heroicons/react/24/outline";
import { useFormik } from "formik";
import * as yup from "yup";
const SupportForm = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
      file: null,
    },

    onSubmit: (values, { resetForm }) => {
      console.log("formik values ", values);
      resetForm();
    },

    validationSchema: yup.object({
      name: yup.string().required("هذا الحقل مطلوب"),
      email: yup
        .string()
        .matches(
          /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
          "ايميل غير صالح"
        )
        .required("هذا الحقل مطلوب"),
      message: yup.string().required("هذا الحقل مطلوب"),
    }),
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      {/* Name Field */}
      <div className="mb-4 form-control">
        <label
          htmlFor="name"
          className="block font-semibold mb-1 text-gray-500"
        >
          الاسم
        </label>
        <input
          type="text"
          id="name"
          name="name"
          className="w-full p-2 border-2 rounded focus:border-yellow-800"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.name}
        />
        {formik.errors.name && formik.touched.name ? (
          <span className="text-red-800">{formik.errors.name}</span>
        ) : null}
      </div>

      {/* Email Field */}
      <div className="mb-4">
        <label
          htmlFor="email"
          className="block font-semibold mb-1 text-gray-500"
        >
          الايميل
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="w-full p-2 border-2 rounded focus:border-yellow-800"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        />
        {formik.errors.email && formik.touched.email ? (
          <span className="text-red-800">{formik.errors.email}</span>
        ) : null}
      </div>

      {/* Message Field */}
      <div className="mb-4">
        <label
          htmlFor="message"
          className="block font-semibold mb-1 text-gray-500 "
        >
          الرسالة
        </label>
        <textarea
          id="message"
          name="message"
          className="w-full p-2 border-2 rounded outline-none focus:border-yellow-800 h-40"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.message}
        ></textarea>
        {formik.errors.message && formik.touched.message ? (
          <span className="text-red-800">{formik.errors.message}</span>
        ) : null}
      </div>

      <div className="flex justify-between items-center">
        {/* File Upload */}
        <div className=" ">
          <input
            type="file"
            id="fileInput"
            className="hidden"
            name="file"
            onChange={(event) => {
              formik.setFieldValue("file", event.currentTarget.files[0]);
            }}
          />
          <button
            type="button"
            className="flex items-center bg-green-400 text-white py-1 px-5 rounded-lg hover:bg-green-600"
            onClick={() => document.getElementById("fileInput").click()}
          >
            <PaperClipIcon className="w-5 ml-3" />
            <span>تحميل ملف</span>
          </button>
          {formik.values.file && (
            <span className="text-gray-600 text-sm">{formik.values.file.name}</span>
          )}
        </div>

        {/* submit button */}
        <button
          type="submit"
          className="bg-yellow-500 text-white py-1 px-14 rounded-lg hover:bg-yellow-600"
        >
          ارسال
        </button>
      </div>
    </form>
  );
};

export default SupportForm;
