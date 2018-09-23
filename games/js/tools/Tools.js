"use strict";

class Tools {

    /**
     * Convert 1D position to 2D
     * @param pos1D
     * @param line
     * @param col
     * @returns {number[]}
     */
    static position(pos1D, line, col) {

        let l = parseInt(pos1D / line);
        let c = parseInt(pos1D % col);

        console.log(`position (${l},${c})`);

        return [l,c];
    }
}

export default Tools;
