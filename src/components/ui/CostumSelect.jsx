import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const options = [
  { label: "طالب", value: "student" },
  { label: "مدرس", value: "instructor" },
];

export default function CustomSelect({ value, onChange }) {
  const [open, setOpen] = useState(false);

  const selected = options.find((o) => o.value === value);

  return (
    <div className="mb-4 relative">
      <label className="text-xs font-medium text-[#AAAAAA] block mb-2">
        نوع الحساب
      </label>

      {/* Button */}
      <div
        onClick={() => setOpen(!open)}
        className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-lg px-4 py-2 
        text-sm text-gray-200 cursor-pointer flex justify-between items-center
        hover:border-[#1D2E9E] transition-all duration-200"
      >
        <span>{selected?.label}</span>
        <span className="text-xs text-gray-400">▼</span>
      </div>

      {/* Dropdown */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className="absolute w-full mt-2 bg-[#141414] border border-[#2A2A2A] 
            rounded-lg shadow-lg overflow-hidden z-50"
          >
            {options.map((item) => (
              <div
                key={item.value}
                onClick={() => {
                  onChange(item.value);
                  setOpen(false);
                }}
                className="px-4 py-2 text-sm text-gray-300 cursor-pointer 
                hover:bg-[#1D2E9E]/20 transition-all duration-150"
              >
                {item.label}
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
