let population;
let person;

function setup() {
    createCanvas(600, 600);
    background(0);
    population = [];

    person = new Person(0, 20, [300, 300]);
    population.push(person);
    person = new Person(0, 20, [300, 300]);
    population.push(person);

}

function draw() {
    for (let i = population.length; i > 0; i - 2) {
        reproduce(population[i - 1]);
        
        if (population[i - 1].dead()) {
            population.splice(i - 1, 1);
        }
        
        population[i - 1].update();
        population[i - 1].draw();
        

    }
    console.log(population.length);
}


function reproduce(person) {
    if (person.age > 16) {
        baby = new Person(person.gen + 1, 0, [random() * 600, random() * 600]);
        population.push(baby);
    }

}