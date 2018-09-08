"use strict";

class Board {


    constructor(col = 10, line = 10, difficulty = 10) {

        this.col = col;
        this.line = line;
        this.difficulty = difficulty;
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

        this.spotDifficulties();

    }

    spotDifficulties() {

        const position = (x) => {

            const l = x / this.col;
            const c = x % this.line;

            if (l > 0) {
                c--;
                l++;
            }

            return [c,l];
        }

        for(let i = 0;i < this.difficulty; i++) {

            const tmp = Math.floor(Math.random() * this.col * this.line);

            console.log(`Here is the generated number ${tmp}`);

            const pos = position(tmp);
            this.map[pos[0]][pos[1]] = '1'; // Black brick

        }
    }
}