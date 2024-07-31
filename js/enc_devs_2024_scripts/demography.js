// Ensure the sketches are defined only once in their respective scopes
(function() {
  const sketch1 = (p) => {
    p.setup = () => {
      p.createCanvas(400, 400).parent('canvas1');
    };

    p.draw = () => {
      p.background(220);
      p.ellipse(200, 200, 50, 50);
    };
  };

  const sketch2 = (p) => {
    p.setup = () => {
      p.createCanvas(400, 400).parent('canvas2');
    };

    p.draw = () => {
      p.background(220);
      p.ellipse(200, 200, 50, 50);
    };
  };

  new p5(sketch1);
  new p5(sketch2);
})();

