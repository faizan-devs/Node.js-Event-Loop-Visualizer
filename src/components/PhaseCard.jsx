export const PhaseCard = ({ phase, isActive }) => (
    <div className={`p-4 rounded-xl border-2 transition-all duration-300 ${isActive ? 'border-blue-500 bg-gray-800 scale-105' : 'border-gray-700 bg-gray-900/50'
        }`}>
        <div className="flex items-center gap-3">
            <div className={`${phase.color} p-2 rounded-lg`}><phase.icon size={18} /></div>
            <span className="font-bold text-sm">{phase.name}</span>
        </div>
    </div>
);