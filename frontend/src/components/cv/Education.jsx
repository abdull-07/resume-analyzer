import React, { useState, useEffect } from "react";
import { FaGraduationCap, FaTrash } from "react-icons/fa";
import { getAiSuggestions } from "../../utils/aiService";
import { useCV } from "../../context/CVContext";

const Education = () => {
  const { CVData, updateCVData } = useCV();
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [educations, setEducations] = useState([]);
  const [institution, setInstitution] = useState("");
  const [field, setField] = useState("");
  const [degree, setDegree] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [isPresent, setIsPresent] = useState(false);
  const [description, setDescription] = useState("");

  // Load existing education data from context when component mounts
  useEffect(() => {
    if (CVData.education) {
      setEducations(CVData.education);
    }
  }, [CVData.education]);

  const handleAiSuggestions = async () => {
    setLoading(true);
    const aiText = await getAiSuggestions(`Write a professional and concise education description for a CV based on these details:
- Institution: ${institution}
- Field of Study: ${field}
- Degree: ${degree}
- City: ${city}, Country: ${country}
- Start Date: ${startDate} to ${isPresent ? "Present" : endDate}

The description should:
- Use clear and impactful wording
- Be written in the third person
- Focus on achievements and skills gained
- Avoid unnecessary fluff

Example output:
"Completed a Bachelor's in Computer Science at Harvard University, specializing in Artificial Intelligence. Developed strong analytical and problem-solving skills while working on hands-on projects. Graduated with honors."

Now, generate a similar description.`);

    setDescription(aiText || "No suggestions available. Please try again.");
    setLoading(false);
  };

  const handleAddEducation = (e) => {
    e.preventDefault();
    if (institution && degree) {
      const newEducation = {
        id: Date.now(),
        institution,
        field,
        degree,
        city,
        country,
        startDate,
        endDate: isPresent ? "Present" : endDate,
        description,
      };
      const updatedEducations = [...educations, newEducation];
      setEducations(updatedEducations);
      // Update context
      updateCVData('education', updatedEducations);
      // Reset form
      setInstitution("");
      setField("");
      setDegree("");
      setCity("");
      setCountry("");
      setStartDate("");
      setEndDate("");
      setIsPresent(false);
      setDescription("");
    }
  };

  const handleDeleteEducation = (educationId) => {
    const updatedEducations = educations.filter(
      (education) => education.id !== educationId
    );
    setEducations(updatedEducations);
    // Update context
    updateCVData('education', updatedEducations);
  };

  return (
    <div className="bg-white p-4 rounded-xl shadow-md w-full">
      <div
        className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-100 cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center space-x-3">
          <FaGraduationCap className="text-gray-600 text-4xl" />
          <h2 className="text-lg font-semibold">Education</h2>
        </div>
        <span className="text-gray-600 text-lg">{isOpen ? "▲" : "▼"}</span>
      </div>

      {isOpen && (
        <div className="mt-4 space-y-4">
          {/* Existing Education List */}
          {educations.length > 0 && (
            <div className="space-y-2">
              {educations.map((education) => (
                <div
                  key={education.id}
                  className="flex items-center justify-between p-3 border rounded"
                >
                  <div className="flex-grow">
                    <h3 className="font-medium">{education.institution}</h3>
                    <p className="text-sm text-gray-600">
                      {education.startDate} - {education.endDate}
                    </p>
                    <p className="text-sm text-purple-600">
                      {education.degree} in {education.field}
                    </p>
                    <p className="text-sm text-gray-500">
                      {education.city}, {education.country}
                    </p>
                    <p className="text-sm mt-1">{education.description}</p>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleDeleteEducation(education.id)}
                    className="text-red-500 hover:text-red-700 ml-4"
                  >
                    <FaTrash />
                  </button>
                </div>
              ))}
            </div>
          )}

          {/* Add New Education Form */}
          <form
            onSubmit={handleAddEducation}
            className="space-y-4 p-4 border rounded-lg bg-gray-50"
          >
            <div>
              <input
                type="text"
                placeholder="Institution Name"
                className="w-full p-2 border rounded"
                value={institution}
                onChange={(e) => setInstitution(e.target.value)}
                required
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <input
                  type="text"
                  placeholder="Field of Study"
                  className="w-full p-2 border rounded"
                  value={field}
                  onChange={(e) => setField(e.target.value)}
                  required
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Degree"
                  className="w-full p-2 border rounded"
                  value={degree}
                  onChange={(e) => setDegree(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <input
                  type="text"
                  placeholder="City"
                  className="w-full p-2 border rounded"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  required
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Country"
                  className="w-full p-2 border rounded"
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Start Date
                </label>
                <input
                  type="month"
                  className="w-full p-2 border rounded"
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  End Date
                </label>
                <div className="flex items-center gap-3">
                  <input
                    type="month"
                    className="w-full p-2 border rounded"
                    value={endDate}
                    onChange={(e) => setEndDate(e.target.value)}
                    disabled={isPresent}
                    required={!isPresent}
                  />
                  <label className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={isPresent}
                      onChange={() => setIsPresent(!isPresent)}
                    />
                    Present
                  </label>
                </div>
              </div>
            </div>

            <div>
              <textarea
                rows="4"
                className="w-full p-2 border rounded resize-none"
                placeholder="Description"
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
                  {loading ? "Loading..." : "+ AI Suggestions"}
                </button>
              </div>
            </div>

            <button
              type="submit"
              className="w-full p-2 bg-purple-500 text-white rounded"
            >
              + Add Education
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Education;
