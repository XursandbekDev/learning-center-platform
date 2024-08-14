import React from 'react';
import { IoMdClose } from "react-icons/io";//close 
import { Link } from 'react-router-dom';
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { MdOutlineSettings } from "react-icons/md";
type SidebarProps = {
    isOpen: boolean;
    toggleSidebar: () => void;
};
const sidebarItems = [
    {
        title: 'Dashboard',
        icon: (
            <MdOutlineSpaceDashboard />
        ),
        href: '#',
    },

    {
        title: 'Settings',
        icon: (
            <MdOutlineSettings />
        ),
        href: '#',
    },
    {
        title: 'Settings',
        icon: (
            <MdOutlineSettings />
        ),
        href: '#',
    },
    {
        title: 'Settings',
        icon: (
            <MdOutlineSettings />
        ),
        href: '#',
    },
    {
        title: 'Settings',
        icon: (
            <MdOutlineSettings />
        ),
        href: '#',
    },
    // Add more items here
];


const Sidebar: React.FC<SidebarProps> = ({ isOpen, toggleSidebar }) => {
    return (
        <aside
            id="logo-sidebar"
            className={`fixed top-0 left-0 z-0 w-64 h-screen transition-transform duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-full'
                } sm:translate-x-0`}
            aria-label="Sidebar"
        >
            <div className="h-full px-3 py-4 overflow-y-auto bg-blue-900 dark:bg-gray-800">
                <div className="flex justify-between items-center mb-5">
                    <a href="#" className="flex items-center ps-2.5">
                        <img
                            src="https://flowbite.com/docs/images/logo.svg"
                            className="h-6 me-3 sm:h-7"
                            alt="Flowbite Logo"
                        />
                        <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
                            Flowbite
                        </span>
                    </a>
                    <button
                        onClick={toggleSidebar}
                        className="text-gray-500 hover:bg-gray-100 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 sm:hidden dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                    >
                        <span className="sr-only">Close sidebar</span>
                        <IoMdClose className='text-white text-xl ' />
                    </button>
                </div>
                <ul className="space-y-2 font-medium ">
                    {sidebarItems.map((item, index) => (
                        <li key={index}>
                            <Link
                                to={item.href}
                                className="flex items-center p-2 text-white rounded-lg dark:text-white hover:bg-blue-700 dark:hover:bg-gray-700 group"
                            >
                                {item.icon}
                                <span className="ms-3">{item.title}</span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </aside>
    );
};

export default Sidebar;

