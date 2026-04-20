import React from "react";
import useRegister from "../hooks/useRegister";
import { AnimatePresence, motion } from "motion/react";
function CVFileInput({ setUserData, userData }) {
  return (
    userData.role === "instructor" && (
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: 1, height: "auto" }}
        exit={{ opacity: 0, height: 0 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        className="mt-4"
      >
        <div className="mb-4">
          <label className="text-xs font-medium text-[#AAAAAA] block mb-2">
            السيرة الذاتية
          </label>

          {/* Upload Box */}
          <div
            className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-lg p-3 
                                       hover:border-[#1D2E9E] transition-all duration-200"
          >
            <label className="flex flex-col items-center justify-center cursor-pointer text-center">
              <span className="text-sm text-gray-300 mb-1">
                اضغط لرفع الملف
              </span>

              <span className="text-xs text-[#666]">PDF فقط - حد أقصى 5MB</span>

              <input
                type="file"
                accept="application/pdf"
                className="hidden"
                onChange={(e) => {
                  const file = e.target.files[0];
                  if (!file) return;

                  const url = URL.createObjectURL(file);

                  setUserData((old) => ({
                    ...old,
                    cvFile: url,
                  }));
                }}
              />
            </label>
          </div>

          {/* Preview */}
          <AnimatePresence>
            {userData.cvFile && (
              <motion.div
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
                className="mt-3 bg-[#141414] border border-[#2A2A2A] rounded-lg p-2"
              >
                <div className="flex justify-between items-center mb-2">
                  <button
                    onClick={() =>
                      setUserData((old) => ({
                        ...old,
                        cvFile: "",
                      }))
                    }
                    className="cursor-pointer mb-2 text-xs text-red-400 hover:text-red-300"
                  >
                    حذف
                  </button>
                </div>

                <iframe
                  src={userData.cvFile}
                  className="w-full h-40 rounded-md"
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    )
  );
}

export default CVFileInput;
