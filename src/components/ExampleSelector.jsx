import React from 'react';

export const ExampleSelector = ({ examples, selectedExample, onSelect, onReset }) => (
    <div className="flex flex-wrap gap-2 mb-4">
        {Object.entries(examples).map(([key, ex]) => (
            <button
                key={key}
                onClick={() => {
                    onSelect(key);
                    onReset();
                }}
                className={`px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all ${selectedExample === key
                        ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/20'
                        : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
                    }`}
            >
                {ex.name}
            </button>
        ))}
    </div>
);