import React, { useState } from 'react';
import { FaFileAlt, FaDownload, FaTrash, FaEdit, FaTimes } from 'react-icons/fa';
import { FiPlus, FiUpload, FiCpu } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

const MyCVs = () => {
    const navigate = useNavigate();
    const [showAIForm, setShowAIForm] = useState(false);
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        experience: '',
        education: '',
        research: '',
        publications: '',
        achievements: ''
    });
    const [loading, setLoading] = useState(false);
    const cvs = [
        { id: 1, name: "Academic CV", date: "2025-04-01" },
        { id: 2, name: "Research CV", date: "2025-03-30" },
    ];

    const handleCreateManually = () => {
        navigate('/cv-builder');
    };

    const handleCreateWithAI = () => {
        setShowAIForm(true);
    };

    const handleUploadCV = () => {
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

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            // Call your AI API here
            const response = await generateCVWithAI(formData);
            
            // Navigate to CV builder with the generated data
            navigate('/cv-builder', {
                state: { cvData: response }
            });
        } catch (error) {
            console.error('Error generating CV:', error);
        } finally {
            setLoading(false);
            setShowAIForm(false);
        }
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

            {/* AI Generation Form Modal */}
            {showAIForm && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
                    <div className="bg-white rounded-lg shadow-xl w-full max-w-md relative max-h-[90vh] flex flex-col">
                        {/* Modal Header - Fixed */}
                        <div className="p-6 border-b">
                            <button 
                                onClick={() => setShowAIForm(false)}
                                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
                            >
                                <FaTimes className="w-5 h-5" />
                            </button>

                            <h2 className="text-xl font-semibold">Generate CV with AI</h2>
                            <p className="text-gray-600 mt-2">
                                Please provide your academic and professional information to help AI generate your CV.
                            </p>
                        </div>

                        {/* Form Content - Scrollable */}
                        <div className="p-6 overflow-y-auto flex-1">
                            <form onSubmit={handleFormSubmit} className="space-y-4">
                                {/* Required Fields */}
                                <div className="space-y-4">
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
                                            placeholder="Dr. John Doe"
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
                                            placeholder="john@university.edu"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">
                                            Professional Experience
                                        </label>
                                        <textarea
                                            required
                                            value={formData.experience}
                                            onChange={(e) => setFormData({...formData, experience: e.target.value})}
                                            className="w-full p-2 border rounded-md"
                                            rows="3"
                                            placeholder="Your academic and professional experience..."
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">
                                            Education & Qualifications
                                        </label>
                                        <textarea
                                            required
                                            value={formData.education}
                                            onChange={(e) => setFormData({...formData, education: e.target.value})}
                                            className="w-full p-2 border rounded-md"
                                            rows="3"
                                            placeholder="Your academic qualifications..."
                                        />
                                    </div>
                                </div>

                                {/* Optional Fields */}
                                <div className="pt-4 mt-4 border-t border-gray-200">
                                    <p className="text-sm text-gray-500 mb-4">Optional Information</p>
                                    
                                    <div className="space-y-4">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                                Research Experience (Optional)
                                            </label>
                                            <textarea
                                                value={formData.research}
                                                onChange={(e) => setFormData({...formData, research: e.target.value})}
                                                className="w-full p-2 border rounded-md"
                                                rows="3"
                                                placeholder="Your research experience and interests..."
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                                Publications (Optional)
                                            </label>
                                            <textarea
                                                value={formData.publications}
                                                onChange={(e) => setFormData({...formData, publications: e.target.value})}
                                                className="w-full p-2 border rounded-md"
                                                rows="3"
                                                placeholder="List your key publications..."
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                                Achievements & Awards (Optional)
                                            </label>
                                            <textarea
                                                value={formData.achievements}
                                                onChange={(e) => setFormData({...formData, achievements: e.target.value})}
                                                className="w-full p-2 border rounded-md"
                                                rows="3"
                                                placeholder="Notable achievements and awards..."
                                            />
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>

                        {/* Modal Footer - Fixed */}
                        <div className="p-6 border-t">
                            <button
                                type="submit"
                                form="cvForm"
                                disabled={loading}
                                className={`w-full py-2 px-4 rounded-md text-white font-medium
                                    ${loading 
                                        ? 'bg-gray-400 cursor-not-allowed' 
                                        : 'bg-blue-600 hover:bg-blue-700'
                                    }
                                `}
                            >
                                {loading ? 'Generating...' : 'Generate CV'}
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default MyCVs;