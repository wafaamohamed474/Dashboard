import { Bars3Icon, DocumentTextIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import SidebarItem from "../sidebarItem/SidebarItem";
import { BuildingOffice2Icon, ChatBubbleLeftIcon, HomeIcon, MapIcon, PhoneIcon, UserGroupIcon } from "@heroicons/react/24/solid";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div
      className={`h-3/4 sidebar  rounded-xl p-4 shadow-lg  w-64 dark:bg-darkCard    transition-transform ${
        isOpen ? ` translate-x-0 ` : `translate-x-56`
      }`}
    >
      <div className=" flex justify-between mb-4">
        <button
          className="h-8 w-8 bg-yellow-500 dark:bg-darkBackground p-1 rounded-md "
          onClick={() => setIsOpen(!isOpen)}
        >
          <XMarkIcon className="text-white" />
        </button>
        <button
          className={`h-8 w-8 bg-yellow-500 dark:bg-darkBackground p-1 rounded-md ${
            isOpen && `hidden`
          }`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <Bars3Icon className="text-white" />
        </button>
      </div>
      <div>
        <ul>
          <SidebarItem name="الصفحة الرئيسية" icon={<HomeIcon className="text-white p-1" />}/>
          <SidebarItem name="المخيمات" icon={<MapIcon className="text-white p-1" />}/>
          <SidebarItem name="شركات الخدمات" icon={<BuildingOffice2Icon className="text-white p-1" />}/>
          <SidebarItem name="فرق العمل" icon={<UserGroupIcon className="text-white p-1" />}/>
          <SidebarItem name="التقارير" icon={<DocumentTextIcon className="text-white p-1" />}/>
          <SidebarItem name= "محاداثات" icon={<ChatBubbleLeftIcon className="text-white p-1" />}/>
          <SidebarItem name="التواصل والدعم" icon={<PhoneIcon className="text-white p-1" />}/>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
