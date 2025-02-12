import {
  CogIcon,
  MagnifyingGlassIcon,
  MoonIcon,
  SunIcon,
} from "@heroicons/react/24/solid";
import {   useEffect, useState } from "react";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);
   useEffect(()=>{
    if(darkMode)
      document.documentElement.classList.add('dark')
    else
     document.documentElement.classList.remove('dark')
   },[darkMode])
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`w-full bg-slate-600 dark:bg-darkCard  py-4 px-6 flex justify-between `}>
      <h2 className="text-white">Dashboard</h2>
      <div className="flex justify-between w-1/3 border border-gray-300 px-3 py-1 rounded-md">
        <MagnifyingGlassIcon className="w-5 text-white" />
        <input
          placeholder="بحث"
          className="bg-transparent text-left text-white"
        />
      </div>
      <div className="flex justify-between">
        <button>
          <CogIcon className="w-5 text-white mx-2" />
        </button>
        <button onClick={toggleDarkMode}>
          {darkMode ? (
            <SunIcon className="w-5 text-white mx-2" />
          ) : (
            <MoonIcon className="w-5 text-white mx-2" />
          )}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
