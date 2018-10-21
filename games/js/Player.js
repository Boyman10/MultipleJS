"use strict";

class Player {

    constructor (name, life = 100, icon = "default") {

        this.name = name;
        this.life = life;
        this.icon = icon;
        this.pos = [];
    }

    getIcon() {
        return this.icon;
    }

    setPosition(pos) {
        this.pos = pos;
    }

    getPosition() {
        return this.pos;
    }

}

export default Player;
