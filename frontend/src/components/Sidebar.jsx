import { useState } from "react";
import { FaBars, FaTimes, FaFileAlt, FaHome } from "react-icons/fa";

const Sidebar = ({ setActiveSection, setActiveDocType, activeSection, activeDocType }) => {
  const [collapsed, setCollapsed] = useState(true);

  const handleDocumentClick = (docType) => {
    setActiveSection("documents");
    setActiveDocType(docType);
  };

  const getButtonClasses = (section, docType = null) => {
    const baseClasses = "flex items-center gap-2 py-2 px-3 rounded-md transition-colors";
    
    if (section === "home") {
      return `${baseClasses} ${
        activeSection === "home"
          ? "bg-blue-600 text-white"
          : "text-white hover:bg-gray-800"
      }`;
    }

    return `${baseClasses} ${
      activeSection === "documents" && activeDocType === docType
        ? "bg-blue-600 text-white"
        : "text-white hover:bg-gray-800"
    }`;
  };

  return (
    <aside className={`bg-gray-900 text-white p-4 transition-all ${collapsed ? "w-16" : "w-64"}`}>
      <button onClick={() => setCollapsed(!collapsed)} className="text-xl mb-4">
        {collapsed ? <FaBars /> : <FaTimes />}
      </button>

      <nav className="flex flex-col gap-4">
        <button 
          onClick={() => setActiveSection("home")} 
          className={getButtonClasses("home")}
        >
          <FaHome /> {!collapsed && "Dashboard"}
        </button>
        <button 
          onClick={() => handleDocumentClick("resumes")} 
          className={getButtonClasses("documents", "resumes")}
        >
          <FaFileAlt /> {!collapsed && "Resumes"}
        </button>
        <button 
          onClick={() => handleDocumentClick("cvs")} 
          className={getButtonClasses("documents", "cvs")}
        >
          <FaFileAlt /> {!collapsed && "CVs"}
        </button>
        <button 
          onClick={() => handleDocumentClick("coverletters")} 
          className={getButtonClasses("documents", "coverletters")}
        >
          <FaFileAlt /> {!collapsed && "Cover Letters"}
        </button>
      </nav>
    </aside>
  );
};

export default Sidebar;
