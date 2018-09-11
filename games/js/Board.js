"use strict";

class Board {


    constructor(col = 10, line = 10, difficulty = 10) {

        this.col = col;
        this.line = line;
        this.difficulty = difficulty;

        this.weapons = [];
        this.map = [];
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
        for(let i = 0;i< this.line; i++)
            this.map.push(new Array(this.col));

        console.log("Building board...");

        this.spotDifficulties();

    }

    spotDifficulties() {

        const position = (x) => {

            let l = parseInt(x / this.col);
            let c = parseInt(x % this.line);

            if (l > 0) {
                c--;
                l++;
            }

            console.log(`position (${c},${l})`);

            return [c,l];
        }

        for(let i = 0;i < this.difficulty; i++) {

            const tmp = Math.floor(Math.random() * this.col * this.line);

            console.log(`Here is the generated number ${tmp}`);

            const pos = position(tmp);

            this.map[pos[0]][pos[1]] = '1'; // Black brick

        }

        console.log("Map filled");

    }

    getMap() {
        return this.map;
    }
}

export default Board;
