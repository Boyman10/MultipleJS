//import Player from "./Player";
import Board from "./Board.js";

/**
 * Here we do things
 **/
$(function(){

    console.log("here we are game play...");

    // Draw a table with cells
    let html = "<table>";

    // generate the board
    const myBoard = new Board(10,10,10);
    myBoard.buildBoard();

    // add weapons...

    // retrieve the map and organize the display :
    myBoard.getMap().forEach(function(elt) {

        console.log("New line from map");

        html += "<tr>";

        elt.forEach(function(item) {
            html += `<td class="${(item === '1')?"black":""}"></td>`;
        });

        html += "</tr>";

    });

    html += "</table>";

    $("#board").append(html);

});
