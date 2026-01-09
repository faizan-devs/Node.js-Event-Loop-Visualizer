import React, { useState } from 'react';
import { EventLoopModel } from './data/eventLoopData';
import { EventLoopController } from './logic/eventLoopController';

// Import all modular components
import { PhaseCard } from './components/PhaseCard';
import { ExecutionLog } from './components/ExecutionLog';
import { ExampleSelector } from './components/ExampleSelector';
import { CodeDisplay } from './components/CodeDisplay';
import { ControlButtons } from './components/ControlButtons';
import { KeyTakeaways } from './components/KeyTakeaways';

export default function App() {
  const [logs, setLogs] = useState([]);
  const [activePhase, setActivePhase] = useState(null);
  const [isRunning, setIsRunning] = useState(false);
  const [example, setExample] = useState('basic');

  const handleRun = async () => {
    setIsRunning(true);
    setLogs([]);
    await EventLoopController.runSimulation(
      example,
      setActivePhase,
      (msg, p) => setLogs(prev => [...prev, { msg, phase: p }])
    );
    setActivePhase(null);
    setIsRunning(false);
  };

  const handleReset = () => {
    setLogs([]);
    setActivePhase(null);
    setIsRunning(false);
  };

  return (
    <div className="min-h-screen bg-gray-950 p-4 md:p-8 text-white font-sans">
      <div className="max-w-6xl mx-auto">

        {/* Header Section */}
        <header className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-black tracking-tighter bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            NODE.JS EVENT LOOP
          </h1>
          <p className="text-gray-500 font-mono text-sm uppercase tracking-widest mt-2">
            Visualizing Asynchronous Execution
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

          {/* Left Column: Visual Phases (Controller View) */}
          <aside className="lg:col-span-4 space-y-3">
            <h2 className="text-gray-500 text-xs font-bold uppercase tracking-widest mb-4">
              Loop Phases
            </h2>
            {EventLoopModel.phases.map(p => (
              <PhaseCard
                key={p.order}
                phase={p}
                isActive={activePhase === p.order}
              />
            ))}
          </aside>

          {/* Right Column: Code, Controls & Logs */}
          <main className="lg:col-span-8 space-y-6">

            {/* Logic Control Panel */}
            <section className="bg-gray-900 p-6 rounded-2xl border border-gray-800 shadow-xl">
              <ExampleSelector
                examples={EventLoopModel.examples}
                selectedExample={example}
                onSelect={setExample} // <-- setExample is used here!
                onReset={handleReset}
              />

              <CodeDisplay
                code={EventLoopModel.examples[example].code}
              />

              <ControlButtons
                onRun={handleRun}
                onReset={handleReset}
                isRunning={isRunning}
              />
            </section>

            {/* Real-time Output */}
            <section className="space-y-4">
              <h2 className="text-gray-500 text-xs font-bold uppercase tracking-widest">
                Live Execution Log
              </h2>
              <ExecutionLog logs={logs} />
              <KeyTakeaways takeaways={EventLoopModel.keyTakeaways} />
            </section>

          </main>
        </div>
      </div>
    </div>
  );
}