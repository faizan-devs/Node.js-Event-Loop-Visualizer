import React, { useState } from 'react';
import { Play, RotateCcw } from 'lucide-react';

export const ControlButtons = ({ onRun, onReset, isRunning }) => {
    const [spin, setSpin] = useState(false);

    const handleResetClick = () => {
        if (spin) return; // Prevent double-clicking during animation

        setSpin(true);
        // Trigger the actual data reset
        onReset();

        // After the 500ms animation ends, we remove the class 
        // BUT we must do it without the user seeing it snap back
        setTimeout(() => {
            setSpin(false);
        }, 500);
    };

    return (
        <div className="flex gap-3 mt-6">
            <button
                onClick={onRun}
                disabled={isRunning}
                className="flex-1 flex items-center justify-center gap-2 bg-white text-black px-6 py-3 rounded-xl font-bold hover:bg-gray-100 cursor-pointer disabled:opacity-30 disabled:cursor-not-allowed transition-all active:scale-95"
            >
                <Play size={18} fill="currentColor" />
                {isRunning ? 'Running...' : 'Run Simulation'}
            </button>

            <button
                onClick={handleResetClick}
                className="flex items-center justify-center bg-gray-800 text-white px-4 py-3 rounded-xl hover:bg-gray-700 cursor-pointer transition-all active:scale-90"
            >
                <div className={`transition-transform duration-500 ease-in-out ${spin ? 'rotate-360' : 'rotate-0'}`}>
                    <RotateCcw size={18} />
                </div>
            </button>
        </div>
    );
};