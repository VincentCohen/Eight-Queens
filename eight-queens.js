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

    let blockSize = 50;

    for (var i = 0; i < 8; i++) {
        context.fillStyle = '#666';
        if (i % 2)
        {
          context.fillStyle = '#fFF';
        }

        if (i > 7)
        {
          context.fillStyle = '#ff0000';
        }

        context.fillRect( i * blockSize, 0, blockSize, blockSize);
        context.fillStyle = '#ff0000';
        context.fillText('NR ' + (i+1), i * (blockSize), blockSize/2);
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
