() {
    let game = document.getElementById("game_container");
    
    function createTarget(randomLocation) {

    }

    let randomLocation = [];
    //[x coordinate, y coordinate]
    // randomly throw in perfectly horizontal targets
    // randomly throw in perfectly vertical targets

    function distance(array1,array2) {
        // distance takes in 2 arrays, the first array being the mouse [x,y] starting location, and the target[x,y] center location
        // use .reduce to return a new array with the absolute value of the distance between the two coordinates
        // 
        
        // test + edge cases __________below__________
        console.log(distance([2300,3000],[1300,2100])) /* [1000,900] */
        console.log(distance([500,3000],[1300,3100])) /* [800,100] */
    }
    
    let playZone = [[0,0],[10000,10000]];
    for (var i = 0; i < 10000; i++) {
        game.createElement("div")
    }
    
    function startGame() {
        // create grid for target to randomly spawn in
    }

    // track clicked dpi distance from target center dpi
    
    let result = 0;
    // result will be a positive percentage if the mouse kept overshooting the target.
}