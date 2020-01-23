console.log('getting this site going');

var canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


var c = canvas.getContext('2d'); // the variable c stands for context


//Bezier Curve
    // c.beginPath();
    // c.moveTo(75,40);
    // c.bezierCurveTo(75,37,70,25,50,25);
    // c.fill();


// Squares
    // c.fillStyle = 'rgba(255, 370, 30, 0.75)';
    // c.fillRect(100, 100, 100, 100); // c.fillRect(x, y, width, heigh)
    // c.fillStyle = 'rgba(255, 100, 100)';
    // c.fillRect(400, 100, 100, 100);
    // c.fillStyle = 'rgba(100, 255, 0, 0.75)';
    // c.fillRect(300, 300, 100, 100);
    // console.log(canvas);

//Line
    // c.beginPath();
    // c.moveTo(50, 300); // c.moveTo(x, y)
    // c.lineTo(300, 100);
    // c.lineTo(400, 300);
    // c.strokeStyle = "#fa34a4";
    // c.stroke();

// Arc or Circle
    // c.beginPath();
    // c.arc(300, 300, 30, 0, Math.PI * 2, false);  // arc(x: number, y: number, radius: number, startAngle: number, endAngle: number, anticlockwise?: boolean): void
    // c.strokeStyle = 'blue';
    // c.stroke();


// for loop for creating space background
    // for (var i = 0; i < 250; i++) {
    //     var x = Math.random() * window.innerWidth;
    //     var y = Math.random() * window.innerHeight;

    //     c.beginPath();
    //     c.arc(x, y, 1, 0, Math.PI * 2, false);  // arc(x: number, y: number, radius: number, startAngle: number, endAngle: number, anticlockwise?: boolean): void
    //     c.strokeStyle = 'rgba(255, 255, 255, 0.3)';
    //     c.stroke();
    //     c.fillStyle = 'rgba(255,255,255, 0.3)';
    //     c.fill();
    // }


    // for (var i = 0; i < 100; i++) {
    //     var x = Math.random() * window.innerWidth;
    //     var y = Math.random() * window.innerHeight;

    //     c.beginPath();
    //     c.arc(x, y, 0.75, 0, Math.PI * 2, false);  // arc(x: number, y: number, radius: number, startAngle: number, endAngle: number, anticlockwise?: boolean): void
    //     c.strokeStyle = 'rgba(44, 130, 201, 0.25)';
    //     c.stroke();
    //     c.fillStyle = 'rgba(44, 130, 201, 0.25)';
    //     c.fill();
    // }


// c.beginPath();
// c.arc(200, 200, 30, 0, Math.PI * 2, false);  // arc(x: number, y: number, radius: number, startAngle: number, endAngle: number, anticlockwise?: boolean): void
// c.strokeStyle = 'rgba(44, 130, 201, 0.25)';
// c.stroke();
// c.fillStyle = 'rgba(44, 130, 201, 0.25)';
// c.fill();

var mouse = {
    x: undefined,
    y: undefined
}

var maxRadius = 40;
// var minRadius = 2;

var colorArray = [
    '#ffffff',
    '#c0c5ce',
    '#a7adba',
    '#343d46',
    '#4f5b66'
];

console.log(colorArray.length);

window.addEventListener('mousemove', 
    function(event){
    mouse.x = event.x;
    mouse.y = event.y;
    console.log(mouse);
})

window.addEventListener('resize', function() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    init();
})

function Circle(x, y, dx, dy, radius) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;
    this.minRadius = radius;
    this.color = colorArray[Math.floor(Math.random() * colorArray.length)]; // removing this as a property and setting the fill style directly as the random color array causes a blining effect

    this.draw = function() {
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);  // arc(x: number, y: number, radius: number, startAngle: number, endAngle: number, anticlockwise?: boolean): void
        // c.strokeStyle = 'rgba(44, 130, 201, 0.25)';
        // c.stroke();
        c.fillStyle = this.color;
        c.fill();
    }

    this.update = function() {
        if (this.x + this.radius > innerWidth || this.x - this.radius < 0){
            this.dx = -this.dx;
        }
        
        if (this.y + this.radius > innerHeight || this.y - this.radius < 0){
            this.dy = -this.dy;
        }
    
        this.x += this.dx;
        this.y += this.dy;

        // interactivity
            // if (mouse.x - this.x < 50 && mouse.x - this.x > -50 && mouse.y - this.y < 50 && mouse.y - this.y > -50) {
            // if (this.radius < maxRadius) {
            //       this.radius += 1;
            //      }  
            //     }
            // else if (this.radius > this.minRadius) {
            //      this.radius -= 1;
            //     }
        
        this.draw();
    }
}

var circleArray = [];

function init() {

    circleArray = [];



function Circles() {
    var radius = Math.random() * 0.05 + 1;
        var x = Math.random() * (innerWidth - radius * 2) + radius;
        var y = Math.random() * (innerHeight - radius * 2) + radius;
        var dx = (Math.random() - 0.5) * 0.12;
        var dy = (Math.random() - 0.5) * 0.12;
        circleArray.push(new Circle(x, y, dx, dy, radius));
}

// if/else setting amount of generated circles based on screen size   
if (canvas.width < 768){
    for (var i = 0; i < 350; i++) {
        //initally this code was directly inside the init() function, extracted it out into the Circles() function to avoid code duplication when using the if/else condition for screen size
            // var radius = Math.random() * 0.75 + 1;
            // var x = Math.random() * (innerWidth - radius * 2) + radius;
            // var y = Math.random() * (innerHeight - radius * 2) + radius;
            // var dx = (Math.random() - 0.5) * 0.12;
            // var dy = (Math.random() - 0.5) * 0.12;
            // circleArray.push(new Circle(x, y, dx, dy, radius));
        Circles();
    }
}
else {
    for (var i = 0; i < 750; i++) {
         //initally this code was directly inside the init() function, extracted it out into the Circles() function to avoid code duplication when using the if/else condition for screen size
            // var radius = Math.random() * 0.75 + 1;
            // var x = Math.random() * (innerWidth - radius * 2) + radius;
            // var y = Math.random() * (innerHeight - radius * 2) + radius;
            // var dx = (Math.random() - 0.5) * 0.12;
            // var dy = (Math.random() - 0.5) * 0.12;
            // circleArray.push(new Circle(x, y, dx, dy, radius));
        Circles();
    }

}
}

function animate() { 
    requestAnimationFrame(animate);
    c.clearRect(0, 0, innerWidth, innerHeight);


    for (var i = 0; i < circleArray.length; i++) {
        circleArray[i].update();

    }
    // c.beginPath();
    // c.arc(x, y, radius, 0, Math.PI * 2, false);  // arc(x: number, y: number, radius: number, startAngle: number, endAngle: number, anticlockwise?: boolean): void
    // c.strokeStyle = 'rgba(44, 130, 201, 0.25)';
    // c.stroke();
    // c.fillStyle = 'rgba(44, 130, 201, 0.25)';
    // c.fill();
} 

init();
animate();

