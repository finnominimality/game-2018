//Setup variables, size defines how many rows/columns
let size = 4;
let min = 0;
let max = size - 1;

//Function setup creates the game field and sets initial values in two random cells
function setup() {
    let htmlTable = "";
	for(let row = 0; row <size ;row++) {
		htmlTable += "<tr>";
		for(let column = 0; column < size; column++) {
			let id = row + "" + column;
            htmlTable += '<td id="'+id+'"></td>';
		}
		htmlTable += "</tr>";
	}
    document.getElementById("playgrid").innerHTML = htmlTable;
    
    let cell1 = pickRandomCell();
    let cell2 = "";
    while(true) {
        cell2 = pickRandomCell();
	if(cell1 != cell2)
	break;
    }
    document.getElementById(cell1).innerHTML = "2";
    document.getElementById(cell2).innerHTML = "2";
}

//Function pickRandomCell selects a random cell within the playgrid using the min and max
function pickRandomCell() {
    var i = Math.floor(Math.random()*(max-min+1)+min);
    var j = Math.floor(Math.random()*(max-min+1)+min);
    return i + "" + j;
}

//Call setup function to start game
setup();