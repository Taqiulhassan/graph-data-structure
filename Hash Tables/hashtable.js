class HashTable {
  constructor(size) {
    this.data = new Array(size);
  }

  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
      console.log(hash);
    }
    return hash;
  }
  //Big O(1)

  set(key, value) {
    let address = this._hash(key);

    if (!this.data[address]) {
      this.data[address] = [];
    }
    this.data[address].push([key, value]);
    return this.data;
  }
  //Big O(1)

  get(key) {
    let address = this._hash(key);
    const currentBucket = this.data[address];
    console.log(currentBucket);
    if (currentBucket) {
      for (let i = 0; i < currentBucket.length; i++) {
        if (currentBucket[i][0] === key) {
          return currentBucket[i][1];
        }
      }
    }
    return undefined;
    //Big O(1)
  }
  0;

  keys() {
    const keysArray = [];
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i]) {
        keysArray.push(this.data[i][0][0]);
      }
    }
    return keysArray;
  }

  // Teacher wala for...in method:
  keys() {
    const keysArray = [];

    for (let index in this.data) {
      // Sirf un indices par chalega jahan data hai
      const bucket = this.data[index];
      for (let i = 0; i < bucket.length; i++) {
        keysArray.push(bucket[i][0]);
      }
    }

    return keysArray;
    //Big O(1)
  }
}

const myHashTable = new HashTable(50);
console.log(myHashTable.set('grapes', 10000));
console.log(myHashTable.set('apples', 54));
console.log(myHashTable.set('oranges', 12));
console.log(myHashTable.get('grapes'));
console.log(myHashTable.keys());

//The time complexity of this program is Big O(1)......
