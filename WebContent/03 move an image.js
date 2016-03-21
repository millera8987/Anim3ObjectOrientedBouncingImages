
var game = new Phaser.Game(800, 480, Phaser.AUTO, 'phaser-example', { preload: preload, create: create, update: update });

var MySprite = function(x,y,dx,dy,width,height, who){
	this.x = x;
	//this.y = y;
	this.dx = dx;
	this.dy = dy;
	this.width = width;
	this.height = height;
	this.image = game.add.sprite(x, y, who);
	this.image.scale.setTo(width/this.image.width, height/this.image.height);
	this.bounceAmount = dy;
	this.y = y - this.image.height;
	
	this.move = function(bb){
		
		
		this.y+=this.dy;
		
		this.image.y = this.y;
		this.dy += 0.1;
		if ((this.dy > 0 && this.y + this.dy + this.height > bb)){
			this.dy = this.bounceAmount;
		}
	};
	
	this.toString = function(){
		return "" + this.image.x + ", " + this.image.y + "--" + this.dx + ", " + this.dy + " - " + this.image.width;
	};
};

var text;
var basketball,golfball,soccerball,tennisball,volleyball;



function preload() {

    //  You can fill the preloader with as many assets as your game requires

    //  Here we are loading an image. The first parameter is the unique
    //  string by which we'll identify the image later in our code.

    //  The second parameter is the URL of the image (relative)
    game.load.image('basketball', 'assets/pics/basketball1.png');
    game.load.image('golfball', 'assets/pics/golfball.png');
    game.load.image('soccerball', 'assets/pics/soccerBall.png');
    game.load.image('tennisball', 'assets/pics/tennisball.png');
    game.load.image('volleyball', 'assets/pics/volleyball.png');
    
    game.load.image('background', 'assets/pics/background.png');
    
}

function create() {

    //  This creates a simple sprite that is using our loaded image and
    //  displays it on-screen
    //  and assign it to a variable
   // var image = game.add.sprite(0, 0, 'einstein');

    //game.physics.enable(image, Phaser.Physics.ARCADE);

    //image.body.velocity.x=150;
	var background = new MySprite(0,0,0,0,game.width,game.height,'background');
	
	basketball = new MySprite(game.width/6,game.height,0,-9,100,100,'basketball');
	golfball = new MySprite(2*game.width/6,game.height,0,-6,50,50,'golfball');
	soccerball = new MySprite(3*game.width/6,game.height,0,-7,90,90,'soccerball');
	tennisball = new MySprite(4*game.width/6,game.height,0,-4,60,60,'tennisball');
	volleyball = new MySprite(5*game.width/6,game.height,0,-8,80,80,'volleyball');
	
	

	
	 //var style = { font: "bold 32px Arial", fill: "#fff", boundsAlignH: "center", boundsAlignV: "middle" };

    //  The Text is positioned at 0, 100
    //text = game.add.text(0, 200, "Hello", style);

}

function update() {
	//text.text = bug1.toString();
	basketball.move(game.height);
	golfball.move(game.height);
	soccerball.move(game.height);
	tennisball.move(game.height);
	volleyball.move(game.height);
}


