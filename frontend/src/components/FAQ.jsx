import React, { useState } from 'react'
import { FaChevronDown } from 'react-icons/fa'

const faqs = [
    {
        question: "Is this resume builder completely free?",
        answer: "Yes! Our resume builder is 100% free forever. You can create, edit, and download resumes without any hidden fees.",
    },
    {
        question: "Do I need to sign up to create a resume?",
        answer: "Yes, signing up allows you to save your resumes and access them anytime from any device.",
    },
    {
        question: "Are the resume templates ATS-friendly?",
        answer: "Absolutely! Our templates are designed to be ATS-compatible, ensuring your resume gets noticed by recruiters.",
    },
    {
        question: "Can I edit my resume after downloading it?",
        answer: "Yes, you can always return and update your resume as many times as you like.",
    },
    {
        question: "Is there a limit to how many resumes I can create?",
        answer: "No, you can create and save as many resumes as you need without any restrictions.",
    },
]
const FAQ = () => {

    
        const [openIndex, setOpenIndex] = useState(null)
        const toggleFAQ = (index) => {
            setOpenIndex(openIndex === index ? null :index)
        }
    
    return (
        <section className="py-16 bg-gray-100">
        <div className="max-w-4xl mx-auto px-4 xl:px-16">
            <h2 className="text-4xl font-bold text-center text-blue-600 mb-10">FAQs</h2>
            
            <div className="space-y-4">
                {faqs.map((faq, index) => (
                    <div
                        key={index}
                        className="bg-gray-50 border border-blue-500 rounded-lg shadow-md p-5 cursor-pointer transition duration-300 hover:shadow-lg"
                        onClick={() => toggleFAQ(index)}
                    >
                        <div className="flex justify-between items-center">
                            <h3 className="text-lg font-semibold text-blue-600">{faq.question}</h3>
                            <FaChevronDown className={`text-blue-600 transition-transform ${openIndex === index ? "rotate-180" : ""}`} />
                        </div>
                        {openIndex === index && <div><p className="mt-3 text-gray-700">{faq.answer}</p></div>}
                    </div>
                ))}
            </div>
        </div>
    </section>
    )
}

export default FAQ
