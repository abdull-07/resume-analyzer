import React from 'react';
import { FaFileAlt, FaDownload, FaTrash, FaEdit } from 'react-icons/fa';

const MyDocuments = () => {
    const documents = [
        { id: 1, name: "Resume.pdf", date: "2025-04-01", type: "resume" },
        { id: 2, name: "CoverLetter.docx", date: "2025-03-30", type: "cover-letter" },
    ];

    const handleDownload = (id) => {
        // Implement download functionality
        console.log(`Downloading document ${id}`);
    };

    const handleDelete = (id) => {
        // Implement delete functionality
        console.log(`Deleting document ${id}`);
    };

    const handleEdit = (id) => {
        // Implement edit functionality
        console.log(`Editing document ${id}`);
    };

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8">
                <h2 className="text-2xl font-bold mb-4 sm:mb-0">All Documents</h2>
                <div className="flex space-x-2">
                    <select className="border rounded-md p-2 text-sm">
                        <option value="all">All Documents</option>
                        <option value="resume">Resumes</option>
                        <option value="cv">CVs</option>
                        <option value="cover-letter">Cover Letters</option>
                    </select>
                    <select className="border rounded-md p-2 text-sm">
                        <option value="newest">Newest First</option>
                        <option value="oldest">Oldest First</option>
                        <option value="name">Name A-Z</option>
                    </select>
                </div>
            </div>

            <div className="bg-white rounded-lg shadow overflow-hidden">
                <ul className="divide-y divide-gray-200">
                    {documents.map((doc) => (
                        <li 
                            key={doc.id} 
                            className="p-4 hover:bg-gray-50 transition-colors duration-150 flex flex-col sm:flex-row sm:items-center sm:justify-between"
                        >
                            <div className="flex items-center mb-3 sm:mb-0">
                                <FaFileAlt className={`
                                    w-5 h-5 mr-3
                                    ${doc.type === 'resume' ? 'text-blue-500' : ''}
                                    ${doc.type === 'cv' ? 'text-green-500' : ''}
                                    ${doc.type === 'cover-letter' ? 'text-yellow-500' : ''}
                                `} />
                                <div>
                                    <h3 className="text-sm font-medium">{doc.name}</h3>
                                    <p className="text-xs text-gray-500">Last modified: {doc.date}</p>
                                </div>
                            </div>
                            
                            <div className="flex items-center space-x-2">
                                <button 
                                    onClick={() => handleEdit(doc.id)}
                                    className="p-2 text-gray-600 hover:text-blue-500 transition-colors duration-150"
                                >
                                    <FaEdit className="w-4 h-4" />
                                </button>
                                <button 
                                    onClick={() => handleDownload(doc.id)}
                                    className="p-2 text-gray-600 hover:text-green-500 transition-colors duration-150"
                                >
                                    <FaDownload className="w-4 h-4" />
                                </button>
                                <button 
                                    onClick={() => handleDelete(doc.id)}
                                    className="p-2 text-gray-600 hover:text-red-500 transition-colors duration-150"
                                >
                                    <FaTrash className="w-4 h-4" />
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default MyDocuments;
