class TypeOfArray {
	constructor (buffer = new ArrayBuffer(24)) {
		this.buffer = buffer;
	}
	set buffer (buffer) {
		this._buffer = buffer;
		this._id = new Uint32Array (this._buffer, 0, 1);
		this._name = new Uint8Array (this._buffer, 4, 16);
		this._amount = new Float32Array(this._buffer, 20, 1);
	}
	get buffer () { 
		return this._buffer; 
  }
		set id (v) { 
			this._id[0] = v; 
  }
	get id () { 
		return this._id[0]; 
  }
	set name (v) { 
		this._name[0] = v; 
  }
	get name () { 
		return this._name[0]; 
  }
	set amount (v) { 
		this._amount[0] = v; 
  }
	get amount () { 
		return this._amount[0]; 
  }
}

let arr = new TypeOfArray();

arr.id = 2;
arr.name = "John Doe";
arr.amount = 21.0;
