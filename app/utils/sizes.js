import EventEmitter from "./eventemitter.js";

export class Sizes extends EventEmitter {

    constructor() {

        super();

        // Setup variables

        this.width = window.innerWidth;
        this.height = window.innerHeight;
        this.pixelRatio = Math.min(window.devicePixelRatio, 2);

        // Resize event

        window.addEventListener("resize", () =>
        
            {

                this.width = window.innerWidth;
                this.height = window.innerHeight;
                this.pixelRatio = Math.min(window.devicePixelRatio, 2);
                
                this.trigger("resize");

            }
            
        ); // end resize event listener
    }

}