const MyDocuments = () => {
    const documents = [
      { id: 1, name: "Resume.pdf", date: "2025-04-01" },
      { id: 2, name: "CoverLetter.docx", date: "2025-03-30" },
    ];
  
    return (
      <div>
        <h2 className="text-2xl font-bold mb-4">My Documents</h2>
        <ul>
          {documents.map((doc) => (
            <li key={doc.id} className="p-2 bg-gray-100 mb-2 rounded">
              {doc.name} - {doc.date}
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default MyDocuments;
  