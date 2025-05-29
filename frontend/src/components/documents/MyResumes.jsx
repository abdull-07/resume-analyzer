import React, { useState } from 'react';
import { FaFileAlt, FaDownload, FaTrash, FaEdit, FaTimes } from 'react-icons/fa';
import { FiPlus, FiUpload, FiCpu } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

const MyResumes = () => {
    const navigate = useNavigate();
    const [showAIForm, setShowAIForm] = useState(false);
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        experience: '',
        education: ''
    });
    const [loading, setLoading] = useState(false);

    const resumes = [
        { id: 1, name: "Professional Resume", date: "2025-04-01" },
        { id: 2, name: "Technical Resume", date: "2025-03-30" },
    ];

    const handleCreateManually = () => {
        navigate('/resume-builder');
    };

    const handleCreateWithAI = () => {
        setShowAIForm(true);
    };

    const handleUploadResume = () => {
        console.log('Upload resume');
    };

    const handleDownload = (id) => {
        console.log(`Downloading resume ${id}`);
    };

    const handleDelete = (id) => {
        console.log(`Deleting resume ${id}`);
    };

    const handleEdit = (id) => {
        console.log(`Editing resume ${id}`);
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            // Call your AI API here
            const response = await generateResumeWithAI(formData);
            
            // Navigate to resume builder with the generated data
            navigate('/resume-builder', {
                state: { resumeData: response }
            });
        } catch (error) {
            console.error('Error generating resume:', error);
        } finally {
            setLoading(false);
            setShowAIForm(false);
        }
    };

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
            {/* Creation Options Section */}
            <div className="bg-white rounded-lg shadow p-6">
                <h2 className="text-xl font-semibold mb-6">Create New Resume</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <button
                        onClick={handleCreateManually}
                        className="flex flex-col items-center p-6 border-2 border-dashed rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-colors group"
                    >
                        <FiPlus className="w-8 h-8 mb-3 text-gray-400 group-hover:text-blue-500" />
                        <span className="font-medium text-gray-900">Create Manually</span>
                        <span className="text-sm text-gray-500">Build your resume step by step</span>
                    </button>

                    <button
                        onClick={handleCreateWithAI}
                        className="flex flex-col items-center p-6 border-2 border-dashed rounded-lg hover:border-purple-500 hover:bg-purple-50 transition-colors group"
                    >
                        <FiCpu className="w-8 h-8 mb-3 text-gray-400 group-hover:text-purple-500" />
                        <span className="font-medium text-gray-900">Generate with AI</span>
                        <span className="text-sm text-gray-500">Let AI help create your resume</span>
                    </button>

                    <button
                        onClick={handleUploadResume}
                        className="flex flex-col items-center p-6 border-2 border-dashed rounded-lg hover:border-green-500 hover:bg-green-50 transition-colors group"
                    >
                        <FiUpload className="w-8 h-8 mb-3 text-gray-400 group-hover:text-green-500" />
                        <span className="font-medium text-gray-900">Upload Existing</span>
                        <span className="text-sm text-gray-500">Import your existing resume</span>
                    </button>
                </div>
            </div>

            {/* Resumes List Section */}
            <div className="bg-white rounded-lg shadow overflow-hidden">
                <div className="flex items-center justify-between p-6 border-b">
                    <h2 className="text-xl font-semibold">My Resumes</h2>
                    <select className="border rounded-md p-2 text-sm">
                        <option value="newest">Newest First</option>
                        <option value="oldest">Oldest First</option>
                        <option value="name">Name A-Z</option>
                    </select>
                </div>

                {resumes.length > 0 ? (
                    <ul className="divide-y divide-gray-200">
                        {resumes.map((resume) => (
                            <li key={resume.id} className="p-4 hover:bg-gray-50 transition-colors">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center">
                                        <FaFileAlt className="w-5 h-5 mr-3 text-blue-500" />
                                        <div>
                                            <h3 className="text-sm font-medium">{resume.name}</h3>
                                            <p className="text-xs text-gray-500">Last modified: {resume.date}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <button onClick={() => handleEdit(resume.id)} className="p-2 text-gray-600 hover:text-blue-500">
                                            <FaEdit className="w-4 h-4" />
                                        </button>
                                        <button onClick={() => handleDownload(resume.id)} className="p-2 text-gray-600 hover:text-green-500">
                                            <FaDownload className="w-4 h-4" />
                                        </button>
                                        <button onClick={() => handleDelete(resume.id)} className="p-2 text-gray-600 hover:text-red-500">
                                            <FaTrash className="w-4 h-4" />
                                        </button>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <div className="p-8 text-center text-gray-500">
                        No resumes found. Create your first resume!
                    </div>
                )}
            </div>

            {/* AI Generation Form Modal */}
            {showAIForm && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white rounded-lg shadow-xl p-6 w-full max-w-md relative">
                        <button 
                            onClick={() => setShowAIForm(false)}
                            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
                        >
                            <FaTimes className="w-5 h-5" />
                        </button>

                        <h2 className="text-xl font-semibold mb-4">Generate Resume with AI</h2>
                        <p className="text-gray-600 mb-6">
                            Please provide some basic information to help AI generate your resume.
                        </p>

                        <form onSubmit={handleFormSubmit} className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Full Name
                                </label>
                                <input
                                    type="text"
                                    required
                                    value={formData.fullName}
                                    onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                                    className="w-full p-2 border rounded-md"
                                    placeholder="John Doe"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    required
                                    value={formData.email}
                                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                                    className="w-full p-2 border rounded-md"
                                    placeholder="john@example.com"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Professional Experience Summary
                                </label>
                                <textarea
                                    required
                                    value={formData.experience}
                                    onChange={(e) => setFormData({...formData, experience: e.target.value})}
                                    className="w-full p-2 border rounded-md"
                                    rows="3"
                                    placeholder="Brief summary of your work experience..."
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Education Background
                                </label>
                                <textarea
                                    required
                                    value={formData.education}
                                    onChange={(e) => setFormData({...formData, education: e.target.value})}
                                    className="w-full p-2 border rounded-md"
                                    rows="3"
                                    placeholder="Brief summary of your education..."
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={loading}
                                className={`w-full py-2 px-4 rounded-md text-white font-medium
                                    ${loading 
                                        ? 'bg-gray-400 cursor-not-allowed' 
                                        : 'bg-blue-600 hover:bg-blue-700'
                                    }
                                `}
                            >
                                {loading ? 'Generating...' : 'Generate Resume'}
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default MyResumes;
