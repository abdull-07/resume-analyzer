import { useState } from "react";
import { FaBars, FaTimes, FaFileAlt, FaHome } from "react-icons/fa";

const Sidebar = ({ setActiveSection }) => {
  const [collapsed, setCollapsed] = useState(true);

  return (
    <aside className={`bg-gray-900 text-white p-4 transition-all ${collapsed ? "w-16" : "w-64"}`}>
      <button onClick={() => setCollapsed(!collapsed)} className="text-xl mb-4">
        {collapsed ? <FaBars /> : <FaTimes />}
      </button>

      <nav className="flex flex-col gap-4">
        <button onClick={() => setActiveSection("home")} className="flex items-center gap-2 hover:text-blue-400">
          <FaHome /> {!collapsed && "Dashboard"}
        </button>
        <button onClick={() => setActiveSection("documents")} className="flex items-center gap-2 hover:text-blue-400">
          <FaFileAlt /> {!collapsed && "My Documents"}
        </button>
      </nav>
    </aside>
  );
};

export default Sidebar;
