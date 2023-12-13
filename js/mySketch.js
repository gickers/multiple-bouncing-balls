//This is our main javascript file constituting our p5.js sketch.
//It must be loaded from index.html
//It assumes that the file "myPalettes.js" has also been loaded

let bouncingBalls = []

function setup() {
	createCanvas(windowWidth/2, windowHeight/2);
for (let i=0; i < 10; i++){
	let b = new bouncingBall(random(width),random(height),random(10,50),random(10),random(10));
		bouncingBalls.push(b);
}
}
	function mousePressed (){
		for (let i = 0; i < bouncingBalls.length; i++) {
    bouncingBalls[i].clicked(mouseX, mouseY);
	}
	}



function draw() {
	background(0);
	for (let i = 0; i < bouncingBalls.length; i++){
		bouncingBalls[i].move();
		bouncingBalls[i].show();
	}
}

class bouncingBall {
	constructor(x, y, r,xSpeed,ySpeed) {
		this.x = x;
		this.y = y;
		this.r = r;
		this.speedX = xSpeed
		this.speedY = ySpeed
		this.red = 0
		this.g = 0
		this.b = 0
	}

	move() {
		this.x += this.speedX;
		this.y += this.speedY;
		if (this.x > width - this.r || this.x < this.r) {
			this.speedX = -this.speedX
			
		}
		if (this.y > height - this.r || this.y < this.r) {
			this.speedY = -this.speedY;
		}
	}
 clicked(positionX, positionY) {
    let d = dist(positionX, positionY, this.x, this.y);
    if (d < this.r) {
      this.red = + random(255);
			this.g = + random(255);
			this.b = + random(255);
		}
 }
	show() {
		stroke(255);
		strokeWeight(4);
		fill(this.red,this.g,this.b);
		ellipse(this.x, this.y, this.r * 2);
	}
}
