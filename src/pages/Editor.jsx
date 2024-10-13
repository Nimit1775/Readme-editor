import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import '../customs/styles.css'; // Assuming you have the CSS in a file named Editor.css

const Editor = () => {
  const [markdown, setMarkdown] = useState('');
  const [isRaw, setIsRaw] = useState(false);

  const handleDownload = () => {
    const element = document.createElement('a');
    const file = new Blob([markdown], { type: 'text/markdown' });
    element.href = URL.createObjectURL(file);
    element.download = 'README.md';
    document.body.appendChild(element); // Required for this to work in FireFox
    element.click();
    document.body.removeChild(element);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(markdown).then(() => {
      alert('Markdown text copied to clipboard!');
    });
  };

  return (
    <div className="flex h-screen bg-white">
      <div className="w-1/2 p-6 border-r border-gray-300">
        <h2 className="text-2xl font-bold mb-4">Markdown Editor</h2>
        <textarea
          className="w-full h-[calc(100vh-140px)] p-4 rounded-md border border-gray-300 bg-black text-white resize-none focus:outline-none focus:ring-2 focus:border-transparent"
          value={markdown}
          onChange={(e) => setMarkdown(e.target.value)}
          placeholder="Write your markdown here..."
        />
      </div>
      <div className="w-1/2 p-6 overflow-y-auto bg-white text-black">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold underline">Preview</h2>
          <div>
            <button
              className="mr-2 px-4 py-2 bg-gray-200 text-black rounded-md shadow hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50 transition duration-200 ease-in-out"
              onClick={() => setIsRaw(!isRaw)}
            >
              {isRaw ? 'Preview' : 'Raw'}
            </button>
            {isRaw && (
              <button
                className="px-4 py-2 bg-gray-200 text-black rounded-md shadow hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50 transition duration-200 ease-in-out"
                onClick={handleCopy}
              >
                Copy
              </button>
            )}
          </div>
        </div>
        <div className="prose max-w-none text-black">
          {isRaw ? (
            <pre className="whitespace-pre-wrap">{markdown}</pre>
          ) : (
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              rehypePlugins={[rehypeRaw]}
            >
              {markdown}
            </ReactMarkdown>
          )}
        </div>
      </div>
      <button
        className="fixed bottom-6 right-6 px-4 py-2 bg-blue-500 text-white rounded-md shadow-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-200 ease-in-out"
        onClick={handleDownload}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline-block mr-2" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M3 3a1 1 0 011-1h12a1 1 0 011 1v12a1 1 0 01-1 1H4a1 1 0 01-1-1V3zm4 4a1 1 0 00-1 1v4a1 1 0 001 1h6a1 1 0 001-1V8a1 1 0 00-1-1H7z" clipRule="evenodd" />
        </svg>
        Download as .md
      </button>
    </div>
  );
};

export default Editor;