import EventEmitter from "./eventemitter.js";

export class Time extends EventEmitter {

    constructor() {

        super();

        // Setup
        this.start = Date.now();
        this.current = this.start;
        this.elapsed = 0;
        this.delta = 16; // magic number based on 60fps

        window.requestAnimationFrame(() => { this.tick(); });

    }

    tick() {

        const currentTime = Date.now();
        this.delta = currentTime - this.current;
        this.current = currentTime;
        this.elapsed = this.current - this.start;

        this.trigger("tick");

        window.requestAnimationFrame( () => { this.tick(); });

    }

}