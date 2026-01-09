export class EventLoopController {
	static sleep(ms) {
		return new Promise((resolve) => setTimeout(resolve, ms));
	}

	static async runSimulation(exampleKey, setActivePhase, addLog) {
		const sims = {
			basic: () => this.simulateBasic(setActivePhase, addLog),
			ioContext: () => this.simulateIO(setActivePhase, addLog),
			nested: () => this.simulateNested(setActivePhase, addLog),
		};
		await sims[exampleKey]();
	}

	static async simulateBasic(setPhase, log) {
		setPhase(0);
		await this.sleep(400);
		log("1: Sync code", 0);
		log("6: Sync code end", 0);
		setPhase(1);
		await this.sleep(600);
		log("4: nextTick", 1);
		setPhase(2);
		await this.sleep(600);
		log("5: Promise", 2);
		setPhase(3);
		await this.sleep(600);
		log("2: setTimeout", 3);
		setPhase(5);
		await this.sleep(600);
		log("3: setImmediate", 5);
	}

	static async simulateIO(setPhase, log) {
		setPhase(0);
		await this.sleep(400);
		log("1: Top-level start", 0);
		log("6: Top-level end", 0);
		setPhase(3);
		await this.sleep(800);
		log("2: Inside I/O callback", 3);
		setPhase(1);
		await this.sleep(600);
		log("5: nextTick in I/O", 1);
		setPhase(5);
		await this.sleep(600);
		log("4: setImmediate in I/O", 5);
		setPhase(3);
		await this.sleep(600);
		log("3: setTimeout in I/O", 3);
	}

	static async simulateNested(setPhase, log) {
		setPhase(0);
		await this.sleep(400);
		log("1: Start", 0);
		log("7: End", 0);
		setPhase(1);
		await this.sleep(600);
		log("2: nextTick 1", 1);
		await this.sleep(400);
		log("3: nested nextTick", 1);
		setPhase(2);
		await this.sleep(600);
		log("4: Promise 1", 2);
		await this.sleep(400);
		log("5: nested Promise", 2);
		setPhase(3);
		await this.sleep(600);
		log("6: setTimeout", 3);
	}
}
