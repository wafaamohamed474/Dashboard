import { PaperClipIcon } from "@heroicons/react/24/outline";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as yup from "yup";


const SupportForm = () => {
    
  const initialValues = {
    name: "",
    email: "",
    message: "",
    file: null,
  };

  const onSubmit = (values, { resetForm }) => {
    console.log("formik values ", values);
    resetForm();
  };

  const validationSchema = yup.object({
    name: yup.string().required("هذا الحقل مطلوب"),
    email: yup
      .string()
      .matches(
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        "ايميل غير صالح"
      )
      .required("هذا الحقل مطلوب"),
    message: yup.string().required("هذا الحقل مطلوب"),
  });

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({ values, setFieldValue, isSubmitting }) => (
        <Form>
          {/* Name Field */}
          <div className="mb-4 form-control">
            <label
              htmlFor="name"
              className="block font-semibold mb-1 text-gray-500"
            >
              الاسم
            </label>

            <Field
              type="text"
              id="name"
              name="name"
              className="w-full p-2 border-2 rounded focus:border-yellow-800"
            />
            <ErrorMessage
              name="name"
              component="span"
              className="text-red-600 text-sm"
            />
          </div>

          {/* Email Field */}
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block font-semibold mb-1 text-gray-500"
            >
              الايميل
            </label>

            <Field
              type="email"
              id="email"
              name="email"
              className="w-full p-2 border-2 rounded focus:border-yellow-800"
            />
            <ErrorMessage
              name="email"
              component="span"
              className="text-red-600 text-sm"
            />
          </div>

          {/* Message Field */}
          <div className="mb-4">
            <label
              htmlFor="message"
              className="block font-semibold mb-1 text-gray-500 "
            >
              الرسالة
            </label>

            <Field
              as="textarea"
              id="message"
              name="message"
              className="w-full p-2 border rounded focus:border-yellow-800 outline-none h-32 resize-none"
            />
            <ErrorMessage
              name="message"
              component="span"
              className="text-red-600 text-sm"
            />
          </div>

          <div className="flex justify-between items-center">
            {/* File Upload */}
            <div className=" ">
              <input
                type="file"
                id="fileInput"
                className="hidden"
                name="file"
                onChange={(event) =>
                  setFieldValue("file", event.currentTarget.files[0])
                }
              />

              <button
                type="button"
                className="flex items-center bg-green-400 text-white py-1 px-5 rounded-lg hover:bg-green-600"
                onClick={() => document.getElementById("fileInput").click()}
              >
                <PaperClipIcon className="w-5 ml-3" />
                <span>تحميل ملف</span>
              </button>
              {values.file && (
                <span className="text-gray-600 text-sm">
                  {values.file.name}
                </span>
              )}
            </div>

            {/* submit button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-yellow-500 text-white py-1 px-14 rounded-lg hover:bg-yellow-600"
            >
              {isSubmitting ? "جار الارسال" : "ارسال"}
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default SupportForm;
