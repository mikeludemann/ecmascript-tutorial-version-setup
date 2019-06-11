class Shape {
	constructor (id, x, y) {
		this.id = id;
		this.move(x, y);
	}
	move (x, y) {
		this.x = x;
		this.y = y;
	}
  toString () {
    return `Shape(${this.id})`
  }
}

class Rectangle extends Shape {
	constructor (id, x, y, width, height) {
		super(id, x, y);
		this.width = width;
		this.height = height;
  }
  set width (width) { 
    this._width = width; 
  }
  get width () { 
    return this._width;
  }
  set height (height) { 
    this._height = height;
  }
  get height () { 
    return this._height;
  }
  get area () { 
    return this._width * this._height;
  }
  toString () {
    return "Rectangle > " + super.toString();
  }
  static defaultRectangle () {
    return new Rectangle("default", 0, 0, 100, 100);
  }
}

class Circle extends Shape {
	constructor (id, x, y, radius) {
		super(id, x, y);
		this.radius = radius;
	}
  set radius (radius) { 
    this.radius = radius; 
  }
  get radius () { 
    return this.radius;
  }
  get area () { 
    return 2 * this.radius * Math.PI;
  }
  toString () {
    return "Circle > " + super.toString();
  }
  static defaultCircle () {
    return new Circle("default", 0, 0, 100);
  }
}