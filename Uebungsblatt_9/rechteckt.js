let Rechteck = function(top, left, width, height, color){
    this._top = top;
    this._left = left;
    this._width = width;
    this._height = height;
    this.color = color;
}

Rechteck.prototype.draw(context){
    this._context = context;
};

let viereck = new Rechteck(5, 5, 5, 5, )