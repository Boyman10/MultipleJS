"use strict";

import Player from "./Player.js";

class Game {

    /**
     * Game initialization
     * @param startPlayer Player starting player
     */
    constructor(startPlayer, theBoard) {

        $("#players").append(`<h3>Player ${startPlayer.name}</h3>`);

        this.player = startPlayer;
        this.board = theBoard;
        this.lBut = $("<div id='left'><i class=\"fas fa-caret-left\"></i></div>");


    }

    displayButtons() {

        $("#players").append("<p>Please pick up your move now :</p>");
        $("#players").append(this.lBut);

        this.lBut.click({aBoard : this.board, player : this.player}, function(params) {
            params.data.aBoard.goLeft(params.data.player.player)
        });
    }

}

export default Game;