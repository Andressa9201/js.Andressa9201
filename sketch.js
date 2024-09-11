function setup() {
    createCanvas(600, 600);
    background("rgb(12,12,12)");
  }
  
  function draw() {
    stroke("blue");
    fill("red");
  
    // console.log(mouseIsPressed)
  
    if (mouseIsPressed) {
      rect(mouseX, mouseY, 20, 35);
    }
  }