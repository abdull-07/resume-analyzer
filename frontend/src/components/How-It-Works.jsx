import React from 'react'
import { FaUserEdit, FaMagic, FaDownload } from 'react-icons/fa';

const HIW = () => {
    const steps = [
        {
            icon: <FaUserEdit className="text-blue-500 text-4xl" />,
            title: "Enter Your Details",
            description: "Fill in your information easily with our step-by-step form.",
        },
        {
            icon: <FaMagic className="text-blue-500 text-4xl" />,
            title: "AI Optimization",
            description: "Let our AI enhance and optimize your resume for ATS systems.",
        },
        {
            icon: <FaDownload className="text-blue-500 text-4xl" />,
            title: "Download & Apply",
            description: "Download your resume or cover letter instantly and start applying for jobs.",
        },
    ];
    return (
        <section className="py-16 bg-white">
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-4xl font-bold text-blue-600 mb-6">How It Works</h2>
                <p className="text-lg text-gray-700 mb-10">
                    Create a professional resume and cover letter in just three easy steps.
                </p>

                <div className="grid md:grid-cols-3 gap-8 px-4 xl:px-16">
                    {steps.map((step, index) => (
                        <div
                            key={index}
                            className="bg-gray-100 p-8 rounded-xl shadow-lg text-center transition transform hover:scale-105 hover:shadow-xl"
                        >
                            <div className="mb-4">{step.icon}</div>
                            <h3 className="text-xl font-semibold text-blue-600">{step.title}</h3>
                            <p className="text-gray-700 mt-2">{step.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default HIW
