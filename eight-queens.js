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

    context.fillStyle = '#666666'
    context.save();

    console.log(context);
  }


}

new EightQueens();
