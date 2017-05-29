// IIFE - Immediately Invoked Function Expression
(function () {

    var canvas;
    var stage;
    var helloLabel;
    var rock;
    var switcher = 1;
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

        topLeftQ = new createjs.Rectangle(0,0,595,460);
        // Start the game
        Game();
    }

    // called every frame
    function Update() {

        helloLabel.rotation += 5;
        
        switch(switcher)
        {
            case 1:
                rock.x += 5;
                if(rock.x==(topLeftQ.width)){
                    switcher = 2;
                    console.log(switcher);
                    console.log(topLeftQ.height);
                }  
            break;
            case 2:
                rock.y += 5;
                if(rock.y==(topLeftQ.height)){
                    switcher = 3;
                    console.log(switcher);
                }  
            break;
            case 3:
                rock.x -= 5;
                if(rock.x==((topLeftQ.width)-(topLeftQ.width))){
                    switcher = 4;
                    console.log(switcher);
                }  
            break;
            case 4:
                rock.y -= 5;
                if(rock.y==((topLeftQ.height)-(topLeftQ.height))){
                    switcher = 1;
                    console.log(switcher);
                }  
            break;
        }
        
        

        stage.update();
    }

    function Game() {
        console.log("Game Started....");

        helloLabel = new createjs.Text("Hello, World", "60px Consolas", "#000000");
        helloLabel.regX = helloLabel.getMeasuredWidth() * 0.5;
        helloLabel.regY = helloLabel.getMeasuredHeight() * 0.5;
        helloLabel.x = 320;
        helloLabel.y = 240;

        rock = new createjs.Text("Rock", "20px serif", "#234");


        stage.addChild(helloLabel);
        stage.addChild(rock);



    }

    
    window.onload = Start;


})();