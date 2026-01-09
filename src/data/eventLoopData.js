import { Zap, Clock, Database, CheckCircle } from "lucide-react";

export const EventLoopModel = {
	phases: [
		{ name: "Sync Code", icon: Zap, color: "bg-purple-500", order: 0 },
		{ name: "nextTick Queue", icon: Zap, color: "bg-red-500", order: 1 },
		{
			name: "Microtasks (Promises)",
			icon: Zap,
			color: "bg-orange-500",
			order: 2,
		},
		{
			name: "Timers (setTimeout)",
			icon: Clock,
			color: "bg-blue-500",
			order: 3,
		},
		{ name: "Poll (I/O)", icon: Database, color: "bg-green-500", order: 4 },
		{
			name: "Check (setImmediate)",
			icon: CheckCircle,
			color: "bg-teal-500",
			order: 5,
		},
	],
	examples: {
		basic: {
			name: "Basic Example",
			code: `console.log('1: Sync code');\n\nsetTimeout(() => {\n  console.log('2: setTimeout');\n}, 0);\n\nsetImmediate(() => {\n  console.log('3: setImmediate');\n});\n\nprocess.nextTick(() => {\n  console.log('4: nextTick');\n});\n\nPromise.resolve().then(() => {\n  console.log('5: Promise');\n});\n\nconsole.log('6: Sync code end');`,
		},
		ioContext: {
			name: "I/O Context",
			code: `console.log('1: Top-level start');\n\nsetTimeout(() => {\n  console.log('2: Inside I/O callback');\n  \n  setTimeout(() => {\n    console.log('3: setTimeout in I/O');\n  }, 0);\n  \n  setImmediate(() => {\n    console.log('4: setImmediate in I/O');\n  });\n  \n  process.nextTick(() => {\n    console.log('5: nextTick in I/O');\n  });\n}, 10);\n\nconsole.log('6: Top-level end');`,
		},
		nested: {
			name: "Nested Calls",
			code: `console.log('1: Start');\n\nprocess.nextTick(() => {\n  console.log('2: nextTick 1');\n  process.nextTick(() => {\n    console.log('3: nested nextTick');\n  });\n});\n\nPromise.resolve().then(() => {\n  console.log('4: Promise 1');\n  Promise.resolve().then(() => {\n    console.log('5: nested Promise');\n  });\n});\n\nsetTimeout(() => {\n  console.log('6: setTimeout');\n}, 0);\n\nconsole.log('7: End');`,
		},
	},
	keyTakeaways: [
		"Synchronous code blocks the event loop until it finishes.",
		"nextTick runs immediately after the current operation, before microtasks.",
		"Inside I/O callbacks, setImmediate always runs before setTimeout(0).",
		"Microtasks (Promises) can chain and will all execute before the loop moves to the next phase.",
	],
};
