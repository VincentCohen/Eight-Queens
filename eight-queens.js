class EightQueens {

  constructor() {
    this.canvasId = 'board';
    this.canvasWidth = 400
    this.canvasHeight = 400

    // initialise canvas
    this.board();
  }

  board ()
  {
    this.canvas = document.createElement("canvas");
    this.canvas.width     = this.canvasHeight;
    this.canvas.height    = this.canvasWidth;

    var context = this.canvas.getContext("2d");
    var black = '#826850';
    var white = '#fff';

    let blockSize = 50;
    for (var y = 0; y < 8; y++) {
      for (var x = 0; x < 8; x++) {
          var fillColor = black;
          if (x % 2)
          {
            fillColor = white;
          }

          if ( (y % 2) == 1)
          {
            fillColor = white;
            if (x % 2)
            {
              fillColor = black;
            }
          }

          context.fillStyle = fillColor;
          context.fillRect( x * blockSize, y * blockSize, blockSize, blockSize);
          context.fillStyle = '#ff0000';
          context.fillText('X' + x + ' Y' + y, x * blockSize, y * blockSize);
      }
    }

    // context.fillStyle = '#666666';
    // context.fillRect( 0, 0, 100, 100);
    // context.fillStyle = '#777';
    // context.fillRect( 100, 0, 100, 100);
    // context.fillStyle = '#666666';
    // context.fillRect( 200, 0, 100, 100);
    // context.fillStyle = '#777';
    // context.fillRect( 300, 0, 100, 100);
    // context.fillStyle = '#666666';
    // context.fillRect( 400, 0, 100, 100);
    context.save();


    console.log(context);

    document.body.appendChild(this.canvas);
  }

}

new EightQueens();
