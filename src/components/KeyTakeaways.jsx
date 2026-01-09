import React from 'react';

export const KeyTakeaways = ({ takeaways }) => (
    <div className="mt-8 p-6 bg-blue-500/5 border border-blue-500/20 rounded-2xl">
        <h3 className="text-sm font-bold text-blue-400 uppercase tracking-widest mb-4">
            Internal Logic Summary
        </h3>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {takeaways.map((item, idx) => (
                <li key={idx} className="flex gap-3 text-sm text-gray-400 leading-snug">
                    <span className="text-blue-500 font-bold">0{idx + 1}.</span>
                    {item}
                </li>
            ))}
        </ul>
    </div>
);