//Setup variables, size defines how many rows/columns
let size = 4;
let min = 0;
let max = size - 1;
let moved = false;
let excludeCells = [];
let score = 0;

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

    score = 0;
    document.getElementById("score").innerHTML = score;
}

//Function pickRandomCell selects a random cell within the playgrid using the min and max
function pickRandomCell() {
    var i = Math.floor(Math.random()*(max-min+1)+min);
    var j = Math.floor(Math.random()*(max-min+1)+min);
    return i + "" + j;
}


//Function up to be called when user uses up arrow key, performs all possible movements in "up" direction
function up() {
    moved = false;
    excludeCells = [];
    for(let j = min; j <= max; j++) {
        for(let i = min; i <= max; i++) {
	    let id = i + "" + j;
	    if(document.getElementById(id).innerHTML != "") {
	        if(!id.startsWith(min)) {
                    let idArray = id.split("");
                    let i = parseInt(idArray[0]);
                    let j = parseInt(idArray[1]);
                    for (let k = (i-1); k >= min; k--) {
                        let newCell = k + "" + j;
                        if(document.getElementById(newCell).innerHTML != "") {
                            let movedValue = parseInt(document.getElementById((k+1)+""+j).innerHTML);
                            let currentValue = parseInt(document.getElementById(newCell).innerHTML);
                            if(movedValue == currentValue) {
                                if(excludeCells.indexOf(newCell) == -1){
                                    excludeCells.push(newCell);
                                    document.getElementById(newCell).innerHTML = (movedValue+currentValue);
                                    document.getElementById((k+1)+""+j).innerHTML = "";
                                    moved = true;
                                    score += (movedValue + currentValue);
                                }
                                break;
                            }
                        }
                        else {
                            document.getElementById(newCell).innerHTML = document.getElementById((k+1)+""+j).innerHTML;
                            document.getElementById((k+1)+""+j).innerHTML = "";
                            moved = true;
                        }
                    }
                }
            }
        }
    }
    if(moved == true) {
        updateCheck();
    }
    return false;
}

//Function right to be called when user uses down arrow key, performs all possible movements in "right" direction
function right() {
    moved = false;
    excludeCells = [];
    for(let i = min; i <= max; i++) {
        for(let j = max; j >= min; j--) {
	    let id = i + "" + j;
	    if(document.getElementById(id).innerHTML != "") {
	        if(!id.endsWith(max)) {
                    let idArray = id.split("");
                    let i = parseInt(idArray[0]);
                    let j = parseInt(idArray[1]);
                    for (let k = (j+1); k <= max; k++) {
                        let newCell = i + "" + k;
                        if(document.getElementById(newCell).innerHTML != "") {
                            let movedValue = parseInt(document.getElementById(i+""+(k-1)).innerHTML);
                            let currentValue = parseInt(document.getElementById(newCell).innerHTML);
                            if(movedValue == currentValue) {
                                if(excludeCells.indexOf(newCell) == -1){
                                    excludeCells.push(newCell);
                                    document.getElementById(newCell).innerHTML = (movedValue+currentValue);
                                    document.getElementById(i+""+(k-1)).innerHTML = "";
                                    moved = true;
                                    score += (movedValue + currentValue);
                                }
                                break;
                            }
                        }
                        else {
                            document.getElementById(newCell).innerHTML = document.getElementById(i+""+(k-1)).innerHTML;
                            document.getElementById(i+""+(k-1)).innerHTML = "";
                            moved = true;
                        }
                    }
                }
            }
        }
    }
    if(moved == true) {
        updateCheck();
    }
    return false;
}


//Function down to be called when user uses down arrow key, performs all possible movements in "down" direction
function down() {
    moved = false;
    excludeCells = [];
    for(let i = min; i <= max; i++) {
        for(let j = max; j >= min; j--) {
	    let id = j + "" + i;
	    if(document.getElementById(id).innerHTML != "") {
	        if(!id.startsWith(max)) {
                    let idArray = id.split("");
                    let i = parseInt(idArray[0]);
                    let j = parseInt(idArray[1]);
                    for (let k = (i+1); k <= max; k++) {
                        let newCell = k + "" + j;
                        if(document.getElementById(newCell).innerHTML != "") {
                            let movedValue = parseInt(document.getElementById((k-1)+""+j).innerHTML);
                            let currentValue = parseInt(document.getElementById(newCell).innerHTML);
                            if(movedValue == currentValue) {
                                if(excludeCells.indexOf(newCell) == -1){
                                    excludeCells.push(newCell);
                                    document.getElementById(newCell).innerHTML = (movedValue+currentValue);
                                    document.getElementById((k-1)+""+j).innerHTML = "";
                                    moved = true;
                                    score += (movedValue + currentValue);
                                }
                                break;
                            }
                        }
                        else {
                            document.getElementById(newCell).innerHTML = document.getElementById((k-1)+""+j).innerHTML;
                            document.getElementById((k-1)+""+j).innerHTML = "";
                            moved = true;
                        }
                    }
                }
            }
        }
    }
    if(moved == true) {
        updateCheck();
    }
    return false;
}


//Function left to be called when user uses left arrow key, performs all possible movements in "left" direction
function left() {
    moved = false;
    excludeCells = [];
    for(let i = min; i <= max; i++) {
        for(let j = min; j <= max; j++) {
	    let id = i + "" + j;
	    if(document.getElementById(id).innerHTML != "") {
	        if(!id.endsWith(min)) {
                    let idArray = id.split("");
                    let i = parseInt(idArray[0]);
                    let j = parseInt(idArray[1]);
                    for (let k = (j-1); k >= min; k--) {
                        let newCell = i + "" + k;
                        if(document.getElementById(newCell).innerHTML != "") {
                            let movedValue = parseInt(document.getElementById(i+""+(k+1)).innerHTML);
                            let currentValue = parseInt(document.getElementById(newCell).innerHTML);
                            if(movedValue == currentValue) {
                                if(excludeCells.indexOf(newCell) == -1){
                                    excludeCells.push(newCell);
                                    document.getElementById(newCell).innerHTML = (movedValue+currentValue);
                                    document.getElementById(i+""+(k+1)).innerHTML = "";
                                    moved = true;
                                    score += (movedValue + currentValue);
                                }
                                break;
                            }
                        }
                        else {
                            document.getElementById(newCell).innerHTML = document.getElementById(i+""+(k+1)).innerHTML;
                            document.getElementById(i+""+(k+1)).innerHTML = "";
                            moved = true;
                        }
                    }
                }
            }
        }
    }
    if(moved == true) {
        updateCheck();
    }
    return false;
}

//Function updateCheck to be called each time when move has been performed
//updates playgrid and checks if game is over
function updateCheck() {		
    let emptyCells = [];
    //Push all ids of empty cells in array emptyCells
    for(let i = min; i <= max; i++) {
        for(let j = min; j <= max; j++) {
            let cell = i + "" + j;
            if(document.getElementById(cell).innerHTML == "") {
	        emptyCells.push(cell);
            }
        }
    }
    //Pick one random empty cell from array emptyCells and fill it with value 2
    let cell = emptyCells[Math.floor(Math.random()*emptyCells.length)];
    document.getElementById(cell).innerHTML = "2";
    let allCellsFilled = true;
    //Check if any furhter empty cells in table
    for(let i = min; i <= max; i++) {
        for(let j = min; j<= max; j++) {
	    let id = i + "" + j;
	    if(document.getElementById(id).innerHTML == "") {
	        allCellsFilled = false;
		break;
            }
        }
    }	
    document.getElementById("score").innerHTML = score;	
    //If all cells are filled check if other movement possible 
    //Check if adjacent tiles with the same value in each column 
    if(allCellsFilled) {
        let gameOver = true;
        for(let j = min; j <= max; j++) {
            for(let i = min; i <= (max-1); i++) {
                let valAbove = parseInt(document.getElementById(i+""+j).innerHTML);
                let valBelow = parseInt(document.getElementById((i+1)+""+j).innerHTML);
                if(valAbove == valBelow) {
                    gameOver = false;
                    break;
                }
            }
        }	
        //Check if adjacent tiles with the same value in each row	
	    if(gameOver == true) {
            for(let i = min; i <= max; i++) {
                for(let j = min; j <= (max-1); j++) {
                    let valLeft = parseInt(document.getElementById(i+""+j).innerHTML);
                    let valRight = parseInt(document.getElementById(i+""+(j+1)).innerHTML);
                    if(valLeft == valRight) {
                        gameOver = false;
                        break;
                    }
                }
            }
        }
        //Alert user when game over    
	    if(gameOver) {
            alert("Game over!");
        }
        return false;
    }
}


//Call functions up, right, down, left depending on user input
//Use cursor keys to call functions
//prevent default action to scroll with preventDefault()
document.onkeydown = function(e) {
    e.preventDefault();
    switch (e.keyCode) {
        case 37:
	    left();
	    break;
	case 38:
	    up();
	    break;
	case 39:
	    right();
	    break;
	case 40:
	    down();
	    break;
    }
}


//Call setup function to start game
setup();