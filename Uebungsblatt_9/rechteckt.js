class Rechteck {
    constructor(left, top, width, height, color) {
        this.left = left;
        this.top = top;
        this.width = width;
        this.height = height;
        this.color = color;
    }

    draw(context) {
        context.fillStyle = this.color;
        context.fillRect(this.left, this.top, this.width, this.height);
    }
}

const getRandomInt = (max) => {
    return Math.floor(Math.random() * (max + 1));
};

const rectangle = new Rechteck(50, 5, 200, 100, "red");
const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");
const btnDelete = document.getElementById("delete");

const rectangles = [];
rectangles.push(rectangle);

rectangle.draw(context);

canvas.onclick = (e) => {
    const rectangle = new Rechteck(
        e.layerX,
        e.layerY,
        getRandomInt(canvas.width - e.layerX),
        getRandomInt(canvas.height - e.layerY),
        `rgb(${getRandomInt(256)}, ${getRandomInt(256)}, ${getRandomInt(256)})`
    );
    rectangle.draw(context);
    rectangles.push(rectangle);
};

btnDelete.onclick = () => {
    context.clearRect(0, 0, canvas.width, canvas.height);
};
