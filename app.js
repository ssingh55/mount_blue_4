// require timer.js
// close icon in modal
 let closeicon = document.querySelector(".close");

 // declare modal
 let modal = document.getElementById("popup1")

var memory_array = ['A','B','B','A','C','D','E','F','G','H','C','D','E','F','G','H'];
var memory_values = [];
var memory_tile_ids = [];
var tiles_flipped = 0;
var count = 0;

Array.prototype.memory_tile_shuffle = function() {
    var i = this.length,
        j, temp;
    while (--i > 0) {
        j = Math.floor(Math.random() * (i + 1));
        temp = this[j];
        this[j] = this[i];
        this[i] = temp;
    }
}
//restart button
function reload(){
	window.location.reload();
}

//tiles flipped
const board = document.querySelector('#memory_board');
console.log(board);
board.addEventListener('click', function(e) {
    if (e.target.className == 'tile_count') {
        count++;
         document.getElementById('tries').innerHTML = "No. of moves: "+ count;
    }
});

function newBoard() {
    tiles_flipped = 0;
    var output = '';
    memory_array.memory_tile_shuffle();
    for (var i = 0; i < memory_array.length; i++) {
        output += '<div class="tile_count" id="tile_' + i + '" onclick="memoryFlipTile(this,\'' + memory_array[i] + '\')"></div>';
    }
    document.getElementById('memory_board').innerHTML = output;
    document.getElementById("tries").innerHTML = "No. of moves: "+ 0;
    document.getElementById("submit").setAttribute('onclick', 'showDialog();');
  //  timer();
}

function memoryFlipTile(tile, val) {
    if (tile.innerHTML == "" && memory_values.length < 2) {
        tile.style.background = '#FFF';
        tile.innerHTML = val;
        if (memory_values.length == 0) {
            memory_values.push(val);
            memory_tile_ids.push(tile.id);
        } else if (memory_values.length == 1) {
            memory_values.push(val);
            memory_tile_ids.push(tile.id);
            if (memory_values[0] == memory_values[1]) {
                tiles_flipped += 2;
                // Clear both arrays
                memory_values = [];
                memory_tile_ids = [];
                // Check to see if the whole board is cleared
                if (tiles_flipped == memory_array.length) {
                    // alert("Board cleared... generating new board");
                    document.getElementById('complete').innerHTML = "Completed";
                    document.getElementById('submit').innerHTML = "Start Again";
                    document.getElementById("submit").setAttribute('onclick', 'reload();');
                    clearInterval(x);
                    document.getElementById('finalMove').innerHTML=count;
                    document.getElementById('totalTime').innerHTML=document.getElementById('countdown').textContent;
                    showDialog1();
                    // document.getElementById('memory_board').innerHTML = "";//to make it null after game completion
                    // newBoard();//to display new board automatically
                }
            } else {
                function flip2Back() {
                    // Flip the 2 tiles back over
                    var tile_1 = document.getElementById(memory_tile_ids[0]);
                    var tile_2 = document.getElementById(memory_tile_ids[1]);
                    tile_1.style.background = 'url(small-rocket-ship-silhouette.png) no-repeat';
                    tile_1.innerHTML = "";
                    tile_2.style.background = 'url(small-rocket-ship-silhouette.png) no-repeat';
                    tile_2.innerHTML = "";
                    // Clear both arrays
                    memory_values = [];
                    memory_tile_ids = [];
                }
                setTimeout(flip2Back, 700);
            }
        }
    }
}
