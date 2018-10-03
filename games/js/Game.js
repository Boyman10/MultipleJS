"use strict";

import Player from "./Player.js";

class Game {

    /**
     * Game initialization
     * @param startPlayer Player starting player
     */
    constructor(startPlayer) {

        $("#players").append(`<h3>Player ${startPlayer.name}</h3>`);
    }

    displayButtons() {

        $("#players").append("")
    }

}

export default Game;