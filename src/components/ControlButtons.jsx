import React from 'react';
import { Play, RotateCcw } from 'lucide-react';

export const ControlButtons = ({ onRun, onReset, isRunning }) => (
    <div className="flex gap-3 mt-6">
        <button
            onClick={onRun}
            disabled={isRunning}
            className="flex-1 flex items-center justify-center gap-2 bg-white text-black px-6 py-3 rounded-xl font-bold hover:bg-gray-200 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
        >
            <Play size={18} fill="currentColor" />
            {isRunning ? 'Executing...' : 'Run Simulation'}
        </button>
        <button
            onClick={onReset}
            className="flex items-center justify-center bg-gray-800 text-white px-4 py-3 rounded-xl hover:bg-gray-700 transition-all"
            title="Reset Simulation"
        >
            <RotateCcw size={18} />
        </button>
    </div>
);