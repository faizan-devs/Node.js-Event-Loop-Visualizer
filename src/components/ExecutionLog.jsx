import React from 'react';
import { EventLoopModel } from '../data/eventLoopData';

export const ExecutionLog = ({ logs }) => {
    const isEmpty = logs.length === 0;

    return (
        <div className={`log-container-transition bg-black/40 rounded-xl border border-gray-800 overflow-hidden ${isEmpty
            ? 'h-16 opacity-50 shadow-none'
            : 'h-auto min-h-[200px] p-4 shadow-2xl shadow-blue-500/10 opacity-100'
            }`}>
            {isEmpty ? (
                <div className="flex items-center justify-center h-16 text-gray-500 text-xs uppercase tracking-widest font-mono">
                    Click "Run Simulation" to see execution order
                </div>
            ) : (
                <div className="space-y-2">
                    {logs.map((log, i) => {
                        const phase = EventLoopModel.phases.find(p => p.order === log.phase);
                        return (
                            <div
                                key={`${log.msg}-${i}`} // Improved key for better React tracking
                                className="flex items-center gap-3 animate-fade-in bg-gray-900/80 p-3 rounded-lg border border-gray-800"
                            >
                                <span className={`${phase.color} text-[10px] font-bold px-2 py-0.5 rounded text-white`}>
                                    {i + 1}
                                </span>
                                <span className="text-sm font-mono text-blue-100">{log.msg}</span>
                                <span className="ml-auto text-[10px] text-gray-500 font-bold uppercase tracking-tighter italic">
                                    {phase.name}
                                </span>
                            </div>
                        );
                    })}
                </div>
            )}
        </div>
    );
};