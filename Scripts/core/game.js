/*jshint esversion: 6 */

// IIFE - Immediately Invoked Function Expression
(function () {

    var canvas;
    var stage;
    var helloLabel;
    var rSpeed = 3;
    var topLeftQ;
    
    

    function Start() {
        // reference to the canvas element on the index.html
        canvas = document.getElementById("canvas");

        // setup the createjs stage container
        stage = new createjs.Stage(canvas);

        // set the framerate to 60fps
        createjs.Ticker.framerate = 60;

        // call the Update function every frame
        createjs.Ticker.on("tick", Update);

        //create rectangle rockText moves inside of 
        topLeftQ = new createjs.Rectangle(0,0,595,460);


        
        // Start the game
        Game();
    }

    // called every frame
    function Update() {
        helloLabel.rotation += rSpeed; 
        stage.update();
    }

    function Game() {
        console.log("Game Started....");

        helloLabel = new createjs.Text("Hello, World", "60px Consolas", "#000000");
        helloLabel.regX = helloLabel.getMeasuredWidth() * 0.5;
        helloLabel.regY = helloLabel.getMeasuredHeight() * 0.5;
        helloLabel.x = 320;
        helloLabel.y = 240;


        stage.addChild(helloLabel);
        stage.addChild(_asteroid.spawn);
    }


    window.onload = Start;
})();