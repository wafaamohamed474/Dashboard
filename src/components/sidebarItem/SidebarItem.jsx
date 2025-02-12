 
import { Link } from 'react-router-dom'

const SidebarItem = ({name , icon}) => {
  return (
    <>
      <Link>
            <li className="flex justify-start items-center mb-5">
              <div className="h-6 w-6 bg-yellow-500 dark:bg-darkBackground  rounded-md">
                {icon}
              </div>
              <span className="mr-3 font-bold text-sm dark:text-darkText">{name}</span>
            </li>
          </Link>
    </>
  )
}

export default SidebarItem
