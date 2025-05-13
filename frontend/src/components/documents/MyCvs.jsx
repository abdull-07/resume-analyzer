import React from 'react';
import { FaFileAlt, FaDownload, FaTrash, FaEdit } from 'react-icons/fa';
import { FiPlus, FiUpload, FiCpu } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

const MyCVs = () => {
    const navigate = useNavigate();
    const cvs = [
        { id: 1, name: "Academic CV", date: "2025-04-01" },
        { id: 2, name: "Research CV", date: "2025-03-30" },
    ];

    const handleCreateManually = () => {
        navigate('/cv-builder');
    };

    const handleCreateWithAI = () => {
        navigate('/cv-ai-generator');
    };

    const handleUploadCV = () => {
        // Implement upload functionality
        console.log('Upload CV');
    };

    const handleDownload = (id) => {
        console.log(`Downloading CV ${id}`);
    };

    const handleDelete = (id) => {
        console.log(`Deleting CV ${id}`);
    };

    const handleEdit = (id) => {
        console.log(`Editing CV ${id}`);
    };

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
            {/* Creation Options Section */}
            <div className="bg-white rounded-lg shadow p-6">
                <h2 className="text-xl font-semibold mb-6">Create New CV</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <button
                        onClick={handleCreateManually}
                        className="flex flex-col items-center p-6 border-2 border-dashed rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-colors group"
                    >
                        <FiPlus className="w-8 h-8 mb-3 text-gray-400 group-hover:text-blue-500" />
                        <span className="font-medium text-gray-900">Create Manually</span>
                        <span className="text-sm text-gray-500">Build your CV step by step</span>
                    </button>

                    <button
                        onClick={handleCreateWithAI}
                        className="flex flex-col items-center p-6 border-2 border-dashed rounded-lg hover:border-purple-500 hover:bg-purple-50 transition-colors group"
                    >
                        <FiCpu className="w-8 h-8 mb-3 text-gray-400 group-hover:text-purple-500" />
                        <span className="font-medium text-gray-900">Generate with AI</span>
                        <span className="text-sm text-gray-500">Let AI help create your CV</span>
                    </button>

                    <button
                        onClick={handleUploadCV}
                        className="flex flex-col items-center p-6 border-2 border-dashed rounded-lg hover:border-green-500 hover:bg-green-50 transition-colors group"
                    >
                        <FiUpload className="w-8 h-8 mb-3 text-gray-400 group-hover:text-green-500" />
                        <span className="font-medium text-gray-900">Upload Existing</span>
                        <span className="text-sm text-gray-500">Import your existing CV</span>
                    </button>
                </div>
            </div>

            {/* CVs List Section */}
            <div className="bg-white rounded-lg shadow overflow-hidden">
                <div className="flex items-center justify-between p-6 border-b">
                    <h2 className="text-xl font-semibold">My CVs</h2>
                    <select className="border rounded-md p-2 text-sm">
                        <option value="newest">Newest First</option>
                        <option value="oldest">Oldest First</option>
                        <option value="name">Name A-Z</option>
                    </select>
                </div>

                {cvs.length > 0 ? (
                    <ul className="divide-y divide-gray-200">
                        {cvs.map((cv) => (
                            <li key={cv.id} className="p-4 hover:bg-gray-50 transition-colors">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center">
                                        <FaFileAlt className="w-5 h-5 mr-3 text-green-500" />
                                        <div>
                                            <h3 className="text-sm font-medium">{cv.name}</h3>
                                            <p className="text-xs text-gray-500">Last modified: {cv.date}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <button onClick={() => handleEdit(cv.id)} className="p-2 text-gray-600 hover:text-blue-500">
                                            <FaEdit className="w-4 h-4" />
                                        </button>
                                        <button onClick={() => handleDownload(cv.id)} className="p-2 text-gray-600 hover:text-green-500">
                                            <FaDownload className="w-4 h-4" />
                                        </button>
                                        <button onClick={() => handleDelete(cv.id)} className="p-2 text-gray-600 hover:text-red-500">
                                            <FaTrash className="w-4 h-4" />
                                        </button>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <div className="p-8 text-center text-gray-500">
                        No CVs found. Create your first CV!
                    </div>
                )}
            </div>
        </div>
    );
};

export default MyCVs;