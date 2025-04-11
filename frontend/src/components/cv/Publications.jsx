import React, { useState, useEffect } from 'react';
import { FaBook, FaTrash } from 'react-icons/fa';
import { getAiSuggestions } from '../../utils/aiService';
import { useCV } from '../../context/CVContext';

const Publications = () => {
  const { CVData, updateCVData } = useCV();
  const [isOpen, setIsOpen] = useState(false);
  const [publications, setPublications] = useState([]);
  const [title, setTitle] = useState('');
  const [authors, setAuthors] = useState('');
  const [publisher, setPublisher] = useState('');
  const [date, setDate] = useState('');
  const [url, setUrl] = useState('');
  const [description, setDescription] = useState('');
  const [loading, setLoading] = useState(false);

  // Load existing publications from context
  useEffect(() => {
    if (CVData.publications) {
      setPublications(CVData.publications);
    }
  }, [CVData.publications]);

  const handleAiSuggestions = async () => {
    setLoading(true);
    const aiText = await getAiSuggestions(`Write a concise description for this publication:
- Title: ${title}
- Authors: ${authors}
- Publisher: ${publisher}
- Date: ${date}

The description should:
- Summarize the key findings or contributions
- Highlight the impact or significance
- Be written in an academic style
- Be concise and clear

Please generate a brief description for this publication.`);

    setDescription(aiText || 'No suggestions available. Please try again.');
    setLoading(false);
  };

  const handleAddPublication = (e) => {
    e.preventDefault();
    if (title && authors) {
      const newPublication = {
        id: Date.now(),
        title,
        authors,
        publisher,
        date,
        url,
        description,
      };
      const updatedPublications = [...publications, newPublication];
      setPublications(updatedPublications);
      // Update context
      updateCVData('publications', updatedPublications);
      // Reset form
      setTitle('');
      setAuthors('');
      setPublisher('');
      setDate('');
      setUrl('');
      setDescription('');
    }
  };

  const handleDeletePublication = (publicationId) => {
    const updatedPublications = publications.filter(pub => pub.id !== publicationId);
    setPublications(updatedPublications);
    // Update context
    updateCVData('publications', updatedPublications);
  };

  return (
    <div className="bg-white p-4 rounded-xl shadow-md w-full">
      <div
        className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-100 cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center space-x-3">
          <FaBook className="text-gray-600 text-4xl" />
          <h2 className="text-lg font-semibold">Publications</h2>
        </div>
        <span className="text-gray-600 text-lg">{isOpen ? '▲' : '▼'}</span>
      </div>

      {isOpen && (
        <div className="mt-4 space-y-4">
          {/* Existing Publications List */}
          {publications.length > 0 && (
            <div className="space-y-2">
              {publications.map(pub => (
                <div
                  key={pub.id}
                  className="flex items-center justify-between p-3 border rounded"
                >
                  <div className="flex-grow">
                    <h3 className="font-medium">{pub.title}</h3>
                    <p className="text-sm text-purple-600">{pub.authors}</p>
                    <p className="text-sm text-gray-600">
                      {pub.publisher} ({pub.date})
                    </p>
                    {pub.url && (
                      <a
                        href={pub.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-blue-500 hover:underline"
                      >
                        View Publication
                      </a>
                    )}
                    <p className="text-sm mt-1">{pub.description}</p>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleDeletePublication(pub.id)}
                    className="text-red-500 hover:text-red-700 ml-4"
                  >
                    <FaTrash />
                  </button>
                </div>
              ))}
            </div>
          )}

          {/* Add New Publication Form */}
          <form
            onSubmit={handleAddPublication}
            className="space-y-4 p-4 border rounded-lg bg-gray-50"
          >
            <div>
              <input
                type="text"
                placeholder="Publication Title"
                className="w-full p-2 border rounded"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
            </div>

            <div>
              <input
                type="text"
                placeholder="Authors (e.g., Smith, J., Johnson, M.)"
                className="w-full p-2 border rounded"
                value={authors}
                onChange={(e) => setAuthors(e.target.value)}
                required
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <input
                  type="text"
                  placeholder="Publisher/Journal"
                  className="w-full p-2 border rounded"
                  value={publisher}
                  onChange={(e) => setPublisher(e.target.value)}
                />
              </div>
              <div>
                <input
                  type="month"
                  className="w-full p-2 border rounded"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  required
                />
              </div>
            </div>

            <div>
              <input
                type="url"
                placeholder="URL (optional)"
                className="w-full p-2 border rounded"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
              />
            </div>

            <div>
              <textarea
                rows="4"
                className="w-full p-2 border rounded resize-none"
                placeholder="Publication Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
              ></textarea>
              <div className="flex gap-2 mt-2">
                <button
                  type="button"
                  className="ml-auto bg-purple-500 text-white p-2 rounded"
                  onClick={handleAiSuggestions}
                  disabled={loading}
                >
                  {loading ? 'Loading...' : '+ AI Suggestions'}
                </button>
              </div>
            </div>

            <button
              type="submit"
              className="w-full p-2 bg-purple-500 text-white rounded"
            >
              + Add Publication
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Publications;