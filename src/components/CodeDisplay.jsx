import React from 'react';

export const CodeDisplay = ({ code }) => (
    <div className="relative group">
        <div className="absolute -top-3 left-4 px-2 py-1 bg-gray-900 border border-gray-700 rounded text-[10px] text-gray-500 font-mono uppercase">
            Source Code
        </div>
        <pre className="bg-black/50 p-6 rounded-xl text-sm overflow-x-auto border border-gray-800 font-mono leading-relaxed">
            <code className="text-blue-300">
                {code}
            </code>
        </pre>
    </div>
);