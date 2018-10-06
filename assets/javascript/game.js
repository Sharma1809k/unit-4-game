var wins = 0;
var losses = 0;
var score = 0;
var random, red, blue, yellow, green;
computerChoice = [];

$(document).ready(function () {

    function reset() {
        random = Math.floor(Math.random() * 102) + 19;
        console.log(" computerChoice " + random);

        $("#computerChoice").text(random);

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

        $("#wins").text("Wins : " + wins);
        $("#losses").text("Losses : " + losses);
    };
    reset();
});



