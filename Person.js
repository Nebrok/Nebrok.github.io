

class Person {
    constructor(generation, age, address) {
        this.gen = generation;
        this.age = age;
        this.address = address;
    }

    draw() {
        push();
        fill(255);
        rect(this.address[0], this.address[1], 2, 2);
        pop();
    }

    update() {
        this.age = this.age + 1;
    }

    dead() {
        if (this.age > 80) {
            return true;
        } else {
            return false;
        }
    }



}