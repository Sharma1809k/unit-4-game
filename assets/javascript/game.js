// Make our global variables.
var wins = 0;
var losses = 0;
var score = 0;
var random, red, blue, yellow, green;
computerChoice = [];

// JavaScript ready function that wraps everything.

$(document).ready(function () {

//Reset function that reset the game when win or lose without refreshing the game so we can keep track of wins and losses.

    function reset() {

// Game selecting a random number as a target.

        random = Math.floor(Math.random() * 102) + 19;
        console.log(" computerChoice " + random);

        $("#computerChoice").text(random);

//Each crystal selecting a ramdon number. 

        red = Math.floor(Math.random() * 12) + 1;
        console.log(" red " + red);

        blue = Math.floor(Math.random() * 12) + 1;
        console.log(" blue " + blue);

        yellow = Math.floor(Math.random() * 12) + 1;
        console.log(" yellow " + yellow);

        green = Math.floor(Math.random() * 12) + 1;
        console.log(" green " + green);

        score = 0;
    }

// By clicking on crystals user gets points added in their score.

    $("#red").on("click", function () {
        score = score + red;
        $(".score").text(score);
        console.log("total " + score)
    });

    $("#blue").on("click", function () {
        score = score + blue;
        $(".score").text(score);
        console.log("total " + score)
    });

    $("#yellow").on("click", function () {
        score = score + yellow;
        $(".score").text(score);
        console.log("total " + score)
    });

    $("#green").on("click", function () {
        score = score + green;
        $(".score").text(score);
        console.log("total " + score)
    });

// Determining if the user wins or lose.

    document.onclick = function () {

        if (score === random) {
            wins++;
            $("#text").text("You Won!!!");
            reset();
            $(".score").text(score = 0)
        }

        else if (score >= random) {
            losses++;
            $("#text").text("You lost!!!");
            reset();
            $(".score").text(score = 0)
        }
// Keeping track of wins and losses.

        $("#wins").text("Wins : " + wins);
        $("#losses").text("Losses : " + losses);
    };
    
// Resetting.

    reset();
});



