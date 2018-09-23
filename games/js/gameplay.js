import Player from "./Player.js";
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

    // Set players :
    const playerOne = new Player("Bill",120, "player1");
    const playerTwo = new Player("George", 100, "player2");

    myBoard.addPlayer(playerOne);
    myBoard.addPlayer(playerTwo);

    myBoard.spotPlayer(0);
    myBoard.spotPlayer(1);

    // add weapons...

    // retrieve the map and organize the display :
    myBoard.getMap().forEach(function(elt) {

        console.log("New line from map");

        html += "<tr>";

        elt.forEach(function(item) {
            html += `<td class="${(item === '1')?"black":""}">`;

            if (item !== '1' && item !== '0')
                html += `${item}`;

            html += `</td>`;
        });

        html += "</tr>";

    });

    html += "</table>";

    $("#board").append(html);

});
