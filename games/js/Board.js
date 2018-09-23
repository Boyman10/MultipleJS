"use strict";

import Tools from "./tools/Tools.js";

class Board {


    constructor(col = 10, line = 10, difficulty = 10) {

        this.col = col;
        this.line = line;
        this.difficulty = difficulty;

        this.weapons = [];
        this.map = new Array(line);
        this.players = [];
    }

    addWeapon(weapon) {

        if (this.weapons.length < 4)
            this.weapons.push(weapon);
        else
            console.log("You've reached the maximum number of weapons !");
    }

    addPlayer(player) {
        this.players.push(player);
    }

    buildBoard() {

        // generate the 2D array
        for(let i = 0;i< this.line; i++) {
            this.map[i] = new Array(this.col);
            for (let j = 0; j < this.col; j++) {

                this.map[i][j] = '0';

            }
        }
        console.log("Building board...");

        this.spotDifficulties();

    }

    spotDifficulties() {




        for(let i = 0;i < this.difficulty; i++) {

            const tmp = Math.floor(Math.random() * this.col * this.line);

            console.log(`Here is the generated number ${tmp}`);

            const pos = Tools.position(tmp,this.line, this.col);

            this.map[pos[0]][pos[1]] = '1'; // Black brick

        }

        console.log("Map filled");

    }

    getMap() {
        return this.map;
    }


    /**
     * Randomly spot a player
     * Beware not touching other players !
     */
    spotPlayer(player) {

        const tmp = Math.floor(Math.random() * this.col * this.line);

        console.log(`Here is the generated number ${tmp}`);

        const pos = Tools.position(tmp,this.line, this.col);

        if (this.map[pos[0]][pos[1]] !== '0')
            spotPlayer(player);
        else {
            this.map[pos[0]][pos[1]] = "<img src=\"images/" + player.getIcon() + ".png\">"; // Black brick
            this.player.setPosition(pos);
        }
    }

}

export default Board;
