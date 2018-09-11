import Player from "./Player";
import Board from "./Board";

/**
 * Here we do things
 **/
$.ready(function(){

    // Draw a table with cells
    let html = "<table>";

    // generate the board
    const myBoard = new Board(10,10,10);
    myBoard.buildBoard();

    // add weapons...

    // Show the map :
    myBoard.getMap().forEach(function(elt) {

        html += "<tr>";

        elt.forEach(function(item) {
            html += `<td class="${(item === 1)?"black":""}"></td>`;
        });

        html += "</tr>";

    });

    html += "</table>";

});
