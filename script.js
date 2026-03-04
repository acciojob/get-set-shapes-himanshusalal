complete this code
class Rectangle {}

class Square extends Animal {}

// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;
class Rectangle {
  constructor(width, height) {
    if (width <= 0 || height <= 0) {
      throw new Error("Width and height must be positive integers");
    }

    this._width = width;
    this._height = height;
  }

  // Getter for width
  get width() {
    return this._width;
  }

  // Getter for height
  get height() {
    return this._height;
  }

  // Method to calculate area
  getArea() {
    return this._width * this._height;
  }
}

class Square extends Rectangle {
  constructor(side) {
    if (side <= 0) {
      throw new Error("Side must be a positive integer");
    }

    // Call parent constructor
    super(side, side);
  }

  // Method to calculate perimeter
  getPerimeter() {
    return this.width * 4;
  }
}

// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;