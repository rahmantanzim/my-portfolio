import React from 'react';
// লোগোগুলি ইম্পোর্ট করুন। আপনার প্রজেক্টের পাথ অনুযায়ী এই পাথগুলো পরিবর্তন করুন।
import metaLogo from './path/to/meta-logo.png'; // Meta লোগোর পাথ
import courseraLogo from './path/to/coursera-logo.png'; // Coursera লোগোর পাথ

const CertificateCard = () => {
  const certificate = {
    title: "Meta Front-End Developer Certificate",
    skills: ["React Js", "MERN Stack", "Frontend", "UI/UX Design", "Version control"],
    issuedBy: "Coursera",
    cred_link: 'https://www.credly.com/badges/c8117936-9cda-4e26-b1db-5e1e53ac8e7d/linked_in_profile',
    issue_date: 'November 04, 2023'
  };

  return (
    <div className="bg-[#0B1215] border border-[#1E293B] rounded-2xl p-6 w-[450px] flex flex-col justify-between shadow-lg">
      <div>
        {/* তারিখ এবং Meta লোগো */}
        <div className="flex justify-between items-center mb-2">
          <p className="text-cyan-400 text-sm font-medium">{certificate.issue_date}</p>
          <img src={metaLogo} alt="Meta Logo" className="h-6 w-auto" />
        </div>

        {/* শংসাপত্রের নাম */}
        <h2 className="text-white text-2xl font-bold mb-1 leading-tight">{certificate.title}</h2>

        {/* ইস্যুকারী প্রতিষ্ঠান */}
        <div className="flex items-center mb-6">
          <img src={courseraLogo} alt="Coursera Logo" className="h-4 w-auto mr-2" />
          <p className="text-gray-400 text-sm">Issued By: {certificate.issuedBy}</p>
        </div>

        {/* স্কিল ট্যাগসমূহ */}
        <div className="flex flex-wrap gap-2.5">
          {certificate.skills.map((skill, index) => (
            <span key={index} className="bg-[#1E293B] text-white text-xs px-3 py-1.5 rounded-full font-medium">
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* ভেরিফাই শংসাপত্র বাটন */}
      <div className="flex justify-end mt-8">
        <a 
          href={certificate.cred_link} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="border border-cyan-400 text-cyan-400 text-sm px-5 py-2.5 rounded-xl font-semibold flex items-center hover:bg-cyan-950 transition-colors"
        >
          Verify Certificate
          {/* এক্সটার্নাল লিঙ্ক আইকন */}
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 ml-2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default CertificateCard;